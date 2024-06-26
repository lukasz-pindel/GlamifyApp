﻿using Glamify.Domain.Common;
using Glamify.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Glamify.Domain.Entities
{
    public class User : BaseEntity
    {
        public string Username { get; set; } = null!;
        public string Password { get; set; } = null!;
        public string Email { get; set; } = null!;
        public UserType UserType { get; set; }
        [JsonIgnore]
        public virtual ICollection<Appointment> Appointments { get; set; } = new List<Appointment>();
        public virtual ICollection<Rating> Ratings { get; set; } = new List<Rating>();
        [JsonIgnore]
        public virtual ICollection<Business> OwnedBusinesses { get; set; } = new List<Business>();
    }
}
