import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

// The shape of the data we expect from our markdown files
export interface Service {
    slug: string;
    name: string;
    price: string;
    icon?: string;
    brief: string[];
    addOns?: string[];
    examples?: { name: string; url: string }[]; // Added examples property
    content: string; // The main body of the markdown
}

const servicesDirectory = path.join(process.cwd(), 'src/content/services');

export function getServices(): Service[] {
    const fileNames = fs.readdirSync(servicesDirectory);
    const allServicesData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const slug = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(servicesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
            slug,
            ...(matterResult.data as Omit<Service, 'slug' | 'content'>),
            content: matterResult.content
        };
    });

    // Sort services by name
    return allServicesData.sort((a, b) => a.name.localeCompare(b.name));
}

export async function getServiceBySlug(slug: string): Promise<Service> {
    const fullPath = path.join(servicesDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    // Use marked to convert markdown into HTML string
    const processedContent = await marked(matterResult.content);

    return {
        slug,
        content: processedContent,
        ...(matterResult.data as Omit<Service, 'slug' | 'content'>),
    };
}