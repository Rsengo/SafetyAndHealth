using System;

using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

using SafetyAndHealth.Notifications;
using SafetyAndHealth.Notifications.Abstractions;

namespace SafetyAndHealth.Extensions.Notifications
{
    /// <summary>
    ///     Информация о фоновой задаче уведомления.
    ///     Используется для передачи данных между методами расширения для
    ///     <see cref="IServiceCollection" /> и <see cref="IApplicationBuilder" />.
    /// </summary>
    /// <typeparam name="TNotificationService"> Тип сервиса уведомлений. </typeparam>
    /// <typeparam name="TOptions"> Тип настроек. </typeparam>
    public sealed class NotificationJobInfo<TNotificationService, TOptions>
        where TNotificationService : class, INotification<TOptions>
        where TOptions : class, new()
    {
        /// <summary>
        ///     Конструктор.
        /// </summary>
        /// <param name="optionsBuilder"> Билдер настроек. </param>
        public NotificationJobInfo(
            NotificationOptionsBuilder<TOptions> optionsBuilder)
        {
            OptionsBuilder = optionsBuilder;
        }

        /// <summary>
        ///     Конструктор.
        /// </summary>
        /// <param name="templateBuilderFactory"> Фабрика билдера шаблонов. </param>
        /// <param name="options"> Настройки уведомлений. </param>
        public NotificationJobInfo(
            Func<IServiceProvider, ITemplateBuilder> templateBuilderFactory,
            NotificationOptions<TOptions> options)
        {
            TemplateBuilderFactory = templateBuilderFactory;
            Options = options;
        }

        /// <summary>
        ///     Настройки уведомлений.
        /// </summary>
        public NotificationOptions<TOptions> Options { get; }

        /// <summary>
        ///     Билдер настроек.
        /// </summary>
        public NotificationOptionsBuilder<TOptions> OptionsBuilder { get; }

        /// <summary>
        ///     Фабрика билдера шаблонов.
        /// </summary>
        public Func<IServiceProvider, ITemplateBuilder> TemplateBuilderFactory { get; }
    }
}