using Glamify.Domain.Common;
using Glamify.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Glamify.Domain.Entities
{
    public class Business : BaseEntity
    {
        public string Name { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public BusinessType BusinessType { get; set; }
        public virtual ICollection<Service> ServicesOffered { get; set; } = new List<Service>();
        public virtual ICollection<Appointment> Appointments { get; set; } = new List<Appointment>();
    }
}
