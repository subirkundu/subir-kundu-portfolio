import { PageHero } from "@/components/page-hero";
import { skillGroups } from "@/content/skills";
export default function Skills() { return <><PageHero eyebrow="Skills" title="Tools with purpose." intro="A focused toolkit for planning, testing, validating, and supporting reliable software releases - without misleading proficiency percentages." /><section className="section"><div className="container skills-grid">{skillGroups.map(group => <section className="card skill-group" key={group.title}><h2>{group.title}</h2><div className="skill-items">{group.items.map(skill => <span key={skill}>{skill}</span>)}</div></section>)}</div></section></>; }

