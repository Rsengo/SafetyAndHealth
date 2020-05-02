using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace SafetyAndHealth.Extensions.Specified
{
    public static class DatabaseConfigurationException
    {
        public static IServiceCollection AddApplicationDbContext<TContext>(
            this IServiceCollection services,
            string connectionString) where TContext: DbContext
        {
            return services.AddDbContext<TContext>(opts =>
            {
                opts.UseNpgsql(connectionString, dbOpts =>
                {
                    var migrationAssemblyName = typeof(TContext)
                        .Assembly
                        .GetName()
                        .Name;

                    dbOpts.MigrationsAssembly(migrationAssemblyName);
                    dbOpts.EnableRetryOnFailure(5, TimeSpan.FromSeconds(10), null);
                });
            });
        }
    }
}
