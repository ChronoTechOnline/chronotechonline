import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export interface Service {
    slug: string;
    name: string;
    price: string;
    icon?: string;
    order: number; // Added order property
    brief: string[];
    addOns?: string[];
    examples?: { name: string; url: string }[];
    content: string;
}

const servicesDirectory = path.join(process.cwd(), 'src/content/services');

export function getServices(): Service[] {
    const fileNames = fs.readdirSync(servicesDirectory);
    const allServicesData = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(servicesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        return {
            slug,
            ...(matterResult.data as Omit<Service, 'slug' | 'content'>),
            content: matterResult.content
        };
    });

    // Sort services by the new 'order' property
    return allServicesData.sort((a, b) => a.order - b.order);
}

export async function getServiceBySlug(slug: string): Promise<Service> {
    const fullPath = path.join(servicesDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    const processedContent = await marked(matterResult.content);

    return {
        slug,
        content: processedContent,
        ...(matterResult.data as Omit<Service, 'slug' | 'content'>),
    };
}