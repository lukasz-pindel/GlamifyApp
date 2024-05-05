using Glamify.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

public class AppointmentConfiguration : IEntityTypeConfiguration<Appointment>
{
    public void Configure(EntityTypeBuilder<Appointment> builder)
    {
        builder.HasKey(a => a.Id);
        builder.Property(a => a.AppointmentTime).IsRequired();
        builder.HasOne(a => a.User)
               .WithMany(u => u.Appointments)
               .HasForeignKey(a => a.UserId);
        builder.HasOne(a => a.Location)
               .WithMany()  // If Location has a collection of Appointments, specify it here
               .HasForeignKey(a => a.LocationId);

        builder.HasMany(a => a.Services)
               .WithMany(s => s.Appointments)
               .UsingEntity(j => j.ToTable("AppointmentServices"));  // Custom join table for the many-to-many relationship
    }
}
