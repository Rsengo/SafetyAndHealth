using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using SafetyAndHealth.Db;
using SafetyAndHealth.Db.Models;
using SafetyAndHealth.Extensions.Mailing;
using SafetyAndHealth.Extensions.Specified;
using SafetyAndHealth.IO;
using SafetyAndHealth.IO.Abstract;
using SafetyAndHealth.Json;
using SafetyAndHealth.Middlewares.MvcFilters;
using SafetyAndHealth.Services;
using SafetyAndHealth.Services.Abstract;

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

            services.AddIdentity<User, IdentityRole>()
                .AddEntityFrameworkStores<ApplicationDbContext>();

            services.AddApplicationCors();

            services.AddScheduler(Configuration["DbConnectionString"]);
            // TODO add notifications


            // TODO identity server

            services.AddMailService();

            services.AddAutoMapper(typeof(Startup));

            services.AddOptions<AppSettings>();

            services.AddTransient<IFilePathGenerator, FilePathGenerator>();
            services.AddTransient<IFileWorker, FileWorker>();

            services.AddControllers(config =>
            {
                config.Filters.Add<HttpGlobalExceptionFilter>();
            }).AddJsonOptions(opts => JsonSerializerConfigurator.Configure(opts.JsonSerializerOptions));

            services.AddApplicationSwagger();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseScheduler();

            app.UseHttpsRedirection();

            app.UseCors();

            app.UseApplicationSwagger();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
