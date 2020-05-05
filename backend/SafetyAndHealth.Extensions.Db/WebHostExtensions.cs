﻿using System;
using System.Data.SqlClient;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Polly;

namespace SafetyAndHealth.Extensions.Db
{
    public static class WebHostExtensions
    {
        public static IHost MigrateDbContext<TContext>(
            this IHost webHost,
            Action<TContext, IServiceProvider> seeder = null)
            where TContext : DbContext
        {
            using (var scope = webHost.Services.CreateScope())
            {
                var services = scope.ServiceProvider;

                // var logger = services.GetRequiredService<ILogger<TContext>>();

                var context = services.GetService<TContext>();

                try
                {
                    // logger.LogInformation($"Migrating database associated with context {typeof(TContext).Name}");

                    var retry = Policy.Handle<SqlException>()
                        .WaitAndRetry(new TimeSpan[]
                        {
                            TimeSpan.FromSeconds(5),
                            TimeSpan.FromSeconds(10),
                            TimeSpan.FromSeconds(15),
                        });

                    retry.Execute(() =>
                    {
                        context.Database.Migrate();
                        seeder?.Invoke(context, services);
                    });


                    // logger.LogInformation($"Migrated database associated with context {typeof(TContext).Name}");
                }
                catch (Exception)
                {
                    //logger.LogError(ex,
                    //    $"An error occurred while migrating the database used on context {typeof(TContext).Name}");
                }
            }

            return webHost;
        }
    }
}
