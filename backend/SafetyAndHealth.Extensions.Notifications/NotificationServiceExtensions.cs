using System;

using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

using SafetyAndHealth.Notifications;
using SafetyAndHealth.Notifications.Abstractions;

namespace SafetyAndHealth.Extensions.Notifications
{
    /// <summary>
    ///     Расширения <see cref="IServiceCollection" /> для уведомлений.
    /// </summary>
    public static class NotificationServiceExtensions
    {
        /// <summary>
        ///     Регистрация уведомления.
        /// </summary>
        /// <typeparam name="TNotification"> Тип уведомления. </typeparam>
        /// <typeparam name="TOptions"> Тип настроек. </typeparam>
        /// <param name="services"> Сервисы. </param>
        /// <param name="optionsBuilder"> Экшн-построитель билдера настроек. </param>
        /// <returns> Сервисы. </returns>
        public static IServiceCollection AddNotification<TNotification, TOptions>(
            this IServiceCollection services,
            Action<NotificationOptionsBuilder<TOptions>> optionsBuilder)
            where TNotification : class, INotification<TOptions>
            where TOptions : class, new()
        {
            var options = new NotificationOptionsBuilder<TOptions>();
            optionsBuilder(options);

            var jobInfo = new NotificationJobInfo<TNotification, TOptions>(options);

            services.AddScoped<TNotification>();
            services.AddSingleton(jobInfo);

            return services;
        }

        /// <summary>
        ///     Регистрация уведомления.
        /// </summary>
        /// <typeparam name="TNotification"> Тип уведомления. </typeparam>
        /// <typeparam name="TOptions"> Тип настроек. </typeparam>
        /// <param name="services"> Сервисы. </param>
        /// <param name="config"> Секция конфигурации. </param>
        /// <param name="templateBuilderFactory">  Фабрика билдера шаблонов. </param>
        /// <returns> Сервисы. </returns>
        public static IServiceCollection AddNotification<TNotification, TOptions>(
            this IServiceCollection services,
            IConfiguration config,
            Func<IServiceProvider, ITemplateBuilder> templateBuilderFactory)
            where TNotification : class, INotification<TOptions>
            where TOptions : class, new()
        {
            var options = new NotificationOptions<TOptions>();

            const string dynamicOptionsSectionName = nameof(NotificationOptions<TOptions>.DynamicOptions);
            var dynamicOptionsSection = config.GetSection(dynamicOptionsSectionName);
            options.DynamicOptions = dynamicOptionsSection.Get<TOptions>();

            const string cronField = nameof(NotificationOptions<TOptions>.Cron);
            options.Cron = config[cronField];

            var jobInfo = new NotificationJobInfo<TNotification, TOptions>(templateBuilderFactory, options);

            services.AddScoped<TNotification>();
            services.AddSingleton(jobInfo);

            return services;
        }
    }
}