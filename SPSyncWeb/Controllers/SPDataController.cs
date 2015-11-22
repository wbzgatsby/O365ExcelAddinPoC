using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security;
using System.Web.Http;
using Microsoft.SharePoint.Client;
using SPSyncWeb.Models;
using System.Web.Http.Description;
using SPSyncWeb.Helpers;

namespace SPSyncWeb.Controllers
{
    public class SPDataController : ApiController
    {
        public List<InvoiceDetail> GetData()
        {
            SecureString password = Utilities.SecurePwd(Constants.pwd);

            List<InvoiceDetail> titles = new List<InvoiceDetail>();
            using (var context = new ClientContext(Constants.webUrl))
            {
                context.Credentials = new SharePointOnlineCredentials(Constants.userName, password);

                var list = context.Web.Lists.GetByTitle(Constants.listName);
                context.Load(list);
                context.ExecuteQuery();

                CamlQuery query = CamlQuery.CreateAllItemsQuery(10000, Constants.Columns);
                ListItemCollection items = list.GetItems(query);

                context.Load(items);
                context.ExecuteQuery();


                foreach (var item in items)
                {
                    titles.Add(new InvoiceDetail
                        {
                            ID = item.Id,
                            Customer = Utilities.GetFieldValue(item["Title"]),
                            CustomerPhone = Utilities.GetFieldValue(item["CustomerPhone"]),
                            InvoiceNumber = Utilities.GetFieldValue(item["Invoice_x0020__x0023_"]),
                            InvoiceDate = Utilities.GetDateTimeFieldValue(item["Invoice_x0020_date"]),
                            PaymentTerms = Utilities.GetNumberFieldValue(item["Payment_x0020_Terms"]),
                            DueDate = Utilities.GetDateTimeFieldValue(item["Due_x0020_Date"]),
                            Amount = Utilities.GetNumberFieldValue(item["Amount"]),
                            CustomerProfile = Utilities.GetFieldValue(item["Customer_x0020_Profile"]),
                            //Owner = Utilities.GetUserFieldValue(context, item["Owner"]),
                            //CurrentStep = Utilities.GetFieldValue(item["CurrentStep"]),
                            //WFStatus = Utilities.GetFieldValue(item["WFStatus"]),
                            //LastStepDate = Utilities.GetDateTimeFieldValue(item["LastStepDate"]),
                            PaidDate = Utilities.GetDateTimeFieldValue(item["PaidDate"])
                        });
                }


                return titles;
            }
        }
    }
}
