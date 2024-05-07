using Glamify.Domain.Common;
using Glamify.Domain.Entities;

namespace Glamify.Domain.Entities
{
    public class Comment : BaseEntity
    {
        public string Content { get; set; } = null!;
        public int RatingId { get; set; }
        public virtual Rating Rating { get; set; } = null!;
    }
}
