﻿/// <reference path="../App.js" />
// global app

(function () {
    'use strict';

    // The initialize function must be run each time a new page is loaded
    Office.initialize = function (reason) {
        $(document).ready(function () {
            app.initialize();
			
			 $('.get-data-from-sp').click(getDataFromSPOnline);
			 $('.load-data').click(getDataFromSPOnline);
			 //$('.read-data').click(getDataFromSelection);
			 $('.read-data').click(updateAllData);
			 $('.post-selected-data').click(postSelectedData);
			 $('.post-all-data').click(postAllData);
        });
        //app.showNotification(reason);

        Office.context.document.bindings.addFromNamedItemAsync("Table1", "table", { id: 'myTable' }, function (result) {
            if (result.status == 'succeeded') {
                app.showNotification('Table Loaded and binded.');
            }
            else
                app.showNotification('Error: ' + result.error.message);
        });

    };

    function postSelectedData() {
        Office.context.document.getSelectedDataAsync(Office.CoercionType.Table,
			function (result) {
			    if (result.status === Office.AsyncResultStatus.Succeeded) {
			        postData(result.value.rows);
			    } else {
			        app.showNotification('Error:', result.error.message);
			    }
			}
		);
    }



    var rowLength = 0;
    function postAllData() {
        app.showNotification("Submitting...");
        Excel.run(function (ctx) {
            var tablerows = ctx.workbook.tables.getItem('Table1').rows;
            tablerows.load('items');

            //var tableCol = ctx.workbook.tables.getItem('Table1').columns;
            //tableCol.load('items');

            return ctx.sync().then(function () {
                rowLength = tablerows.count;
                //console.log("tablerows Count: " + tablerows.count);
                //console.log("tableCol Count: " + tableCol.count);
            });
        }).then(function () {
            Excel.run(function (ctx) {
                // Create a proxy object for the active worksheet
                var sheet = ctx.workbook.worksheets.getActiveWorksheet();
                //var rangeA1 = sheet.getRange("A2:N54");
                var address = "A2:N" + (rowLength + 1);
                var rangeA1 = sheet.getRange(address);
                rangeA1.load("values");


                return ctx.sync().then(function () {
                    console.log(rangeA1.values);

                    postData(rangeA1.values);
                });
            }).catch(function (error) {
                console.log("Error: " + error);
                if (error instanceof OfficeExtension.Error) {
                    console.log("Debug info: " + JSON.stringify(error.debugInfo));
                }
            });
        }).catch(function (error) {
            console.log("Error: " + error);
            if (error instanceof OfficeExtension.Error) {
                console.log("Debug info: " + JSON.stringify(error.debugInfo));
            }
        });

        rowLength = 0;
    }

    function postData(data) {
        var pData = [];
        $(data).each(function () {
            //"ID", "Customer", "CustomerPhone", "Invoice #", "Invoice date", "Due Date", "Amount", "Payment Terms", 
            //"Customer Profile", "Owner", "CurrentStep", "WFStatus", "LastStepDate", "PaidDate"
            if (this[3] && this[10] == "1") {
                pData.push({
                    "ID": this[0],
                    "Customer": this[1],
                    "CustomerPhone": this[2],
                    "InvoiceNumber": this[3],
                    "InvoiceDate": convertStringDate(this[4]),
                    "DueDate": convertStringDate(this[5]),
                    "Amount": this[6],
                    "PaymentTerms": this[7],
                    "CustomerProfile": this[8],
                    //"Owner": this[9],
                    //"CurrentStep": this[10],
                    //"WFStatus": this[11],
                    //"LastStepDate": convertStringDate(this[12]),
                    "PaidDate": convertStringDate(this[9])
                });
            }
        });

        $.ajax({
            url: SPServices.UpdateDataService,
            type: "POST",
            dataType: "json",
            data: JSON.stringify(pData),
            contentType: "application/json;odata=verbose",
            success: function (data) {
                console.log(data);
                app.showNotification("Update data successful...");
            },
            error: function (error) {
                console.log(JSON.stringify(error));
            }
        });
    }

    function updateAllData() {
        app.showNotification("Loading...");
        Office.context.document.bindings.getByIdAsync("myTable", function (asyncResult) {
            var myTableBinding = asyncResult.value;
            $.ajax({
                url: SPServices.getDataService,
                type: "GET",
                headers: { "accept": "application/json;odata=verbose" },
                success: function (newData) {
                    var originalLength = myTableBinding.rowCount;
                    var tableData = new Office.TableData();
                    tableData.headers = ["ID", "Customer", "CustomerPhone", "Invoice #", "Invoice date", "Due Date", "Amount", "Payment Terms", "Customer Profile", "PaidDate", "NeedUpdate"];
                    var originRows = [], newRows = [];
                    $.each(newData, function (index, item) {
                        if (index < originalLength)
                            originRows.push([item.ID, item.Customer, item.CustomerPhone, item.InvoiceNumber, convertDateString(item.InvoiceDate), convertDateString(item.DueDate), item.Amount, item.PaymentTerms, item.CustomerProfile, convertDateString(item.PaidDate), "0"]);
                        else
                            newRows.push([item.ID, item.Customer, item.CustomerPhone, item.InvoiceNumber,
                                (item.InvoiceDate), convertDateString(item.DueDate), item.Amount, item.PaymentTerms, item.CustomerProfile, convertDateString(item.PaidDate), "0"]);
                    });
                    while (originRows.length < originalLength) {
                        originRows.push(['', '', '', '', '', '', '', '', '', '', "0"]);
                    }
                    tableData.rows = originRows;

                    $.when(
                        myTableBinding.setDataAsync(tableData, function (asyncResult) {
                            if (asyncResult.status == "failed") {
                                app.showNotification("Action failed with error: " + asyncResult.error.message);
                            } else {
                                app.showNotification("Updated successfully!");
                            }
                        })
                    ).done(function () {
                        if (newRows.length > 0) {
                            myTableBinding.addRowsAsync(newRows, function (asyncResult) {
                                if (asyncResult.status == "failed") {
                                    app.showNotification("Action failed with error: " + asyncResult.error.message);
                                } else {
                                    app.showNotification("New rows added.");
                                }
                            });
                        }
                    });
                    //if (newRows.length > 0) {
                    //    myTableBinding.addRowsAsync(newRows, function (asyncResult) {
                    //        if (asyncResult.status == "failed") {
                    //            app.showNotification("Action failed with error: " + asyncResult.error.message);
                    //        } else {
                    //            app.showNotification("New rows added.");
                    //        }
                    //    });
                    //}
                },
                error: function (error) {
                    console.log(JSON.stringify(error));
                }
            })
                //.done(function (newData) {
                //    var originalLength = myTableBinding.rowCount;
                //    var tableData = new Office.TableData();
                //    tableData.headers = ["ID", "Customer", "CustomerPhone", "Invoice #", "Invoice date", "Due Date", "Amount", "Payment Terms", "Customer Profile", "PaidDate"];
                //    var originRows = [], newRows=[];
                //    $.each(newData, function (index, item) {
                //        if(index<originalLength)
                //            originRows.push([item.ID, item.Customer, item.CustomerPhone, item.InvoiceNumber, convertDateString(item.InvoiceDate), convertDateString(item.DueDate), item.Amount, item.PaymentTerms, item.CustomerProfile, convertDateString(item.PaidDate)]);
                //        else
                //            newRows.push([item.ID, item.Customer, item.CustomerPhone, item.InvoiceNumber,
                //                (item.InvoiceDate), convertDateString(item.DueDate), item.Amount, item.PaymentTerms, item.CustomerProfile, convertDateString(item.PaidDate)]);
                //    });
                //    while (originRows.length < originalLength) {
                //        originRows.push(['','','','','','','','','','']);
                //    }
                //    tableData.rows = originRows;

                //    myTableBinding.setDataAsync(tableData, function (asyncResult) {
                //        if (asyncResult.status == "failed") {
                //            app.showNotification("Action failed with error: " + asyncResult.error.message);
                //        } else {
                //            app.showNotification("Updated successfully!");
                //        }
                //    });
                //    if (newRows.length > 0) {
                //        myTableBinding.addRowsAsync(newRows, function (asyncResult) {
                //            if (asyncResult.status == "failed") {
                //                app.showNotification("Action failed with error: " + asyncResult.error.message);
                //            } else {
                //                app.showNotification("New rows added.");
                //            }
                //        });
                //    } 
                //}); 
        });
    }
    function onBindingNotFound() {
        app.showNotification("Binding not found...");
    }
    // Reads data from current document selection and displays a notification
    function getDataFromSelection() {
        Office.context.document.getSelectedDataAsync(Office.CoercionType.Table,
			function (result) {
			    if (result.status === Office.AsyncResultStatus.Succeeded) {
			        app.showNotification('The selected text is:', '"' + result.value + '"');
                    console.log(result.value.rows)
			    } else {
			        app.showNotification('Error:', result.error.message);
			    }
			}
		);
    }
    
	function getDataFromSPOnline() {
	    $.ajax({
	        url: SPServices.getDataService,
	        type: "GET",
	        headers: {
	            "accept": "application/json;odata=verbose"
	        },
	        success: function (data) {
	            //var titles = JSON.stringify(data);
	            //$('.data-show').val(titles)

	            loadData(data);
	        },
	        error: function (error) {
	            app.showNotification(JSON.stringify(error));
	        }
	    });
	}

	function loadData(jsonData) {
	    /* Select an empty cell and click Run Code to write a table */
	    // Create a TableData object.
	    var myTable = new Office.TableData();
	    //myTable.headers = ["ID", "Title", "InvNo", "ClientName", "Amount", "DueDate", "Status", "WorkflowType", "DSOBase", "DSORec", "Owner"];
	    //myTable.headers = ["ID", "Customer", "CustomerPhone", "Invoice #", "Invoice date", "Due Date", "Amount", "Payment Terms", "Customer Profile", "Owner", "CurrentStep", "WFStatus", "LastStepDate", "PaidDate"];
	    myTable.headers = ["ID", "Customer", "CustomerPhone", "Invoice #", "Invoice date", "Due Date", "Amount", "Payment Terms", "Customer Profile", "PaidDate", "NeedUpdate"];
	    var results = [];
	    $.each(jsonData, function (index, item) {
	        //results.push([item.ID, item.Title,item.InvNo,item.ClientName,item.Amount,item.DueDate,item.Status,item.WorkflowType,item.DSOBase,item.DSORec,item.Owner]);
	        results.push([item.ID, item.Customer, item.CustomerPhone, item.InvoiceNumber, convertDateString(item.InvoiceDate), convertDateString(item.DueDate), item.Amount, item.PaymentTerms, item.CustomerProfile, convertDateString(item.PaidDate), "0"]);
	    });
	    myTable.rows = results;

	    // Set the myTable in the document.
	    Office.context.document.setSelectedDataAsync(
          myTable,
          { coercionType: Office.CoercionType.Table },
          function (asyncResult) {
              if (asyncResult.status == "failed") {
                  app.showNotification("Action failed with error: " + asyncResult.error.message);
              } else {
                  app.showNotification("Load data successful...");
              }
          }
        );
	}

	function convertDateString(dateString) {
	    if (dateString != "" && dateString != null) {
	        var dateTemp = new Date(dateString);

	        return dateTemp.toLocaleDateString();
	    }

	    return "";
	}

	function convertStringDate(serial) {
	    if (serial != "") {
	        var dateTemp = new Date('1/1/1900');
	        dateTemp.setDate(dateTemp.getDate() + serial);

	        return dateTemp.toLocaleDateString();
	    }

	    return "";
	}
})();