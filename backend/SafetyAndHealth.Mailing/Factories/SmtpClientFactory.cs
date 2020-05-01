using MailKit;
using MailKit.Net.Smtp;

namespace SafetyAndHealth.Mailing.Factories
{
    /// <summary>
    ///     Фабрика для создания транспортного
    ///     протокола передачи сообщений.
    /// </summary>
    internal static class SmtpClientFactory
    {
        /// <summary>
        ///     Создание клиента.
        /// </summary>
        /// <param name="options"> Настройки отправки сообщений. </param>
        /// <returns> Клиент для передачи сообщений. </returns>
        public static IMailTransport Create(MailingOptions options)
        {
            var client = new SmtpClient();
            AddTimeout(client, options.TimeOut);

            return client;
        }

        /// <summary>
        ///     Установка таймаута.
        /// </summary>
        /// <param name="transport"> Транспортный протокол. </param>
        /// <param name="timeout"> Таймаут. </param>
        private static void AddTimeout(IMailTransport transport, int? timeout)
        {
            transport.Timeout = timeout ?? transport.Timeout;
        }
    }
}