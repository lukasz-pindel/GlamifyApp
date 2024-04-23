using Glamify.Domain.Common;
using Glamify.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Glamify.Domain.Entities
{
    public class User : BaseEntity
    {
        public string Username { get; set; }
        public string Password { get; set; } 
        public string Email { get; set; }
        public UserType UserType { get; set; } 
    }
}
