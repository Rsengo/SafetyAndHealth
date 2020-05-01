using System;

using SafetyAndHealth.Notifications.Abstractions;

namespace SafetyAndHealth.Extensions.Notifications
{
    /// <summary>
    ///     Билдер настроек уведомлений.
    /// </summary>
    /// <typeparam name="TOptions"> Тип параметров уведомлений. </typeparam>
    public class NotificationOptionsBuilder<TOptions>
        where TOptions : class, new()
    {
        /// <summary>
        ///     Конструктор.
        /// </summary>
        internal NotificationOptionsBuilder()
        {
        }

        /// <summary>
        ///     Расписание в формате Cron.
        /// </summary>
        internal string Cron { get; private set; }

        /// <summary>
        ///     Динамические свойства для уведомления.
        /// </summary>
        internal Action<IServiceProvider, TOptions> DynamicOptionsBuilder { get; private set; }

        /// <summary>
        ///     Фабрика билдера шаблонов.
        /// </summary>
        internal Func<IServiceProvider, ITemplateBuilder> TemplateBuilderFactory { get; private set; }

        /// <summary>
        ///     Добавление динамических настроек.
        /// </summary>
        /// <param name="dynamicOptionsBuilder"> Билдер настроек. </param>
        /// <returns> Билдер настроек уведомлений. </returns>
        public NotificationOptionsBuilder<TOptions> AddOptions(Action<IServiceProvider, TOptions> dynamicOptionsBuilder)
        {
            DynamicOptionsBuilder = dynamicOptionsBuilder;

            return this;
        }

        /// <summary>
        ///     Добавление расписания.
        /// </summary>
        /// <param name="cron"> Расписание в формате Cron. </param>
        /// <returns> Билдер настроек уведомлений. </returns>
        public NotificationOptionsBuilder<TOptions> UseCron(string cron)
        {
            Cron = cron;

            return this;
        }

        /// <summary>
        ///     Добавить билдер шаблонов.
        /// </summary>
        /// <param name="factory"> Фабрика билдера шаблонов. </param>
        /// <returns> Билдер настроек уведомлений. </returns>
        public NotificationOptionsBuilder<TOptions> UseTemplateBuilder(Func<IServiceProvider, ITemplateBuilder> factory)
        {
            TemplateBuilderFactory = factory;

            return this;
        }
    }
}