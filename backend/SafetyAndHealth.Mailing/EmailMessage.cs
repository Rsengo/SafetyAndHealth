using System.Collections.Generic;
using System.IO;

using Newtonsoft.Json;

using SafetyAndHealth.Mailing.Message;

namespace SafetyAndHealth.Mailing
{
    /// <summary>
    ///     Email-сообщение.
    /// </summary>
    public class EmailMessage
    {
        /// <summary>
        ///     Конструктор.
        /// </summary>
        public EmailMessage()
        {
            Recepients = new List<string>();
            Body = new MessageBody();
        }

        /// <summary>
        ///     Тело сообщения.
        /// </summary>
        [JsonProperty]
        internal MessageBody Body { get; }

        /// <summary>
        ///     Получатели.
        /// </summary>
        [JsonProperty]
        internal ICollection<string> Recepients { get; }

        /// <summary>
        ///     Тема сообщения.
        /// </summary>
        [JsonProperty]
        internal string Subject { get; private set; }

        /// <summary>
        ///     Прикрепление файла.
        /// </summary>
        /// <param name="path"> Путь к файлу. </param>
        /// <returns> Сообщение. </returns>
        public EmailMessage AddFile(string path)
        {
            var file = new MessageFile(path);
            Body.Files.Add(file);

            return this;
        }

        /// <summary>
        ///     Прикрепление файла.
        /// </summary>
        /// <param name="fileName"> Имя файла. </param>
        /// <param name="stream"> Поток для чтения файла. </param>
        /// <returns> Сообщение. </returns>
        public EmailMessage AddFile(string fileName, Stream stream)
        {
            var file = new MessageFile(fileName, stream);
            Body.Files.Add(file);

            return this;
        }

        /// <summary>
        ///     Прикрепление файла.
        /// </summary>
        /// <param name="fileName"> Имя файла. </param>
        /// <param name="data"> Массив байтов файла. </param>
        /// <returns> Сообщение. </returns>
        public EmailMessage AddFile(string fileName, byte[] data)
        {
            var file = new MessageFile(fileName, data);
            Body.Files.Add(file);

            return this;
        }

        /// <summary>
        ///     Добавление получателя.
        /// </summary>
        /// <param name="address"> Email получателя. </param>
        /// <returns> Сообщение. </returns>
        public EmailMessage AddRecepient(string address)
        {
            Recepients.Add(address);

            return this;
        }

        /// <summary>
        ///     Установка текста тела сообщения.
        /// </summary>
        /// <param name="text"> Текст. </param>
        /// <param name="textType"> Тип текста. </param>
        /// <returns> Сообщение. </returns>
        public EmailMessage SetBodyText(string text, MessageBodyTextType textType)
        {
            Body.Text = text;
            Body.TextType = textType;

            return this;
        }

        /// <summary>
        ///     Установка темы сообщения.
        /// </summary>
        /// <param name="subject"> Тема. </param>
        /// <returns> Сообщение. </returns>
        public EmailMessage SetSubject(string subject)
        {
            Subject = subject;

            return this;
        }
    }
}