using Glamify.Domain.Common;
using Glamify.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Glamify.Domain.Entities
{
    public class Appointment : BaseEntity
    {
        public int UserId { get; set; }
        public User User { get; set; }
        public int ServiceId { get; set; }
        public Service Service { get; set; }
        public int LocationId { get; set; }
        public Business Location { get; set; }
        public DateTime AppointmentTime { get; set; }
        public AppointmentStatus Status { get; set; } 
    }
}
