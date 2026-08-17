import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Bot,
  Code2,
  MonitorCheck,
  PenLine,
  Rocket,
  RotateCcw,
  SearchCheck,
  ShieldCheck,
  Target,
} from "lucide-react";

import { projects } from "@/content/projects";
import { toolbox } from "@/content/skills";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const approach = [
  {
    label: "Requirement\nAnalysis",
    icon: SearchCheck,
  },
  {
    label: "Test\nPlanning",
    icon: Target,
  },
  {
    label: "Test\nDesign",
    icon: PenLine,
  },
  {
    label: "Functional\nTesting",
    icon: MonitorCheck,
  },
  {
    label: "API\nValidation",
    icon: Code2,
  },
  {
    label: "Automation",
    icon: Bot,
  },
  {
    label: "Regression",
    icon: RotateCcw,
  },
  {
    label: "Release\nConfidence",
    icon: Rocket,
  },
];

export default function Home() {
  return (
    <>
      {/* =========================
          HERO
      ========================== */}
      <section className="hero">
        <div className="container hero-grid">
          {/* LEFT SIDE */}
          <Reveal>
            <div className="hero-status">
              <span className="status-dot" />
              SYSTEM STATUS: ONLINE
            </div>

            <p className="eyebrow">Software QA Engineer</p>

            <h1>
              I Build
              <br />
              <span className="accent">Confidence</span>
              <br />
              In Every Release
              <span className="accent">.</span>
            </h1>

            <p className="hero-copy">
              Software QA Engineer with 3+ years of experience in Manual
              Testing, Automation, API Testing and Quality Engineering across
              Web, Mobile & ERP platforms.
            </p>

            <div className="hero-actions">
              <Link className="button primary" href="/projects">
                Explore My Work
                <ArrowRight size={17} />
              </Link>

              <Link className="button secondary" href="/contact">
                Contact Me
                <ArrowRight size={17} />
              </Link>
            </div>

            {/* QUICK FACTS */}
            <div className="quick-facts">
              <div className="fact">
                <strong>3+</strong>
                <span>Years Experience</span>
              </div>

              <div className="fact">
                <strong>ISTQB</strong>
                <span>Certified Tester</span>
              </div>

              <div className="fact">
                <strong>Playwright</strong>
                <span>Automation</span>
              </div>

              <div className="fact">
                <strong>Web · Mobile · ERP</strong>
                <span>Testing Experience</span>
              </div>
            </div>
          </Reveal>

          {/* RIGHT SIDE - PROFILE CARD */}
          <Reveal delay={0.12}>
            <div
              className="profile-card"
              role="img"
              aria-label="Professional portrait of Subir Kundu"
            >
              <div className="profile-image" />

              <div className="profile-overlay">
                <h2>SUBIR KUNDU</h2>

                <p>SOFTWARE QA ENGINEER</p>

                <div className="profile-list">
                  <span>Manual Testing</span>
                  <span>Automation Testing</span>
                  <span>API Testing</span>
                  <span>Quality Engineering</span>
                  <span className="profile-status">
                    STATUS: READY TO TEST
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================
          QUALITY APPROACH
      ========================== */}
      <section className="section approach-section">
        <div className="container">
          <div className="approach card">
            <h2 className="approach-title">
              HOW I APPROACH QUALITY
            </h2>

            <div className="approach-steps">
              {approach.map(({ label, icon: Icon }, index) => (
                <div className="approach-item" key={label}>
                  <div className="approach-step">
                    <div className="step-icon">
                      <Icon size={21} />
                    </div>

                    <p>
                      {label.split("\n").map((line) => (
                        <span key={line}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </p>
                  </div>

                  {index < approach.length - 1 && (
                    <span className="approach-arrow">›</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          FEATURED PROJECTS
      ========================== */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Selected work"
            title="Featured projects"
            description="Safe, high-level case studies focused on QA thinking and delivery support."
          />

          <div className="projects-grid">
            {projects.map((project) => (
              <Reveal key={project.slug}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>

          <Link
            className="text-link"
            style={{ marginTop: 24 }}
            href="/projects"
          >
            View all projects
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* =========================
          QA TOOLBOX + CERTIFICATION
      ========================== */}
      <section className="section">
        <div className="container home-lower">
          {/* QA TOOLBOX */}
          <div className="tool-group qa-toolbox-card">
            <div className="qa-toolbox-heading">
              <div>
                <p className="eyebrow">Capabilities</p>

                <h2>QA toolbox</h2>
              </div>

              <div className="qa-toolbox-icon" aria-hidden="true">
                <BriefcaseBusiness size={58} strokeWidth={1.6} />
              </div>
            </div>

            {toolbox.slice(0, 5).map((group) => (
              <div className="tool-list" key={group.title}>
                <h3>{group.title}</h3>

                <p>
                  {group.items.slice(0, 4).join(" · ")}
                </p>
              </div>
            ))}

            <Link
              href="/skills"
              className="text-link"
              style={{ marginTop: 24 }}
            >
              View all skills
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* CERTIFICATION */}
          <div className="cert-card">
            <p className="eyebrow">Certifications</p>

            <div className="cert-card-main">
              <div className="cert-card-content">
                <h3>
                  Professional
                  <br />
                  <span>Certifications</span>
                </h3>

                <p>
                  Industry-recognized certifications that demonstrate my QA expertise, commitment to quality, and dedication to continuous professional development.
                </p>
              </div>

              <div className="cert-card-icon" aria-hidden="true">
                <ShieldCheck
                  size={58}
                  strokeWidth={1.6}
                />
              </div>
            </div>

            <Link
              className="cert-card-button"
              href="/certifications"
            >
              View All Certifications
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}