using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace SafetyAndHealth.Db
{
    internal class DesignTimeApplicationDbContextFactory :
        IDesignTimeDbContextFactory<ApplicationDbContext>
    {
        /// <summary>
        ///     Строка подключения к БД.
        /// </summary>
        private const string CONNSTRING = "Host=localhost;Port=5432;Database=gek2.0;Username=postgres;Password=Pass@word1234";

        /// <inheritdoc />
        public ApplicationDbContext CreateDbContext(params string[] args)
        {
            var builder = new DbContextOptionsBuilder<ApplicationDbContext>();
            builder.UseNpgsql(CONNSTRING, dbOpts =>
            {
                var migrationAssemblyName = GetType().Assembly.GetName().Name;

                dbOpts.MigrationsAssembly(migrationAssemblyName);
                dbOpts.EnableRetryOnFailure(5, TimeSpan.FromSeconds(10), null);
            });

            return new ApplicationDbContext(builder.Options);
        }

    }
}
