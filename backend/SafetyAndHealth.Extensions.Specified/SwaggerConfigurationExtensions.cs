using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;

namespace SafetyAndHealth.Extensions.Specified
{
    /// <summary>
    ///     Класс расширений для регистрации сваггера в проекте.
    /// </summary>
    public static class SwaggerConfigurationExtensions
    {
        /// <summary>
        ///     Специализированный метод для регистрации сваггера, настроенных для ЗИС3.
        /// </summary>
        /// <param name="services"> Набор сервисов приложения. </param>
        public static void AddApplicationSwagger(this IServiceCollection services)
        {
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "SaH API", Version = "v1" });
            });
        }

        /// <summary>
        ///     Специализированный метод для добавления промежуточных сервисов сваггера, настроенных для ЗИС3.
        /// </summary>
        /// <param name="app"> Построитель конфигурации промежуточных сервисов приложения. </param>
        public static void UseApplicationSwagger(this IApplicationBuilder app)
        {
            app.UseSwagger();

            app.UseSwaggerUI(c => { c.SwaggerEndpoint("/swagger/v1/swagger.json", "SaH API v1"); });
        }
    }
}
