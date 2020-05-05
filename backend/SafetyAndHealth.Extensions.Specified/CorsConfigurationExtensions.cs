using System;
using Microsoft.Extensions.DependencyInjection;

namespace SafetyAndHealth.Extensions.Specified
{
    public static class CorsConfigurationExtensions
    {
        private const string POLICY_NAME = "allow_all";

        /// <summary>
        ///     Добавление CORS в набор сервисов приложения.
        /// </summary>
        /// <param name="services"> Набор сервисов приложения. </param>
        public static void AddApplicationCors(this IServiceCollection services)
        {
            services.AddCors(opt => opt.AddPolicy(POLICY_NAME, builder => builder
                .AllowAnyHeader()
                .AllowAnyMethod()
                //.AllowCredentials()
                .WithExposedHeaders("content-disposition")
                .AllowAnyOrigin()));
        }
    }
}
