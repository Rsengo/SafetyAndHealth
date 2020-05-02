using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using SafetyAndHealth.Db;
using SafetyAndHealth.Extensions.Mailing;
using SafetyAndHealth.Extensions.Specified;
using SafetyAndHealth.Json;
using SafetyAndHealth.Middlewares.MvcFilters;

namespace SafetyAndHealth
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddApplicationDbContext<ApplicationDbContext>(
                Configuration["DbConnectionString"]);

            services.AddScheduler(Configuration["DbConnectionString"]);

            services.AddMailService();

            // TODO add notifications

            services.AddControllers(config =>
            {
                config.Filters.Add<HttpGlobalExceptionFilter>();
            }).AddJsonOptions(opts => JsonSerializerConfigurator.Configure(opts.JsonSerializerOptions));

            services.AddSwagger();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseScheduler();

            // app.UseHttpsRedirection();

            app.UseRouting();

            // app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            app.UseSwagger();
        }
    }
}
