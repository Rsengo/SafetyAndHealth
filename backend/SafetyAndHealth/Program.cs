using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using SafetyAndHealth.Db;
using SafetyAndHealth.Db.Seed;
using SafetyAndHealth.Extensions.Db;

namespace SafetyAndHealth
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHost(args)
                .MigrateDbContext<ApplicationDbContext>((ctx, _) =>
                {
                    new ApplicationDbContextSeed()
                        .SeedAsync(ctx)
                        .Wait();
                })
                //.MigrateDbContext<ConfigurationDbContext>((context, services) =>
                //{
                //    var configuration = services.GetService<IConfiguration>();
                //
                //    new ConfigurationDbContextSeed()
                //        .SeedAsync(context, configuration)
                //        .Wait();
                //})
                .Run();
        }

        public static IHost CreateHost(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                })
            .Build();
    }
}
