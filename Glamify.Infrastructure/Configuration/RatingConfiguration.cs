using Glamify.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

public class RatingConfiguration : IEntityTypeConfiguration<Rating>
{
    public void Configure(EntityTypeBuilder<Rating> builder)
    {
        builder.HasKey(r => r.Id);
        builder.Property(r => r.Value).IsRequired();
        builder.Property(r => r.CreationDate).IsRequired();

        builder.HasOne(r => r.Business)
               .WithMany(b => b.Ratings)
               .HasForeignKey(r => r.BusinessId)
               .OnDelete(DeleteBehavior.Cascade);

        builder.HasOne(r => r.User)
               .WithMany(u => u.Ratings)
               .HasForeignKey(r => r.UserId)
               .OnDelete(DeleteBehavior.Cascade);

        builder.HasOne(r => r.Comment)
               .WithOne(c => c.Rating)
               .HasForeignKey<Comment>(c => c.RatingId);
    }
}
