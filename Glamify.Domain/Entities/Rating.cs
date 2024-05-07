using Glamify.Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Glamify.Domain.Entities
{
    public class Rating : BaseEntity
    {
        public int BusinessId { get; set; } 
        public virtual Business Business { get; set; } = null!;
        public int UserId { get; set; }  
        public virtual User User { get; set; } = null!;
        public double Value { get; set; } 
        public DateTime CreationDate { get; set; } 
        public virtual Comment Comment { get; set; } = null!;
    }
}
