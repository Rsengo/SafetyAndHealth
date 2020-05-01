using System.IO;
using Newtonsoft.Json;

namespace SafetyAndHealth.Mailing.Message
{
    /// <summary>
    ///     Файл, прикрепленный к сообщению.
    /// </summary>
    internal class MessageFile
    {
        /// <summary>
        ///     Конструктор.
        /// </summary>
        /// <param name="path"> Путь к файлу. </param>
        public MessageFile(string path)
        {
            FileName = path;
        }

        /// <summary>
        ///     Конструктор.
        /// </summary>
        /// <param name="fileName"> Имя файла. </param>
        /// <param name="stream"> Поток. </param>
        public MessageFile(string fileName, Stream stream)
        {
            FileName = fileName;
            Stream = stream;
        }

        /// <summary>
        ///     Конструктор.
        /// </summary>
        /// <param name="fileName"> Имя файла. </param>
        /// <param name="data"> Файл в виде массива байт. </param>
        public MessageFile(string fileName, byte[] data)
        {
            FileName = fileName;
            Data = data;
        }

        /// <summary>
        ///     Файл в виде массива байт.
        /// </summary>
        [JsonProperty]
        public byte[] Data { get; }

        /// <summary>
        ///     Имя файла.
        /// </summary>
        [JsonProperty]
        public string FileName { get; }

        /// <summary>
        ///     Поток.
        /// </summary>
        public Stream Stream { get; }
    }
}