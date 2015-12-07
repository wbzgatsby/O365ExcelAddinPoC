using Microsoft.SharePoint.Client;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Security;
using System.Web;

namespace SPSyncWeb.Helpers
{
    public static class Utilities
    {
        public static SecureString SecurePwd(string pwd)
        {
            var securePassword = new SecureString();
            foreach (var c in pwd)
            {
                securePassword.AppendChar(c);
            }


            return securePassword;
        }

        public static string GetFieldValue(object o)
        {
            if (null != o)
            {
                return o.ToString();
            }

            return string.Empty;
        }

        public static string GetUserFieldEmail(object o)
        {
            var owner = (FieldUserValue)o;
            if (null != owner && !string.IsNullOrEmpty(owner.LookupValue) && !string.IsNullOrEmpty(owner.Email))
            {
                //return owner.LookupValue;
                return owner.Email;
            }

            return string.Empty;
        }

        public static FieldUserValue GetUserFieldValue(object o)
        {
            var owner = (FieldUserValue)o;
            if (null != owner)
            {
                return owner;
            }

            return null;
        }

        public static User EnsureUser(ClientContext ctx, string loginName)
        {
            try
            {
                User spUser = ctx.Web.EnsureUser(loginName);
                ctx.Load(spUser);
                //ctx.ExecuteQuery();

                return spUser;
            }
            catch { }

            return null;
        }

        public static int? GetNumberFieldValue(object o)
        { 
            string num = GetFieldValue(o);
            if (!string.IsNullOrEmpty(num))
            { 
                int number;
                Int32.TryParse(num, out number);
                return number;
            }

            return null;
        }

        public static DateTime? GetDateTimeFieldValue(object o)
        {
            string strTime = GetFieldValue(o);
            if (!string.IsNullOrEmpty(strTime))
            { 
                DateTime dateTime;
                DateTime.TryParse(strTime, out dateTime);

                if (null != dateTime)
                {
                    return dateTime.Date;
                }
            }

            return null;
        }

        public static int ConvertInt(string value)
        { 
            int temp = 0;
            Int32.TryParse(value, out temp);

            return temp;
        }

        public static string ConsumeWebAPI(string url, string requestType, byte[] parameter)
        {
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(url);
            request.Method = requestType;
            request.ContentType = "application/xml";
            if (null != parameter)
            {
                request.ContentLength = parameter.Length;
                using (Stream post = request.GetRequestStream())
                {
                    post.Write(parameter, 0, parameter.Length);
                }
            }

            //get response
            string response = string.Empty;
            try
            {
                WebResponse webResponse = request.GetResponse();
                using (Stream webStream = webResponse.GetResponseStream())
                {
                    if (webStream != null)
                    {
                        using (StreamReader responseReader = new StreamReader(webStream))
                        {
                            response = responseReader.ReadToEnd();
                        }
                    }
                }
            }
            catch (Exception e)
            {
                //To do log the exception
            }

            return response;
        }
    }
}