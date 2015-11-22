using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SPSyncWeb.Models
{
    public class InvoiceDetail
    {
        public int ID { get; set; }
        public string Customer { get; set; }
        public string CustomerPhone { get; set; }
        public string InvoiceNumber { get; set; }
        public DateTime? InvoiceDate { get; set; }
        public int? PaymentTerms { get; set; }
        public DateTime? DueDate { get; set; }
        public int? Amount { get; set; }
        public string CustomerProfile { get; set; }
        public string Owner { get; set; }
        public string CurrentStep { get; set; }
        public string WFStatus { get; set; }
        public DateTime? LastStepDate { get; set; }
        public DateTime? PaidDate { get; set; }

    }
}