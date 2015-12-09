using RestSharp;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Web;

namespace SPSyncWeb.Helpers
{
    public class SendGridHelper
    {
        //{"sub": {":next":["ljp123"],"current":["ljp888"]},"category": "Promotions", "filters": {"templates": {"settings": {"enable": 1,"template_id": "

        /// <summary>
        /// Send Email in WebAPi
        /// </summary>
        /// <param name="subject"></param>
        /// <param name="ToEmail"></param>
        /// <param name="currentStepOwner"></param>
        /// <param name="nextStepOwner"></param>
        public void SendEmailWebApi(string subject, string ToEmail)
        {
            //Get parameters from web.config
            AppSettingsReader appReader = new AppSettingsReader();
            var ApiWebSite = appReader.GetValue("ApiWebSite",typeof(string)).ToString();
            var ApiUrlAddress = appReader.GetValue("ApiUrlAddress", typeof(string)).ToString();
            var SendGridName = appReader.GetValue("SendGridName", typeof(string));
            var SendGridPassword = appReader.GetValue("SendGridPassword", typeof(string)); 
            var EmailFrom = appReader.GetValue("EmailFrom", typeof(string));
            var templateId = appReader.GetValue("TemplateId", typeof(string));

            //create json header for sending with template
            StringBuilder sb = new StringBuilder();
            sb.Append("{\"category\": \"Promotions\", \"filters\": {\"templates\": {\"settings\": {\"enable\": 1,\"template_id\": \"");
            sb.Append(templateId);
            sb.Append("\"}}}}");

            //Fromat request Parameters
            var client = new RestClient(ApiWebSite);
            var request = new RestRequest(ApiUrlAddress, Method.POST);
            request.AddParameter("api_user", SendGridName);
            request.AddParameter("api_key", SendGridPassword);
            request.AddParameter("to[]", ToEmail);
            request.AddParameter("subject", subject);
            request.AddParameter("from", EmailFrom);
            request.AddParameter("x-smtpapi", sb.ToString());
            request.AddParameter("html", "<!DOCTYPE HTML><html><head></header><body><img src=\"https://marketing-image-production.s3.amazonaws.com/uploads/609daab121cfbea8768eaeca2c6d6033378fc1ad3e32ee8bc5ad5fe3832fe4f9d55c6c54f1deb4b0a9ac700798e6beba5e873a161f7cb9a5e0e727a72e8544e1.jpg\"></img></body></html>"); //The plain text content of your email message.

            // execute the request
            var response = client.Execute(request);
            var content = response.Content;
        }
    }
}