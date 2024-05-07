using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

public class EmployeeConfiguration : IEntityTypeConfiguration<Employee>
{
    public void Configure(EntityTypeBuilder<Employee> builder)
    {
        builder.HasKey(e => e.Id);
        builder.Property(e => e.Name).IsRequired().HasMaxLength(100);
        builder.Property(e => e.Position).IsRequired().HasMaxLength(50);
        builder.Property(e => e.ContactInfo).HasMaxLength(100);

        builder.HasOne(e => e.Business)
               .WithMany(b => b.Employees)
               .HasForeignKey(e => e.BusinessId);

        builder.HasMany(e => e.Appointments)
               .WithOne(a => a.Employee)
               .HasForeignKey(a => a.EmployeeId);
    }
}