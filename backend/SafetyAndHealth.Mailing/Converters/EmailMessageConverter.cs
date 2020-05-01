using System;
using System.Linq;

using MimeKit;

using SafetyAndHealth.Mailing.Message;

namespace SafetyAndHealth.Mailing.Converters
{
    internal static class EmailMessageConverter
    {
        /// <summary>
        ///     Конфвертация сообщения в пригодный для отправки вид.
        /// </summary>
        /// <param name="message"> Сообщение. </param>
        /// <param name="mailingOptions"> Параметры. </param>
        /// <returns> Сообщение для отправки. </returns>
        public static MimeMessage Convert(EmailMessage message, MailingOptions mailingOptions)
        {
            var body = ConvertBody(message.Body);
            var recepients = message.Recepients
                .Select(ConvertRecepient)
                .ToList();
            var sender = CreateSender(mailingOptions);

            var result = new MimeMessage
            {
                Subject = message.Subject,
                Body = body
            };

            result.To.AddRange(recepients);
            result.From.Add(sender);

            return result;
        }

        private static void AddAttachment(BodyBuilder builder, MessageFile file)
        {
            if (file.FileName == null)
                throw new ArgumentException("Не указано имя прикрепляемого файла");

            if (file.Stream != null)
            {
                builder.Attachments.Add(file.FileName, file.Stream);
                return;
            }

            if (file.Data != null)
            {
                builder.Attachments.Add(file.FileName, file.Data);
                return;
            }

            builder.Attachments.Add(file.FileName);
        }

        private static MimeEntity ConvertBody(MessageBody body)
        {
            var builder = new BodyBuilder();

            switch (body.TextType)
            {
                case MessageBodyTextType.Text:
                    builder.TextBody = body.Text;
                    break;
                case MessageBodyTextType.Html:
                    builder.HtmlBody = body.Text;
                    break;
            }

            foreach (var file in body.Files)
            {
                AddAttachment(builder, file);
            }

            return builder.ToMessageBody();
        }

        private static MailboxAddress ConvertRecepient(string address)
        {
            return new MailboxAddress(address, address);
        }

        private static MailboxAddress CreateSender(MailingOptions mailingOptions)
        {
            var displayName = mailingOptions.DisplayName ?? mailingOptions.Email;

            return new MailboxAddress(displayName, mailingOptions.Email);
        }
    }
}