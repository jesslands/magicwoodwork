import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  const { firstName, lastName, email, phone, address, message } = await request.json();
  // Configurar el transporter de nodemailer
  let transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false,
    auth: {
      user: "7b5cd8001@smtp-brevo.com",
      pass: "xOVB0LcM3dkUgwGJ",
    },
  });

  // Configurar el correo
  let mailOptions = {
    from: 'no-replay@magicwoodwork.us',
    to: "magiccwoodwork@gmail.com",
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
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}