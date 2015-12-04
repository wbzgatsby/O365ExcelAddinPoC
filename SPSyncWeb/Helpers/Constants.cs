using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;

namespace SPSyncWeb.Helpers
{
    public class Constants
    {
        //public static string webUrl = "https://businessos.sharepoint.com/sites/testDev";
        //public static string userName = "chinasdc@businessos.onmicrosoft.com";
        //public static string pwd = "Pwcwelcome2";
        //public static string listName = "InvoiceDetail";
        ////public string[] Columns = { "Title", "InvNo", "ClientName", "Amount", "DueDate", "Status", "WorkflowType", "DSOBase", "DSORec", "Owner" };
        //public static string[] Columns = { "Title", "CustomerPhone", "Invoice_x0020__x0023_", "Invoice_x0020_date", "Payment_x0020_Terms", "Due_x0020_Date", "Amount", "Customer_x0020_Profile", "Owner", "CurrentStep", "WFStatus", "LastStepDate", "PaidDate" };


        public static string webUrl = ConfigurationManager.AppSettings["SPHostUrl"];
        public static string userName = ConfigurationManager.AppSettings["User"];
        public static string pwd = ConfigurationManager.AppSettings["Password"];
        
        //public string[] Columns = { "Title", "InvNo", "ClientName", "Amount", "DueDate", "Status", "WorkflowType", "DSOBase", "DSORec", "Owner" };
        public static string[] Columns = { "Title", "CustomerPhone", "Invoice_x0020__x0023_", "Invoice_x0020_date", "Payment_x0020_Terms", "Due_x0020_Date", "Amount", "Customer_x0020_Profile", "Owner", "CurrentStep", "WFStatus", "LastStepDate", "PaidDate" };

        //list names
        public static string listInvoiceDetail = ConfigurationManager.AppSettings["InvoiceDetail"];
        public static string listActionHistory = ConfigurationManager.AppSettings["ActionHistory"];
        public static string listPaymentPlan = ConfigurationManager.AppSettings["PaymentPlan"];
        public static string listWorkflowComments = ConfigurationManager.AppSettings["WorkflowComments"];
        public static string listTask = ConfigurationManager.AppSettings["Task"];
        public static string listActivityStream = ConfigurationManager.AppSettings["ActivityStream"];


        //Action Status
        public const string ActionStatus_NOTSTARTED = "Not Started";
        public const string ActionStatus_INPROGRESS = "In-Progress";
        public const string ActionStatus_COMPLETE = "Completed";

        //Task type
        public const string TaskType_APPROVAL = "Approval";
        public const string TaskType_CREATEMAIL = "Create Letter";
        public const string TaskType_MAIL = "Send Letter";
        public const string TaskType_CALL = "Call Customer";
        public const string TaskType_COMPLETE = "Payment received";

        //WF Status
        public const string WFStatus_NOTSTARTED = "Not Started";
        public const string WFStatus_INPROGRESS = "In Progress";
        public const string WFStatus_AWAITING = "Awaiting Payment";
        public const string WFStatus_PAID = "Paid";

        //DefaultComment
        public const string DefaultComment_Approval = "Request approved";
        public const string DefaultComment_CreateLetter = "Collection letter created";
        public const string DefaultComment_PTP = "Payment plan created";
        public const string DefaultComment_PTPApproval = "Payment plan approved";
        public const string DefaultComment_PaymentReceive = "Payment received";
        public const string DefaultComment_Send = "Email sent to customer";

        //public static string webUrl = "https://businessos.sharepoint.com/sites/mktdemodev";
        //public static string userName = "chinasdc@businessos.onmicrosoft.com";
        //public static string pwd = "Pwcwelcome2";
        //public static string listName = "Invoice detail";
        ////public string[] Columns = { "Title", "InvNo", "ClientName", "Amount", "DueDate", "Status", "WorkflowType", "DSOBase", "DSORec", "Owner" };
        //public static string[] Columns = { "Title", "CustomerPhone", "Invoice_x0020__x0023_", "Invoice_x0020_date", "Payment_x0020_Terms", "Due_x0020_Date", "Amount", "Customer_x0020_Profile", "Owner", "CurrentStep", "WFStatus", "LastStepDate", "PaidDate" };
    }
}