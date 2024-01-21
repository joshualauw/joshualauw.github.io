import { client } from "@/lib/sanity";

export interface IExperience {
    title: string;
    location: string;
    description: string[];
    duration: string;
}

export async function getAllExperience() {
    const query = `*[_type == 'experience'] {
        title,
        location,
        description,
        duration
      }`;

    const data = await client.fetch(query);

    return data;
}
