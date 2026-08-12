"use client";
import { useState } from "react";
import { PageHero } from "@/components/page-hero";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/content/projects";
const categories = ["All",...new Set(projects.map(p=>p.category))];
export default function Projects() { const [filter,setFilter]=useState("All"); const shown=filter==="All"?projects:projects.filter(p=>p.category===filter); return <><PageHero eyebrow="Projects" title="Quality work, thoughtfully documented." intro="Selected project case studies presented at a safe professional level, without confidential details or invented outcomes."/><section className="section"><div className="container"><div className="filters" aria-label="Project filter">{categories.map(c=><button className={`filter ${filter===c?"active":""}`} key={c} onClick={()=>setFilter(c)}>{c}</button>)}</div><div className="projects-grid">{shown.map(p=><ProjectCard key={p.slug} project={p}/>)}</div></div></section></>; }
