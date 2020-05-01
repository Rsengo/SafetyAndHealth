using System;
using System.Threading.Tasks;

using MailKit;
using MailKit.Security;

using MimeKit;

using SafetyAndHealth.Mailing.Converters;
using SafetyAndHealth.Mailing.Factories;

namespace SafetyAndHealth.Mailing
{
    using IMailService = Abstractions.IMailService;

    /// <inheritdoc />
    public class MailService : IMailService
    {
        private bool _disposed;

        /// <summary>
        ///     Конструктор.
        /// </summary>
        /// <param name="options"> Параметры. </param>
        public MailService(MailingOptions options)
        {
            Options = options ?? throw new ArgumentNullException(nameof(options),
                          "Не переданы параметры отправки сообщений");

            MailTransport = SmtpClientFactory.Create(options);
            _disposed = false;
        }

        /// <summary>
        ///     Протокол передачи сообщений.
        /// </summary>
        protected IMailTransport MailTransport { get; }

        /// <summary>
        ///     Параметры.
        /// </summary>
        protected MailingOptions Options { get; }

        /// <inheritdoc />
        public void Dispose()
        {
            MailTransport?.Dispose();
            _disposed = true;
        }

        /// <inheritdoc />
        public Task<SendMailResult> SendMailAsync(EmailMessage message)
        {
            var mimeMessage = EmailMessageConverter.Convert(message, Options);
            return SendMailAsync(mimeMessage);
        }

        /// <summary>
        ///     Получение значения уровня защиты сокета.
        /// </summary>
        /// <param name="useSsl"> Флаг использования SSL. </param>
        /// <returns> Значение уровня защиты сокета. </returns>
        private static SecureSocketOptions GetSecureSocketOptions(bool? useSsl)
        {
            if (useSsl == null)
                return SecureSocketOptions.Auto;

            if (useSsl == true)
                return SecureSocketOptions.SslOnConnect;

            return SecureSocketOptions.None;
        }

        /// <summary>
        ///     Отправка сообщения.
        /// </summary>
        /// <param name="message"> Сообщение в формате <see cref="MimeMessage" />. </param>
        /// <returns> Результат отправки. </returns>
        private async Task<SendMailResult> SendMailAsync(MimeMessage message)
        {
            if (_disposed)
                throw new ObjectDisposedException(nameof(MailTransport),
                    "Для экземпляра сервиса Email-сообщений был вызвван метод Dispose()");

            try
            {
                await MailTransport.ConnectAsync(
                    Options.Host,
                    Options.Port,
                    GetSecureSocketOptions(Options.EnableSsl));
                await MailTransport.AuthenticateAsync(
                    Options.Login,
                    Options.Password);
                await MailTransport.SendAsync(message);
                await MailTransport.DisconnectAsync(true);

                return SendMailResult.CreateSuccessResult();
            }
            catch (Exception ex)
            {
                return SendMailResult.CreateErrorResult(ex);
            }
        }
    }
}