using Glamify.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

public class BusinessConfiguration : IEntityTypeConfiguration<Business>
{
    public void Configure(EntityTypeBuilder<Business> builder)
    {
        builder.HasKey(b => b.Id);
        builder.Property(b => b.Name).IsRequired().HasMaxLength(100);
        builder.Property(b => b.Address).IsRequired().HasMaxLength(200);
        builder.Property(b => b.Phone).IsRequired().HasMaxLength(15);
        builder.Property(b => b.Email).HasMaxLength(100);

        builder.HasMany(b => b.ServicesOffered)
               .WithMany()
               .UsingEntity(j => j.ToTable("BusinessServices"));

        // Configure the one-to-many relationship with Appointment
        builder.HasMany(b => b.Appointments)
               .WithOne(a => a.Location)
               .HasForeignKey(a => a.LocationId);
    }
}
