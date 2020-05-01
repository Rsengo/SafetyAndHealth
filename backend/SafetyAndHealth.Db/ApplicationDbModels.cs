using Microsoft.EntityFrameworkCore;
using SafetyAndHealth.Db.Models;

namespace SafetyAndHealth.Db
{
    public partial class ApplicationDbContext
    {
        public DbSet<Certificate> Certificates { get; set; }

        public DbSet<FileDescription> FileDescriptions { get; set; }

        public DbSet<Position> Positions { get; set; }

        public DbSet<UserCertificate> UserCertificate { get; set; }
    }
}
