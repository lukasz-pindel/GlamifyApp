using Glamify.Domain.Common;
using Glamify.Domain.Entities;

public class Employee : BaseEntity
{
    public string Name { get; set; } = null!;
    public string? Position { get; set; }
    public string? ContactInfo { get; set; }

    public int BusinessId { get; set; }
    public virtual Business Business { get; set; } = null!;
    public virtual ICollection<Appointment> Appointments { get; set; } = new List<Appointment>();
}
