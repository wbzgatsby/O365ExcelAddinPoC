/// <reference path="../App.js" />
// global app

(function () {
    'use strict';

    // The initialize function must be run each time a new page is loaded
    Office.initialize = function (reason) {
        $(document).ready(function () {
            app.initialize();
			
			 $('.get-data-from-sp').click(getDataFromSPOnline);
			 $('.load-data').click(getDataFromSPOnline);
			 $('.read-data').click(getDataFromSelection);

			 $('.post-selected-data').click(postSelectedData);
			 $('.post-all-data').click(postAllData);
        });
        app.showNotification(reason);
    };

    function postSelectedData() {
        Office.context.document.getSelectedDataAsync(Office.CoercionType.Table,
			function (result) {
			    if (result.status === Office.AsyncResultStatus.Succeeded) {
			        //var pData = [];
			        //$(result.value.rows).each(function () {
			        //    //"ID", "Customer", "CustomerPhone", "Invoice #", "Invoice date", "Due Date", "Amount", "Payment Terms", 
			        //    //"Customer Profile", "Owner", "CurrentStep", "WFStatus", "LastStepDate", "PaidDate"
			        //    pData.push({
			        //        "ID": this[0],
			        //        "Customer": this[1],
			        //        "CustomerPhone": this[2],
			        //        "InvoiceNumber": this[3],
			        //        "InvoiceDate": this[4],
			        //        "DueDate": this[5],
			        //        "Amount": this[6],
			        //        "PaymentTerms": this[7],
			        //        "CustomerProfile": this[8],
			        //        "Owner": this[9],
			        //        "CurrentStep": this[10],
			        //        "WFStatus": this[11],
			        //        "LastStepDate": this[12],
			        //        "PaidDate": this[13]
			        //    });
			        //});

			        //$.ajax({
			        //    url: "/PwCO365SPsync/API/SPDataUpdate",
			        //    type: "POST",
			        //    dataType: "json",
			        //    data: JSON.stringify(pData),
			        //    contentType: "application/json;odata=verbose",
			        //    success: function (data) {
			        //        console.log(data);
			        //        app.showNotification("Update data successful...");
			        //    },
			        //    error: function (error) {
			        //        console.log(JSON.stringify(error));
			        //    }
			        //});
			        postData(result.value.rows);
			    } else {
			        app.showNotification('Error:', result.error.message);
			    }
			}
		);
    }



    var rowLength = 0;
    function postAllData() {
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
    }

    function postData(data) {
        var pData = [];
        $(data).each(function () {
            //"ID", "Customer", "CustomerPhone", "Invoice #", "Invoice date", "Due Date", "Amount", "Payment Terms", 
            //"Customer Profile", "Owner", "CurrentStep", "WFStatus", "LastStepDate", "PaidDate"
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
                "Owner": this[9],
                "CurrentStep": this[10],
                "WFStatus": this[11],
                "LastStepDate": convertStringDate(this[12]),
                "PaidDate": convertStringDate(this[13])
            });
        });

        $.ajax({
            url: "/PwCO365SPsync/API/SPDataUpdate",
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
        //if(Office.select("bindings#id);)
        Office.context.document.bindings.addFromNamedItemAsync("Table1", "table", { id: 'myTable' }, function (result) {
            if (result.status == 'succeeded') {
                app.showNotification('Added new binding with type: ' + result.value.type + ' and id: ' + result.value.id);


            }
            else
                app.showNotification('Error: ' + result.error.message);
        });
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
    
	function getDataFromSPOnline(data) {
	    $.ajax({
	        url: "/PwCO365SPsync/api/SPData",
	        type: "GET",
	        headers: {
	            "accept": "application/json;odata=verbose"
	        },
	        success: function (data) {
	            var titles = JSON.stringify(data);
	            $('.data-show').val(titles)

	            loadData(data);
	        },
	        error: function (error) {
	            app.showNotification(JSON.stringify(error));
	        }
	    });
	}

	function getDataFromSPOnlineLocal(data) {
	    $.ajax({
	        url: "/api/SPData",
	        type: "GET",
	        headers: {
	            "accept": "application/json;odata=verbose"
	        },
	        success: function (data) {
	            var titles = JSON.stringify(data);
	            $('.data-show').val(titles)

	            loadData(data);
	        },
	        error: function (error) {
	            app.showNotification(JSON.stringify(error));
	        }
	    });
	}

	//$(document).ready(function () {
	//    $('.get-data-from-sp').click(getDataFromSPOnlineLocal);
	//    $('.load-data').click(getDataFromSPOnlineLocal);
	//});

	function loadData(jsonData) {
	    /* Select an empty cell and click Run Code to write a table */
	    // Create a TableData object.
	    var myTable = new Office.TableData();
	    //myTable.headers = ["ID", "Title", "InvNo", "ClientName", "Amount", "DueDate", "Status", "WorkflowType", "DSOBase", "DSORec", "Owner"];
	    //myTable.headers = ["ID", "Customer", "CustomerPhone", "Invoice #", "Invoice date", "Due Date", "Amount", "Payment Terms", "Customer Profile", "Owner", "CurrentStep", "WFStatus", "LastStepDate", "PaidDate"];
	    myTable.headers = ["ID", "Customer", "CustomerPhone", "Invoice #", "Invoice date", "Due Date", "Amount", "Payment Terms", "Customer Profile", "PaidDate"];
	    var results = [];
	    $.each(jsonData, function (index, item) {
	        //results.push([item.ID, item.Title,item.InvNo,item.ClientName,item.Amount,item.DueDate,item.Status,item.WorkflowType,item.DSOBase,item.DSORec,item.Owner]);
	        results.push([item.ID, item.Customer, item.CustomerPhone, item.InvoiceNumber, convertDateString(item.InvoiceDate), convertDateString(item.DueDate), item.Amount, item.PaymentTerms, item.CustomerProfile, convertDateString(item.PaidDate)]);
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
	        dateTemp.setDate(dateTemp.getDate() + serial - 2);

	        return dateTemp.toLocaleDateString();
	    }

	    return "";
	}
})();