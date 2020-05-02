using System;
using Hangfire;
using Hangfire.PostgreSql;

using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

namespace SafetyAndHealth.Extensions.Specified
{
    /// <summary>
    ///     Расширения для запуска планировщика ЗИС.
    /// </summary>
    public static class SchedulerConfigurationExtensions
    {
        /// <summary>
        ///     Регистрация планировщика.
        /// </summary>
        /// <param name="services"> Сервисы. </param>
        /// <param name="connstring"> Строка подключения к БД. </param>
        /// <returns> Сервисы. </returns>
        public static IServiceCollection AddScheduler(
            this IServiceCollection services,
            string connstring)
        {
            return services.AddScheduler(
                connstring,
                new PostgreSqlStorageOptions());
        }

        /// <summary>
        ///     Регистрация планировщика.
        /// </summary>
        /// <param name="services"> Сервисы. </param>
        /// <param name="connstring"> Строка подключения к БД. </param>
        /// <param name="optionsBuilder"> Билдер конфигурации подключения к БД. </param>
        /// <returns> Сервисы. </returns>
        public static IServiceCollection AddScheduler(
            this IServiceCollection services,
            string connstring,
            Action<PostgreSqlStorageOptions> optionsBuilder)
        {
            var options = new PostgreSqlStorageOptions();
            optionsBuilder(options);

            return services.AddScheduler(connstring, options);
        }

        /// <summary>
        ///     Запуск сопутствующих модулей планировщика.
        /// </summary>
        /// <param name="app"> Билдер приложения. </param>
        /// <returns> Билдер приложения. </returns>
        public static IApplicationBuilder UseScheduler(this IApplicationBuilder app)
        {
            return app.UseHangfireDashboard();
        }

        /// <summary>
        ///     Регистрация планировщика.
        /// </summary>
        /// <param name="services"> Сервисы. </param>
        /// <param name="connstring"> Строка подключения к БД. </param>
        /// <param name="dbOptions"> Конфигурация подключения к БД. </param>
        /// <returns> Сервисы. </returns>
        private static IServiceCollection AddScheduler(
            this IServiceCollection services,
            string connstring,
            PostgreSqlStorageOptions dbOptions)
        {
            services.AddHangfire(configuration => configuration
                .SetDataCompatibilityLevel(CompatibilityLevel.Version_170)
                .UseSimpleAssemblyNameTypeSerializer()
                .UseRecommendedSerializerSettings()
                .UsePostgreSqlStorage(connstring, dbOptions));

            services.AddHangfireServer();

            return services;
        }
    }
}
