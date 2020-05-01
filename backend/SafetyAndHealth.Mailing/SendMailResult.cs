using System;

namespace SafetyAndHealth.Mailing
{
    /// <summary>
    ///     Результат отправки сообщений.
    /// </summary>
    public sealed class SendMailResult
    {
        /// <summary>
        ///     Возникшее исключение.
        /// </summary>
        public Exception Exception { get; private set; }

        /// <summary>
        ///     Успешность отправления.
        /// </summary>
        public bool Success { get; private set; }

        /// <summary>
        ///     Создание результата отправки с ошибкой.
        /// </summary>
        /// <param name="exception"> Ошибка SMTP. </param>
        /// <returns> Результат неудачной отправки. </returns>
        public static SendMailResult CreateErrorResult(Exception exception)
        {
            return new SendMailResult
            {
                Success = false,
                Exception = exception
            };
        }

        /// <summary>
        ///     Создание результата успешной отправки.
        /// </summary>
        /// <returns> Результат успешной отправки. </returns>
        public static SendMailResult CreateSuccessResult()
        {
            return new SendMailResult
            {
                Success = true
            };
        }
    }
}