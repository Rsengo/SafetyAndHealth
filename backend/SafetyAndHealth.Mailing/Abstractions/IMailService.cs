namespace SafetyAndHealth.Mailing.Abstractions
{
    using System;
    using System.Threading.Tasks;

    /// <summary>
    ///     Почтовый сервис.
    /// </summary>
    public interface IMailService : IDisposable
    {
        /// <summary>
        ///     Отправка сообщения.
        /// </summary>
        /// <param name="message"> Сообщение. </param>
        /// <returns> Результат отправки. </returns>
        Task<SendMailResult> SendMailAsync(EmailMessage message);
    }
}