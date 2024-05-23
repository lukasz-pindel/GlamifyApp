using Glamify.Domain.Enums;

namespace Glamify.API.DTOs.AppointmentDTOs
{
    public class UpdateAppointmentRequest
    {
        public DateTime AppointmentTime { get; set; }
        public AppointmentStatus Status { get; set; }
    }
}
