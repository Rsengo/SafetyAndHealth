using System.Collections.Generic;

using Newtonsoft.Json;

namespace SafetyAndHealth.Mailing.Message
{
    /// <summary>
    ///     Тело сообщения.
    /// </summary>
    internal class MessageBody
    {
        /// <summary>
        ///     Конструктор.
        /// </summary>
        public MessageBody()
        {
            Files = new List<MessageFile>();
        }

        /// <summary>
        ///     Прикрепленные файлы.
        /// </summary>
        [JsonProperty]
        public ICollection<MessageFile> Files { get; }

        /// <summary>
        ///     Текст сообщения.
        /// </summary>
        [JsonProperty]
        public string Text { get; set; }

        /// <summary>
        ///     Тип текста сообщения.
        /// </summary>
        [JsonProperty]
        public MessageBodyTextType TextType { get; set; }
    }
}