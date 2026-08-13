import { ArrowRight, Building2, CalendarDays, Eye, Trophy } from "lucide-react";
import { certifications } from "@/content/certifications";

export default function CertificationsPage() {
  return (
    <div className="certifications-page">
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="certifications-hero">
        <div className="container">
          <p className="eyebrow">Certifications</p>

          <h1>Professional Certifications</h1>

          <p className="certifications-hero-copy">
            Industry-recognized certifications that validate my expertise
            and commitment to quality assurance and continuous learning.
          </p>
        </div>
      </section>

      {/* =========================================================
          CERTIFICATION LIST
      ========================================================= */}

      <section className="certifications-section">
        <div className="container">
          <div className="certifications-header">
            <p className="certification-count">
              <span>{certifications.length}</span>{" "}
              {certifications.length === 1
                ? "Certification"
                : "Certifications"}
            </p>
          </div>

          <div className="certifications-list">
            {certifications.map((certification) => (
              <article
                className="certification-item"
                key={`${certification.name}-${certification.date}`}
              >
                {/* Certificate visual */}
                <div className="certification-mark">
                  <span>{certification.mark}</span>
                </div>

                {/* Certificate information */}
                <div className="certification-details">
                  <h2>{certification.name}</h2>

                  <p className="certification-organization">
                    <Building2 size={16} strokeWidth={1.8} />
                    <span>{certification.organization}</span>
                  </p>

                  <p className="certification-date">
                    <CalendarDays size={16} strokeWidth={1.8} />
                    <span>{certification.date}</span>
                  </p>
                </div>

                {/* View certificate */}
                <div className="certification-action">
                  <a
                    className="view-certificate"
                    href={certification.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Eye size={17} strokeWidth={1.8} />
                    <span>View Certificate</span>
                    <ArrowRight size={17} strokeWidth={1.8} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* =====================================================
              LEARNING MESSAGE
          ===================================================== */}

          <div className="certification-learning">
            <div className="certification-learning-icon">
              <Trophy size={27} strokeWidth={1.7} />
            </div>

            <div className="certification-learning-content">
              <h3>
                Continuously learning and growing to deliver better quality.
              </h3>

              <p>More certifications coming soon!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}