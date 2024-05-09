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

        builder.HasMany(b => b.Ratings)
               .WithOne(r => r.Business)
               .HasForeignKey(r => r.BusinessId);

        builder.HasMany(b => b.Employees)
               .WithOne(e => e.Business)
               .HasForeignKey(e => e.BusinessId);

        builder.HasOne(b => b.Owner)
               .WithMany(u => u.OwnedBusinesses)
               .HasForeignKey(b => b.UserId)
               .OnDelete(DeleteBehavior.Restrict);
    }
}
