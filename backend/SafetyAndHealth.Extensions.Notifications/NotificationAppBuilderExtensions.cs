using System;

using Hangfire;

using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

using SafetyAndHealth.Notifications;
using SafetyAndHealth.Notifications.Abstractions;

namespace SafetyAndHealth.Extensions.Notifications
{
    /// <summary>
    ///     Расширения <see cref="IApplicationBuilder" /> для уведомлений.
    /// </summary>
    public static class NotificationAppBuilderExtensions
    {
        /// <summary>
        ///     Использователь уведомление.
        /// </summary>
        /// <typeparam name="TNotification"> Тип уведомления. </typeparam>
        /// <typeparam name="TOptions"> Тип настроек. </typeparam>
        /// <param name="app"> Билдер приложения. </param>
        /// <returns> Билдер приложения. </returns>
        public static IApplicationBuilder UseNotification<TNotification, TOptions>(this IApplicationBuilder app)
            where TNotification : class, INotification<TOptions>
            where TOptions : class, new()
        {
            var sp = app.ApplicationServices;

            var jobs = sp.GetServices<NotificationJobInfo<TNotification, TOptions>>();

            foreach (var job in jobs)
            {
                if (job.OptionsBuilder != null)
                {
                    sp.AddJobFromBuilder<TNotification, TOptions>(job.OptionsBuilder);
                    continue;
                }

                sp.AddJob<TNotification, TOptions>(job.TemplateBuilderFactory, job.Options);
            }

            return app;
        }

        /// <summary>
        ///     Запуск уведомлений.
        /// </summary>
        /// <typeparam name="TNotification"></typeparam>
        /// <typeparam name="TOptions"> Тип настроек. </typeparam>
        /// <param name="sp"> Провайдер IoC. </param>
        /// <param name="templateBuilderFactory"> Фабрика билдера шаблонов. </param>
        /// <param name="options"> Настройка уведомлений. </param>
        private static void AddJob<TNotification, TOptions>(
            this IServiceProvider sp,
            Func<IServiceProvider, ITemplateBuilder> templateBuilderFactory,
            NotificationOptions<TOptions> options)
            where TNotification : class, INotification<TOptions>
            where TOptions : class, new()
        {
            var templateParser = templateBuilderFactory?.Invoke(sp);
            var cron = options.Cron;
            RecurringJob.AddOrUpdate<TNotification>(ns => ns.NotifyAsync(templateParser, options), cron);
        }

        /// <summary>
        ///     Запуск уведомлений с получением настроек из билдера.
        /// </summary>
        /// <typeparam name="TNotification"> Тип уведомления. </typeparam>
        /// <typeparam name="TOptions"> Тип настроек. </typeparam>
        /// <param name="sp"> Провайдер IoC. </param>
        /// <param name="optionsBuilder"> Билдер настроек уведомления. </param>
        private static void AddJobFromBuilder<TNotification, TOptions>(
            this IServiceProvider sp,
            NotificationOptionsBuilder<TOptions> optionsBuilder)
            where TNotification : class, INotification<TOptions>
            where TOptions : class, new()
        {
            var templateParser = optionsBuilder?.TemplateBuilderFactory?.Invoke(sp);

            var cron = optionsBuilder?.Cron;

            var additional = new TOptions();
            optionsBuilder?.DynamicOptionsBuilder(sp, additional);

            var notificationOptions = new NotificationOptions<TOptions>
            {
                DynamicOptions = additional,
                Cron = cron
            };

            RecurringJob.AddOrUpdate<TNotification>(ns => ns.NotifyAsync(templateParser, notificationOptions), cron);
        }
    }
}