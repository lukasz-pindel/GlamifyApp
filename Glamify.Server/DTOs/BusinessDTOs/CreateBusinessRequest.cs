using Glamify.Domain.Enums;

namespace Glamify.API.DTOs.BusinessDTOs
{
    public class CreateOrUpdateBusinessRequest
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string Address { get; set; } = null!;
        public string Phone { get; set; } = null!;
        public string Email { get; set; } = null!;
        public BusinessType BusinessType { get; set; }
        public int OwnerUserId { get; set; }
    }
}
