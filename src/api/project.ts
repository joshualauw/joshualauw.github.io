import { client } from "@/lib/sanity";

export interface IProject {
    id: string;
    name: string;
    imageUrl: any;
    overview: string;
    status: "WIP" | "published" | "-";
    stack: string[];
    gallery: any[];
    content: any;
    links: {
        url: string;
        name: string;
    }[];
}

export interface IProjectCard extends Omit<IProject, "links" | "gallery" | "content"> {}

export async function getProjectCards() {
    const query = `*[_type == 'project'] {
        "id": _id,
        name,
        imageUrl,
        overview,
        stack,
      } `;

    const data = await client.fetch(query);

    return data;
}

export async function getProjectDetail(id: string) {
    const query = `*[_type == 'project' && _id == "${id}"][0]`;

    const data = await client.fetch(query);

    return data;
}
