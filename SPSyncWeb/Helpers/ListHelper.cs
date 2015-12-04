using Microsoft.SharePoint.Client;
using SPSyncWeb.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Security;
using System.Web;

namespace SPSyncWeb.Helpers
{
    public static class ListHelper
    {
        public static ClientContext GetClientContext()
        {
            SecureString password = Utilities.SecurePwd(Constants.pwd);
            var context = new ClientContext(Constants.webUrl);
            context.Credentials = new SharePointOnlineCredentials(Constants.userName, password);

            return context;
        }

//        public static ListItem GetInvoiceByNum(string invoiceNum)
//        {
//            ListItem item = null;

//            using (var context = GetClientContext())
//            {
//                var list = context.Web.Lists.GetByTitle(Constants.listInvoiceDetail);

//                CamlQuery query = new CamlQuery();
//                query.ViewXml = @"<View>
//                                    <RowLimit>1</RowLimit>
//                                    <Query>
//                                        <Where>
//                                            <Eq>
//                                                <FieldRef Name='Invoice_x0020__x0023_'/>
//                                                <Value Type='Text'>" + invoiceNum + @"</Value>
//                                            </Eq>
//                                        </Where>
//                                    </Query>
//                                </View>";
//                ListItemCollection items = list.GetItems(query);
//                context.Load(items);
//                context.ExecuteQuery();

//                if (null != items && items.Count > 0)
//                {
//                    item = items[0];
//                }
//            }

//            return item;
//        }

//        public static ListItemCollection GetActionHistory(string invoiceNum)
//        {
//            ListItemCollection steps = null;

//            using (var context = GetClientContext())
//            {
//                var list = context.Web.Lists.GetByTitle(Constants.listActionHistory);

//                CamlQuery query = new CamlQuery();
//                query.ViewXml = @"<View>
//                                    <Query>
//                                        <OrderBy>
//                                          <FieldRef Name='WorkflowID' Ascending='TRUE'></FieldRef>
//                                          <FieldRef Name='ActionSeqID' Ascending='TRUE'></FieldRef>
//                                        </OrderBy>
//                                        <Where>
//                                          <And>
//                                            <Eq>
//                                              <FieldRef Name='Invoice_x0020_Number'/>
//                                              <Value Type='Text'>" + invoiceNum + @"</Value>
//                                            </Eq>
//                                            <Eq>
//                                              <FieldRef Name='NewColumn1'/>
//                                              <Value Type='Text'>60</Value>
//                                            </Eq>
//                                          </And>
//                                        </Where>
//                                  </Query>
//                                </View>"; 
//                ListItemCollection items = list.GetItems(query);
//                context.Load(items);
//                context.ExecuteQuery();

//                steps = items;
//            }

//            return steps;
//        }

        public static ListItemCollection GetListItems(string camlQuery, string listName)
        {
            ListItemCollection items = null;

            using (var context = GetClientContext())
            {
                var list = context.Web.Lists.GetByTitle(listName);

                CamlQuery query = new CamlQuery();
                query.ViewXml = camlQuery;
                ListItemCollection temp = list.GetItems(query);

                context.Load(temp);
                context.ExecuteQuery();

                items = temp;
            }

            return items;
        }

        public static ListItem GetListItemById(int id, string listName)
        {
            ListItem item = null;

            using (var context = GetClientContext())
            {
                var list = context.Web.Lists.GetByTitle(listName);
                ListItem temp = list.GetItemById(id);

                context.Load(temp);
                context.ExecuteQuery();

                item = temp;
            }

            return item;
        }

        public static ListItem GetListItemByCamlQuery(string camlQuery, string listName)
        {
            ListItem item = null;

            using (var context = GetClientContext())
            {
                var list = context.Web.Lists.GetByTitle(listName);
                CamlQuery query = new CamlQuery();
                query.ViewXml = camlQuery;
                ListItemCollection temp = list.GetItems(query);

                context.Load(temp);
                context.ExecuteQuery();

                if (null != temp && temp.Count > 0)
                {
                    item = temp[0];
                }
            }

            return item;
        }

        public static void UpdateListItem(Hashtable data, string listName, int id)
        {
            using (var context = GetClientContext())
            {
                var list = context.Web.Lists.GetByTitle(listName);
                var item = list.GetItemById(id);

                foreach (DictionaryEntry entry in data)
                {
                    item[entry.Key.ToString()] = entry.Value;
                }

                item.Update();
                context.ExecuteQuery();

            }
        }

        public static void UpdateListItemByCamlQuery(Hashtable data, string camlQuery, string listName)
        {
            using (var context = GetClientContext())
            {
                var list = context.Web.Lists.GetByTitle(listName);

                CamlQuery query = new CamlQuery();
                query.ViewXml = camlQuery;
                var items = list.GetItems(query);

                context.Load(items);
                context.ExecuteQuery();

                if (null != items && items.Count > 0)
                {
                    var item = items[0];
                    foreach (DictionaryEntry entry in data)
                    {
                        item[entry.Key.ToString()] = entry.Value;
                    }

                    item.Update();
                    context.ExecuteQuery();
                }
            }
        }

        //public static void AddPaymentPlan(List<PaymentPlanModel> planItems)
        //{
        //    using (var context = GetClientContext())
        //    {
        //        var list = context.Web.Lists.GetByTitle(Constants.listPaymentPlan);
        //        foreach (PaymentPlanModel planItem in planItems)
        //        {
        //            ListItemCreationInformation itemCreateInfo = new ListItemCreationInformation();
        //            var item = list.AddItem(itemCreateInfo);

        //            item["InvoiceNo"] = planItem.InvoiceNo;
        //            item["Amount"] = planItem.Amount;
        //            item["Percentage"] = planItem.Percentage;
        //            item["DueDate"] = planItem.DueDate;

        //            item.Update();

        //            context.ExecuteQuery();
        //        }
        //    }
        //}

        //public static void AddWFComments(string Comments, string InvoiceNumber, int WorkflowId)
        //{
        //    using (var context = GetClientContext())
        //    {
        //        var list = context.Web.Lists.GetByTitle(Constants.listWorkflowComments);

        //            ListItemCreationInformation itemCreateInfo = new ListItemCreationInformation();
        //            var item = list.AddItem(itemCreateInfo);

        //            item["Comments"] = Comments;
        //            item["InvoiceNumber"] = InvoiceNumber;
        //            item["WorkflowId"] = WorkflowId;

        //            item.Update();
        //            context.ExecuteQuery();
                
        //    }
        //}

        public static void AddListItem(Hashtable data, string listName)
        {
            using (var context = GetClientContext())
            {
                var list = context.Web.Lists.GetByTitle(listName);

                ListItemCreationInformation itemCreateInfo = new ListItemCreationInformation();

                var item = list.AddItem(itemCreateInfo);
                foreach (DictionaryEntry entry in data)
                {
                    item[entry.Key.ToString()] = entry.Value;
                }

                item.Update();
                context.ExecuteQuery();

            }
        }

        public static void AddListItems(Hashtable[] data, string listName)
        {
            using (var context = GetClientContext())
            {
                var list = context.Web.Lists.GetByTitle(listName);

                foreach (Hashtable ht in data)
                {
                    ListItemCreationInformation itemCreateInfo = new ListItemCreationInformation();
                    var item = list.AddItem(itemCreateInfo);

                    foreach (DictionaryEntry entry in ht)
                    {
                        item[entry.Key.ToString()] = entry.Value;
                    }

                    item.Update();
                }
                
                context.ExecuteQuery();
            }
        }
    }
}