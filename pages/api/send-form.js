import { Resend } from "resend";

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log("hola???");
    const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
    resend.emails.send({
      from: "ratonesroomweb@gmail.com",
      to: req.body.email,
      subject: "Gracias por contactarnos",
      html: `
        <p>Hola ${req.body.name},</p>
        <p>Gracias por contactarnos. En breve nos pondremos en contacto contigo.</p>
        <p>Saludos,</p>
        <p>Ratones Room</p>
        `,
    });
    res.status(200).json({ message: "Email sent" });
  }
  res.status(405).end();
}
