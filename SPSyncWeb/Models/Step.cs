using Microsoft.SharePoint.Client;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SPSyncWeb.Models
{
    public class Step
    {
        public int ID { get; set; }
        public string InvoiceNumber { get; set; }
        public int? WorkflowID { get; set; }
        public string ScenarioType { get; set; }
        public int? ActionSeqID { get; set; }
        public int? PreSeqID { get; set; }
        public string ActionStatus { get; set; }
        public string TaskType { get; set; }
        public FieldUserValue Operator { get; set; }
        public string Description { get; set; }        
        public string DeviceId { get; set; }        
    }
}