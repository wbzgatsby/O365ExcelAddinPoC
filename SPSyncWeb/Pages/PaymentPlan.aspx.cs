using SPSyncWeb.Helpers;
using SPSyncWeb.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace SPSyncWeb.Pages
{
    public partial class PaymentPlan : System.Web.UI.Page
    {
        protected string InvoiceNumber
        {
            get
            {
                if (!string.IsNullOrEmpty(Request.QueryString["IN"]))
                {
                    return Request.QueryString["IN"];
                }

                return string.Empty;
            }
        }

        protected int ActionID
        {
            get
            {
                if (!string.IsNullOrEmpty(Request.QueryString["ActID"]))
                {
                    return Utilities.ConvertInt(Request.QueryString["ActID"]);
                }

                return 0;
            }
        }

        protected int InvoiceID { get; set; }
        protected int Amount 
        {
            get
            { 
                if(null != ViewState["Amount"])
                {
                    return Int32.Parse(ViewState["Amount"].ToString());
                }

                return 0;
            }
            set
            {
                ViewState["Amount"] = value;
            }
        }
        public string Customer { get; set; }
        public string CustomerProfile { get; set; }

        public List<Step> Steps { get; set; }

        protected void Page_Load(object sender, EventArgs e)
        {
            //GetInvoiceDetail();
            if (!IsPostBack)
            {
                //var item = ListHelper.GetInvoiceByNum(InvoiceNumber);
                
                div_Amount.InnerText = Amount.ToString();
                div_OutStanding.InnerText = Amount.ToString();
            }
        }

        private void BuildSteps()
        {
            string camlQuery = @"<View>
                                    <Query>
                                        <OrderBy>
                                          <FieldRef Name='WorkflowID' Ascending='TRUE'></FieldRef>
                                          <FieldRef Name='ActionSeqID' Ascending='TRUE'></FieldRef>
                                        </OrderBy>
                                        <Where>
                                          <And>
                                            <Eq>
                                              <FieldRef Name='Invoice_x0020_Number'/>
                                              <Value Type='Text'>" + InvoiceNumber + @"</Value>
                                            </Eq>
                                            <Eq>
                                              <FieldRef Name='NewColumn1'/>
                                              <Value Type='Text'>60</Value>
                                            </Eq>
                                          </And>
                                        </Where>
                                  </Query>
                                </View>";
            var items = ListHelper.GetListItems(camlQuery, Constants.listActionHistory);

            
            if (null != items && items.Count > 0)
            {
                Steps = new List<Step>();
                foreach (var item in items)
                {
                    Steps.Add(new Step
                        {
                            ID = item.Id,
                            InvoiceNumber = Utilities.GetFieldValue(item["Invoice_x0020_Number"]),
                            WorkflowID = Utilities.GetNumberFieldValue(item["WorkflowID"]),
                            ScenarioType = Utilities.GetFieldValue(item["NewColumn1"]),
                            ActionSeqID = Utilities.GetNumberFieldValue(item["ActionSeqID"]),
                            PreSeqID = Utilities.GetNumberFieldValue(item["PreSeqID"]),
                            ActionStatus = Utilities.GetFieldValue(item["ActionStatus"]),
                            TaskType = Utilities.GetFieldValue(item["tasktype"]),
                            Operator = Utilities.GetUserFieldValue(item["Operator"]),
                            Description = Utilities.GetFieldValue(item["Description"]),
                            DeviceId = Utilities.GetFieldValue(item["DeviceId"])
                        });
                }
            }
        }

        private void GetInvoiceDetail()
        {
            string camlQuery = @"<View>
                                    <RowLimit>1</RowLimit>
                                    <Query>
                                        <Where>
                                            <Eq>
                                                <FieldRef Name='Invoice_x0020__x0023_'/>
                                                <Value Type='Text'>" + InvoiceNumber + @"</Value>
                                            </Eq>
                                        </Where>
                                    </Query>
                                </View>";
            var item = ListHelper.GetListItemByCamlQuery(camlQuery, Constants.listInvoiceDetail);

            InvoiceID = item.Id;
            Amount = Int32.Parse(Utilities.GetFieldValue(item["Amount"]));
            Customer = Utilities.GetFieldValue(item["Title"]);
            CustomerProfile = Utilities.GetFieldValue(item["Customer_x0020_Profile"]);
        }

        protected void bt_Confirm_Click(object sender, EventArgs e)
        {
            BuildSteps();

            SavePaymentPlan();
            SaveComments();
            MoveToNextStep();
            CompleteTask();
            AddActivity();
        }

        private void SavePaymentPlan()
        {
            Hashtable[] hts = new Hashtable[4];

            Hashtable ht1 = new Hashtable();
            ht1.Add("InvoiceNo", InvoiceNumber);
            ht1.Add("Amount", Int32.Parse(txt_Amount1.Value) * Amount / 100);
            ht1.Add("DueDate", Utilities.GetDateTimeFieldValue(txt_PayDate1.Value));
            ht1.Add("Percentage", Decimal.Parse(txt_Amount1.Value) / 100);
            hts[0] = ht1;

            Hashtable ht2 = new Hashtable();
            ht2.Add("InvoiceNo", InvoiceNumber);
            ht2.Add("Amount", Int32.Parse(txt_Amount2.Value) * Amount / 100);
            ht2.Add("DueDate", Utilities.GetDateTimeFieldValue(txt_PayDate2.Value));
            ht2.Add("Percentage", Decimal.Parse(txt_Amount2.Value) / 100);
            hts[1] = ht2;

            Hashtable ht3 = new Hashtable();
            ht3.Add("InvoiceNo", InvoiceNumber);
            ht3.Add("Amount", Int32.Parse(txt_Amount3.Value) * Amount / 100);
            ht3.Add("DueDate", Utilities.GetDateTimeFieldValue(txt_PayDate3.Value));
            ht3.Add("Percentage", Decimal.Parse(txt_Amount3.Value) / 100);
            hts[2] = ht3;

            Hashtable ht4 = new Hashtable();
            ht4.Add("InvoiceNo", InvoiceNumber);
            ht4.Add("Amount", Int32.Parse(txt_Amount4.Value) * Amount / 100);
            ht4.Add("DueDate", Utilities.GetDateTimeFieldValue(txt_PayDate4.Value));
            ht4.Add("Percentage", Decimal.Parse(txt_Amount4.Value) / 100);
            hts[3] = ht4;


            ListHelper.AddListItems(hts, Constants.listPaymentPlan);
        }

        private void SaveComments()
        {
            Hashtable ht = new Hashtable();
            ht.Add("InvoiceNumber", InvoiceNumber);
            ht.Add("WorkflowId", ActionID);
            ht.Add("Comments", txt_Comments.Value.Trim());

            ListHelper.AddListItem(ht, Constants.listWorkflowComments);
        }

        private void MoveToNextStep()
        { 
            //Complete current step
            Hashtable htCurrent = new Hashtable();
            htCurrent.Add("ActionStatus", Constants.ActionStatus_COMPLETE);
            ListHelper.UpdateListItem(htCurrent, Constants.listActionHistory, ActionID);


            //Start next step
            if (null != Steps && Steps.Count > 0)
            {
                int actSeqId = GetCurrentActSeqID();
                int workflowId = GetCurrentWFID();

                foreach (var step in Steps)
                {
                    int preSeqID = step.PreSeqID.GetValueOrDefault();
                    if (preSeqID == actSeqId && workflowId != step.WorkflowID)
                    {
                        Hashtable htNext = new Hashtable();
                        htNext.Add("ActionStatus", Constants.ActionStatus_INPROGRESS);
                        htNext.Add("Start_x0020_Date", DateTime.Today);

                        ListHelper.UpdateListItem(htNext, Constants.listActionHistory, step.ID);
                        break;
                    }
                }
            }
        }

        private void CompleteTask()
        {
            //Complete current task
            string camlQueryTask = @"<View>
                                    <RowLimit>1</RowLimit>
                                    <Query>
                                        <OrderBy><FieldRef Name='Modified' Ascending='FALSE'></FieldRef></OrderBy>
                                        <Where>
                                            <And>
                                                <And>
                                                    <Eq>
                                                        <FieldRef Name='InvoiceNo' ></FieldRef>
                                                        <Value Type='Text'>" + InvoiceNumber + @"</Value>
                                                    </Eq>
                                                    <Eq>
                                                        <FieldRef Name='tasktype'></FieldRef>
                                                        <Value Type='Text'>" + Constants.TaskType_CALL + @"</Value>
                                                    </Eq>
                                                </And>
                                                <And>
                                                    <IsNotNull><FieldRef Name='Status'></FieldRef></IsNotNull>
                                                    <IsNotNull><FieldRef Name='Title'></FieldRef></IsNotNull>
                                                </And>
                                            </And>
                                        </Where>
                                    </Query>
                                </View>";
            Hashtable htTask = new Hashtable();
            htTask.Add("Status", Constants.ActionStatus_COMPLETE);
            ListHelper.UpdateListItemByCamlQuery(htTask, camlQueryTask, Constants.listTask);


            //Update info in Invoice Detail list
            int owner = 0;
            if (null != Steps && Steps.Count > 0)
            {
                int actSeqId = GetCurrentActSeqID();
                int workflowId = GetCurrentWFID();

                foreach (var step in Steps)
                {
                    int preSeqID = step.PreSeqID.GetValueOrDefault();
                    if (preSeqID == actSeqId && workflowId != step.WorkflowID)
                    {
                        var stepOwner = step.Operator;
                        if (null != stepOwner)
                        {
                            owner = stepOwner.LookupId;

                            break;
                        }
                    }
                }
            }

            Hashtable htInvoice = new Hashtable();
            htInvoice.Add("CurrentStep", Constants.TaskType_APPROVAL);
            if (owner > 0)
            {
                htInvoice.Add("Owner", owner);
            }
            htInvoice.Add("WFStatus", Constants.WFStatus_INPROGRESS);
            htInvoice.Add("LastStepDate", DateTime.Today);

            ListHelper.UpdateListItem(htInvoice, Constants.listInvoiceDetail, InvoiceID);




            //Add New task
            Hashtable htNewTask = new Hashtable();
            htNewTask.Add("AssignedTo", owner);
            htNewTask.Add("Title", Constants.TaskType_APPROVAL);
            htNewTask.Add("tasktype", Constants.TaskType_APPROVAL);
            htNewTask.Add("DueDate", DateTime.Today.AddDays(3));
            //htNewTask.Add("Comments", "");
            htNewTask.Add("InvoiceNo", InvoiceNumber);
            htNewTask.Add("actID", ActionID);

            ListHelper.AddListItem(htNewTask, Constants.listTask);
        }

        private void AddActivity()
        {
            int workflowId = GetCurrentWFID();

            Hashtable ht = new Hashtable();
            ht.Add("CompletedDate", DateTime.Today);
            ht.Add("ActionType", Constants.TaskType_CALL);
            ht.Add("Comment", Constants.DefaultComment_PTPApproval);
            ht.Add("ActionID", ActionID);
            ht.Add("InvoiceNo", InvoiceNumber);
            ht.Add("WorkflowID", workflowId);
            ht.Add("IsTask", "Yes");
            ht.Add("InvoiceAmount", Amount);
            ht.Add("Customer", Customer);
            ht.Add("CustomerProfile", CustomerProfile);

            ListHelper.AddListItem(ht, Constants.listActivityStream);


            //Send Email
            SendGridHelper help = new SendGridHelper();
            help.SendEmailWebApi("Hello I'm testing SendGrid", "jiangping.lu@pwc.com", "ljp123", "ljp888");
        }

        private int GetCurrentActSeqID()
        {
            if (null != Steps && Steps.Count > 0)
            {
                foreach (var step in Steps)
                {
                    if (step.ID == ActionID)
                    {
                        return step.ActionSeqID.GetValueOrDefault();
                    }
                }
            }

            return 0;
        }

        private int GetCurrentWFID()
        {
            if (null != Steps && Steps.Count > 0)
            {
                foreach (var step in Steps)
                {
                    if (step.ID == ActionID)
                    {
                        return step.WorkflowID.GetValueOrDefault();
                    }
                }
            }

            return 0;
        }
    }
}