﻿using Glamify.Domain.Common;
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
        public User User { get; set; } = null!;
        public int LocationId { get; set; }
        public Business Location { get; set; } = null!;
        public DateTime AppointmentTime { get; set; }
        public AppointmentStatus Status { get; set; } 
        public virtual ICollection<Service> Services { get; set; } = new List<Service>();
        public int? EmployeeId { get; set; }
        public virtual Employee Employee { get; set; } = null!;
    }
}
