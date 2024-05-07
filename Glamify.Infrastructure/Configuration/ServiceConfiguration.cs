using Glamify.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

public class ServiceConfiguration : IEntityTypeConfiguration<Service>
{
    public void Configure(EntityTypeBuilder<Service> builder)
    {
        builder.HasKey(s => s.Id);
        builder.Property(s => s.Name).IsRequired().HasMaxLength(100);
        builder.Property(s => s.Description).HasMaxLength(500);
        builder.Property(s => s.Price).HasColumnType("decimal(18,2)");

        builder.HasMany(s => s.Appointments)
               .WithMany(a => a.Services)
               .UsingEntity(j => j.ToTable("AppointmentServices"));

        builder.HasOne(s => s.Business)
               .WithMany(b => b.ServicesOffered)
               .HasForeignKey(s => s.BusinessId)
               .OnDelete(DeleteBehavior.Restrict);
    }
}
