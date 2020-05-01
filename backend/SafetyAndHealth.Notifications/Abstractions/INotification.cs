using System.Threading.Tasks;

namespace SafetyAndHealth.Notifications.Abstractions
{
    /// <summary>
    ///     Уведомление.
    /// </summary>
    /// <typeparam name="TOptions"> Тип настроек уведомления </typeparam>
    public interface INotification<TOptions>
        where TOptions : class, new()
    {
        /// <summary>
        ///     Создание уведомления.
        /// </summary>
        /// <param name="templateBuilder"> Построитель шаблона. </param>
        /// <param name="notificationOptions"> Настройки. </param>
        /// <returns></returns>
        Task NotifyAsync(ITemplateBuilder templateBuilder, NotificationOptions<TOptions> notificationOptions);
    }
}