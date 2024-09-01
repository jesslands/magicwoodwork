import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, phone, address, message } = req.body;

    // Configurar el transporter de nodemailer
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "Magiccwoodwork@gmail.com",
        pass: "diseno2024",
      },
    });

    // Configurar el correo
    let mailOptions = {
      from: '"Magic Woodwork" <Magiccwoodwork@gmail.com>',
      to: "juanestebanspinosa404@gmail.com",
      subject: "Nuevo mensaje de contacto",
      text: `
        Nombre: ${firstName} ${lastName}
        Email: ${email}
        Teléfono: ${phone}
        Dirección: ${address}
        Mensaje: ${message}
      `,
      html: `
        <h1>Nuevo mensaje de contacto</h1>
        <p><strong>Nombre:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Dirección:</strong> ${address}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
      `,
    };

    try {
      // Enviar el correo
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}