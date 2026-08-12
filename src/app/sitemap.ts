import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { return ["","/about","/journey","/projects","/skills","/certifications","/contact"].map(path=>({url:`https://subirkundu.dev${path}`,lastModified:new Date()})); }
