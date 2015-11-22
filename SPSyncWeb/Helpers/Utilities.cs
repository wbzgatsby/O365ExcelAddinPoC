using Microsoft.SharePoint.Client;
using System;
using System.Collections.Generic;
using System.Linq;
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

        public static string GetUserFieldValue(ClientContext ctx, object o)
        {
            var owner = (FieldUserValue)o;
            if (null != owner && !string.IsNullOrEmpty(owner.LookupValue) && !string.IsNullOrEmpty(owner.Email))
            {
                //return owner.LookupValue;
                return owner.Email;
            }

            return string.Empty;
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
    }
}