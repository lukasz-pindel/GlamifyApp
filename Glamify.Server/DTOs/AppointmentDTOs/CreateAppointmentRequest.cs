using Glamify.Domain.Entities;
using Glamify.Domain.Enums;

namespace Glamify.API.DTOs.AppointmentDTOs
{
    public class CreateAppointmentRequest
    {
        public int UserId { get; set; }
        public User User { get; set; } = null!;
        public int LocationId { get; set; }
        public Business Location { get; set; } = null!;
        public DateTime AppointmentTime { get; set; }
        public AppointmentStatus Status { get; set; }
        public virtual ICollection<Service> Services { get; set; } = new List<Service>();
    }
}
