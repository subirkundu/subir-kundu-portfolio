import { PageHero } from "@/components/page-hero";
import { SocialLinks } from "@/components/social-links";
import { profile } from "@/content/profile";
export default function Contact() { return <><PageHero eyebrow="Contact" title="Let&apos;s build better software together." intro="I welcome conversations with teams who care about thoughtful testing, dependable releases, and product quality."/><section className="section"><div className="container contact-page"><article className="card"><h2>Get in touch</h2><p>For professional opportunities or a conversation about quality engineering, you can reach me using the links below.</p><div className="contact-links"><a href={`mailto:${profile.email}`}>{profile.email}</a></div><SocialLinks/></article></div></section></>; }
