'use server'

const axios = require('axios');

export const actionEmail = async (formData) => {
  const rawFormData = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    address: formData.get('address'),
    message: formData.get('message'),
  };
  console.log(JSON.stringify(rawFormData));


const url = 'https://api.brevo.com/v3/smtp/email';
const body = {
    sender: {
        name: 'contact',
        email: 'no-replay@magicwoodwork.us'
    },
    to: [
        {
            email: 'magiccwoodwork@gmail.com',
            name: 'Juan Recipient'
        }
    ],
    subject: 'New contact',
    htmlContent: `<h1>Nuevo mensaje de contacto</h1>
                  <p><strong>Nombre:</strong> ${rawFormData.firstName} ${rawFormData.lastName}</p>
                  <p><strong>Email:</strong> ${rawFormData.email}</p>
                  <p><strong>Teléfono:</strong> ${rawFormData.phone}</p>
                  <p><strong>Dirección:</strong> ${rawFormData.address}</p>
                  <p><strong>Mensaje:</strong> ${rawFormData.message}</p>`
};

axios.post(url, body, {
    headers: {
        'accept': 'application/json',
        'api-key': process.env.NEXT_PUBLIC_EMAIL_API,
        'content-type': 'application/json'
    }
})
.then(response => {
    console.log('Response:', response.data);
})
.catch(error => {
    console.error('Error:', error.response ? error.response.data : error.message);
});
  
};
