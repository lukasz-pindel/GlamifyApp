using Glamify.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Glamify.Domain.Entities
{
    public class Business
    {
        public string Name { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public BusinessType BusinessType { get; set; }
        public ICollection<Service> ServicesOffered { get; set; }
    }
}
