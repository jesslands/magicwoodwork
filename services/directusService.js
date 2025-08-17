'use server';

export async function fetchPrincipalData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BaseURL}/items/Principal`);
    if (!response.ok) {
      throw new Error('Failed to fetch data from Directus');
    }
    const data = await response.json();
    console.log(data.data);
    return data.data;
    
  } catch (error) {
    console.error('Error fetching Principal data:', error);
    return null;
  }
}

export async function fetchServices() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BaseURL}/items/Services`);
    if (!response.ok) {
      throw new Error('Failed to fetch services from Directus');
    }
    const data = await response.json();
    console.log(data.data);
    return data.data;
  } catch (error) {
    console.error('Error fetching Services:', error);
    return [];
  }
}

export async function fetchProjects() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BaseURL}/items/Projects`);
    if (!response.ok) {
      throw new Error('Failed to fetch projects from Directus');
    }
    const data = await response.json();
    console.log(data.data);
    return data.data;
  } catch (error) {
    console.error('Error fetching Projects:', error);
    return [];
  }
}
