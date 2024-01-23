import { client } from "@/lib/sanity";

export interface IResume {
    version: string;
    url: string;
}

export async function getResume() {
    const query = `*[_type == 'resume'][0]  {
        version,
        "url": file.asset->url
      }`;

    const data = await client.fetch(query);

    return data;
}
