using Microsoft.SharePoint.Client;
using SPSyncWeb.Helpers;
using SPSyncWeb.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security;
using System.Web.Http;

namespace SPSyncWeb.Controllers
{
    public class SPDataUpdateController : ApiController
    {
        [HttpPost]
        public List<InvoiceDetail> Post(List<InvoiceDetail> invoices)
        {
            SecureString password = Utilities.SecurePwd(Constants.pwd);

            using (var context = new ClientContext(Constants.webUrl))
            {
                context.Credentials = new SharePointOnlineCredentials(Constants.userName, password);

                var list = context.Web.Lists.GetByTitle(Constants.listName);
                foreach (InvoiceDetail invoice in invoices)
                {
                    if (null != invoice)
                    {
                        ListItem item;
                        if (invoice.ID > 0)
                        {
                            item = list.GetItemById(invoice.ID);
                        }
                        else
                        {
                            ListItemCreationInformation itemCreateInfo = new ListItemCreationInformation();
                            item = list.AddItem(itemCreateInfo);
                        }

                        Update(invoice, item, context);
                    }
                }

                context.ExecuteQuery();
            }

            return invoices;
        }

        //"Title", "CustomerPhone", "Invoice_x0020__x0023_", "Invoice_x0020_date", "Payment_x0020_Terms", "Due_x0020_Date", 
        //"Amount", "Customer_x0020_Profile", "Owner", "CurrentStep", "WFStatus", "LastStepDate", "PaidDate"
        private void Update(InvoiceDetail invoice, ListItem item, ClientContext ctx)
        {
            item["Title"] = invoice.Customer;
            item["CustomerPhone"] = invoice.CustomerPhone;
            item["Invoice_x0020__x0023_"] = invoice.InvoiceNumber;
            item["Invoice_x0020_date"] = invoice.InvoiceDate;
            item["Payment_x0020_Terms"] = invoice.PaymentTerms;
            item["Due_x0020_Date"] = invoice.DueDate;
            item["Amount"] = invoice.Amount;
            item["Customer_x0020_Profile"] = invoice.CustomerProfile;

            //User owner = Utilities.EnsureUser(ctx, invoice.Owner);
            //if (null != owner)
            //{
            //    item["Owner"] = owner;
            //}

            //item["CurrentStep"] = invoice.CurrentStep;
            //item["WFStatus"] = invoice.WFStatus;
            //item["LastStepDate"] = invoice.LastStepDate;
            item["PaidDate"] = invoice.PaidDate;
            if (invoice.PaidDate.HasValue) {
                item["WFStatus"] = "Paid";
            }
            item.Update();
        }
    }
}
