import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/projects";
export function ProjectCard({ project }: { project: Project }) { return <article className="project-card"><span className="tag">{project.category}</span><h3>{project.name}</h3><p>{project.description}</p><div className="chips">{project.testing.slice(0, 4).map(item => <span key={item}>{item}</span>)}</div><Link href={`/projects/${project.slug}`} className="text-link">View case study <ArrowUpRight size={16}/></Link></article>; }
