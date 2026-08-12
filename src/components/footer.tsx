import { ArrowUpRight, Send } from "lucide-react";
import { SocialLinks } from "./social-links";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Main contact banner */}
        <div className="footer-cta">
          <div className="footer-cta-content">
            <div className="footer-cta-icon">
              <Send size={24} />
            </div>

            <div>
              <h2>LET&apos;S BUILD BETTER SOFTWARE TOGETHER.</h2>

              <p>
                Open to exciting <span>opportunities</span> and collaborations.
              </p>
            </div>
          </div>

          <SocialLinks compact />
        </div>

        {/* Footer bottom */}
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Subir Kundu. All rights reserved.
          </span>

          <span className="footer-motto">
            <span className="footer-motto-arrow">&gt;</span>
            QUALITY IS NOT AN ACT, IT IS A HABIT.
          </span>

          <a className="back-to-top" href="#top">
            BACK TO TOP
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}