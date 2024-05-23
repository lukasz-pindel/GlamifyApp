using Glamify.Domain.Common;
using Glamify.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Glamify.Domain.Entities
{
    public class Business : BaseEntity
    {
        public string Name { get; set; } = null!;
        public string Address { get; set; } = null!;
        public string Phone { get; set; } = null!;
        public string Email { get; set; } = null!;
        public BusinessType BusinessType { get; set; }
        public int? UserId { get; set; }
        public virtual User? Owner { get; set; }
        [JsonIgnore]
        public virtual ICollection<Service> ServicesOffered { get; set; } = new List<Service>();
        [JsonIgnore]
        public virtual ICollection<Appointment> Appointments { get; set; } = new List<Appointment>();
        public virtual ICollection<Rating> Ratings { get; set; } = new List<Rating>();
        public virtual ICollection<Employee> Employees { get; set; } = new List<Employee>();
    }
}
