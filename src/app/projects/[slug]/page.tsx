import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/content/projects";
import { PageHero } from "@/components/page-hero";
export function generateStaticParams() { return projects.map(p=>({slug:p.slug})); }
export default async function CaseStudy({ params }: { params: Promise<{slug:string}> }) { const {slug}=await params; const project=projects.find(p=>p.slug===slug); if(!project) notFound(); return <><PageHero eyebrow={`${project.category} case study`} title={project.name} intro={project.description}/><section className="section"><div className="container content-grid"><article className="card"><h2>Project overview</h2><p>{project.description}</p><h2>QA role</h2><ul>{project.responsibilities.map(x=><li key={x}>{x}</li>)}</ul></article><article className="card"><h2>Testing approach</h2><div className="chips">{project.testing.map(x=><span key={x}>{x}</span>)}</div><h2>Tools</h2><div className="chips">{project.tools.map(x=><span key={x}>{x}</span>)}</div></article><article className="card"><h2>Challenge</h2><p>{project.challenge}</p></article><article className="card"><h2>Approach & outcome</h2><p>{project.approach}</p><p>{project.outcome}</p></article></div><Link href="/projects" className="text-link" style={{marginTop:28}}><ArrowLeft size={16}/>Back to projects</Link></section></>; }
