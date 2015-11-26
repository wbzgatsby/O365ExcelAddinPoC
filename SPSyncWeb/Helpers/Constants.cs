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
        public static string listName = ConfigurationManager.AppSettings["ListName"];
        //public string[] Columns = { "Title", "InvNo", "ClientName", "Amount", "DueDate", "Status", "WorkflowType", "DSOBase", "DSORec", "Owner" };
        public static string[] Columns = { "Title", "CustomerPhone", "Invoice_x0020__x0023_", "Invoice_x0020_date", "Payment_x0020_Terms", "Due_x0020_Date", "Amount", "Customer_x0020_Profile", "Owner", "CurrentStep", "WFStatus", "LastStepDate", "PaidDate" };



        //public static string webUrl = "https://businessos.sharepoint.com/sites/mktdemodev";
        //public static string userName = "chinasdc@businessos.onmicrosoft.com";
        //public static string pwd = "Pwcwelcome2";
        //public static string listName = "Invoice detail";
        ////public string[] Columns = { "Title", "InvNo", "ClientName", "Amount", "DueDate", "Status", "WorkflowType", "DSOBase", "DSORec", "Owner" };
        //public static string[] Columns = { "Title", "CustomerPhone", "Invoice_x0020__x0023_", "Invoice_x0020_date", "Payment_x0020_Terms", "Due_x0020_Date", "Amount", "Customer_x0020_Profile", "Owner", "CurrentStep", "WFStatus", "LastStepDate", "PaidDate" };
    }
}