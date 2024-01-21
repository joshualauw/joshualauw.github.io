import { client } from "@/lib/sanity";

export interface ISkill {
    name: string;
}

export async function getAllSkill() {
    const query = `*[_type == 'skill'] {
        name
      }`;

    const data = await client.fetch(query);

    return data;
}
