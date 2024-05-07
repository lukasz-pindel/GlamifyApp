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
               .WithOne(s => s.Business)
               .HasForeignKey(s => s.BusinessId);

        builder.HasMany(b => b.Appointments)
               .WithOne(a => a.Location)
               .HasForeignKey(a => a.LocationId);
    }
}
