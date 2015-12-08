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
        public void SendEmailWebApi(string subject, string ToEmail, string currentStepOwner, string nextStepOwner)
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
            sb.Append("{\"sub\": {\":next\":[\"");
            sb.Append(nextStepOwner);
            sb.Append("\"],\"current\":[\"");
            sb.Append(currentStepOwner);
            sb.Append("\"]},\"category\": \"Promotions\", \"filters\": {\"templates\": {\"settings\": {\"enable\": 1,\"template_id\": \"");
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
            request.AddParameter("text", "test"); //The plain text content of your email message.

            // execute the request
            var response = client.Execute(request);
            var content = response.Content;
        }
    }
}