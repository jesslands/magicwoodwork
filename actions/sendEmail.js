'use server'

import axios from 'axios';


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

  try {
    const resp = await axios.post(`${PUBLIC_NEXT_PUBLIC_API_URL}/api/email`, rawFormData);
    return resp.data;
  } catch (error) {
    return { error: error.message };  // Return plain object
  }
};
