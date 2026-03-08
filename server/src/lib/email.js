import FormData from "form-data";
import Mailgun from "mailgun.js";

export async function sendEmailViaMailgun({ to, subject, text }) {
  const mailgunDomain = process.env.MAILGUN_DOMAIN;
  const mailgunApiKey = process.env.MAILGUN_API_KEY;

  const mailgun = new Mailgun(FormData);
  const mg = mailgun.client({
    username: "api",
    key: mailgunApiKey,
  });

  const messageDate = {
    from: `Service App <noreply@${mailgunDomain}>`,
    to,
    subject,
    text,
  };

  try {
    const data = await mg.messages.create(mailgunDomain, messageDate);

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
