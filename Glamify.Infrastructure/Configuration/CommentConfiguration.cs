using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

public class CommentConfiguration : IEntityTypeConfiguration<Comment>
{
    public void Configure(EntityTypeBuilder<Comment> builder)
    {
        builder.HasKey(c => c.Id);
        builder.Property(c => c.Content).IsRequired().HasMaxLength(1000);

        builder.HasOne(c => c.Rating)
               .WithOne(r => r.Comment)
               .HasForeignKey<Comment>(c => c.RatingId);
    }
}