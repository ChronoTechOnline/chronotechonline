import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export interface Policy {
    slug: string;
    title: string;
    content: string;
}

const policiesDirectory = path.join(process.cwd(), 'src/content/policies');

export function getPolicies(): Omit<Policy, 'content'>[] {
    const fileNames = fs.readdirSync(policiesDirectory);
    const allPoliciesData = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(policiesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        return {
            slug,
            ...(matterResult.data as { title: string }),
        };
    });
    return allPoliciesData.sort((a, b) => a.title.localeCompare(b.title));
}

export async function getPolicyBySlug(slug: string): Promise<Policy> {
    const fullPath = path.join(policiesDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    const processedContent = await marked(matterResult.content);

    return {
        slug,
        content: processedContent,
        ...(matterResult.data as { title: string }),
    };
}