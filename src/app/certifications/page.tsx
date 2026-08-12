import { PageHero } from "@/components/page-hero";
import { certifications } from "@/content/certifications";

export default function Certifications() {
  return (
    <>
      <PageHero
        eyebrow="Certifications"
        title="A foundation in quality."
        intro="Professional certifications that support a disciplined approach to software testing."
      />

      <section className="section">
        <div className="container">
          {certifications.map((c) => (
            <article className="cert-card" key={c.name}>
              <div className="certificate-seal">ISTQB</div>

              <h2>{c.name}</h2>
              <p>{c.organization}</p>
              <p>{c.detail}</p>

              <a
                className="button secondary"
                href={c.certificateUrl}
                target="_blank"
                rel="noreferrer"
              >
                Click to View Certificate
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}