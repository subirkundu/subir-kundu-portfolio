# Subir Kundu — QA Engineer Portfolio
## Master Development Specification

**Document status:** Approved for V1 development  
**Purpose:** Single source of truth for implementing the personal QA Engineer portfolio website.

---

## 1. Project Objective

Build a professional personal portfolio website for **Subir Kundu**, a Software QA Engineer.

The website should present Subir's professional identity, QA experience, career journey, selected projects, technical skills, certification, and contact information.

The website must feel like a **premium Quality Engineering portfolio**, not a generic developer portfolio or an online CV.

The design should communicate:

- Quality Engineering
- Software Testing
- Automation
- Reliability
- Engineering discipline
- Professionalism
- Personal brand

The website should be useful for recruiters, hiring managers, QA professionals, developers, and other technical visitors.

---

## 2. V1 Scope

### Main navigation

The primary navigation must contain:

1. Home
2. About
3. Journey
4. Projects
5. Contact

A **Download CV** action should also be available in the header/hero where appropriate.

### Additional pages

The following pages are part of V1:

- Skills
- Certifications

These pages can be reached from the relevant homepage sections using:

- `View All Skills`
- `View Certificate` / `View Certifications`

### Explicitly NOT included in V1

Do NOT implement:

- Admin dashboard
- CMS
- Database
- User authentication
- Articles / Blog
- QA Lab
- Quality Impact metrics dashboard
- Fake testing statistics
- Fake automation coverage numbers
- Fake build numbers
- Fake CI/CD status
- Unverified performance claims
- Assumptions about BRAC IT internal processes

These can be considered future enhancements, but they must not be implemented in V1.

---

## 3. Technology Stack

Use:

- **Next.js** — current stable version compatible with the chosen setup
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** where useful
- **Framer Motion** for subtle animation
- **Lucide Icons**
- **Local TypeScript content/data files**
- **MDX only if genuinely useful for future content; do not build a blog system**
- **Playwright** for E2E testing
- **GitHub** for version control
- **Vercel** for deployment

### Backend

No backend is required for V1.

### Database

No database is required for V1.

### Content management

Content will be managed directly in the code/content files.

Do not create an admin panel.

---

## 4. Design Direction

### Overall visual identity

The approved design direction is:

> **Premium Quality Engineering Portfolio**

Visual characteristics:

- Dark / near-black background
- Subtle charcoal panels
- Neon/electric green accent
- Clean, modern typography
- Technical but professional
- Minimal and spacious
- Rounded cards
- Thin borders
- Very subtle glow effects
- Subtle grid/dot patterns where appropriate
- High contrast
- Strong visual hierarchy

The design should feel inspired by modern SaaS/engineering products without looking like a dashboard application.

### Avoid

Do NOT use:

- Excessive gradients
- Excessive glassmorphism
- Excessive 3D elements
- Random decorative graphics
- Overly colorful UI
- Giant profile photo
- Generic developer-template appearance
- Skill percentage bars such as `Playwright 95%`
- Fake statistics
- Excessive animations
- Gaming-style visuals

---

## 5. Color System

Use a restrained dark palette.

Suggested foundation:

- Primary background: near-black / deep charcoal
- Secondary background: slightly lighter charcoal
- Card background: dark charcoal
- Borders: subtle muted gray
- Primary text: off-white
- Secondary text: muted gray
- Accent: electric/neon green
- Success indicators: green, used sparingly
- Error/warning colors only when semantically required

Do not hard-code colors throughout individual components.

Create a centralized design token/theme system so colors can be adjusted later.

---

## 6. Typography

Preferred direction:

- Modern sans-serif such as **Inter** or **Geist**
- Optional monospace font such as **JetBrains Mono** for technical labels/code-like metadata

Typography should have:

- Strong headline hierarchy
- Comfortable body text
- Clear section headings
- Compact technical labels
- Excellent readability on mobile

Avoid overly futuristic fonts.

---

## 7. Layout & Spacing

The site should feel spacious and premium.

Use:

- Consistent max-width container
- Responsive horizontal padding
- Clear section separation
- Consistent card radius
- Consistent vertical rhythm
- Generous hero spacing
- Comfortable line height

The design must be responsive from the beginning.

Target:

- Mobile
- Tablet
- Laptop
- Desktop
- Large desktop

Do not treat mobile as an afterthought.

---

# 8. Global Navigation

The header should include:

**Subir Kundu**

Navigation:

- Home
- About
- Journey
- Projects
- Contact

And a clear:

**Download CV**

action.

### Header behavior

Desktop:

- Clean horizontal navigation
- Sticky or intelligently positioned header
- Active navigation state

Mobile:

- Compact navigation
- Hamburger/menu interaction
- Accessible mobile navigation

The navigation must work correctly across all pages.

---

# 9. HOME PAGE

The homepage is the primary visual reference for the entire website.

### Hero section

The hero should include:

- Small professional label:
  **SOFTWARE QA ENGINEER**
- Main statement:
  **I BUILD CONFIDENCE IN EVERY RELEASE.**
- Supporting introduction
- CTA:
  **Explore My Work**
- CTA:
  **Download CV**
- Professional profile card containing Subir's actual profile image
- Professional identity and relevant QA highlights

The exact copy can be refined during implementation, but the message should communicate:

- 3+ years of QA experience
- Web testing
- Mobile testing
- ERP testing
- Automation
- API testing
- ISTQB certification

### Profile photo

Use the supplied professional profile photograph.

The photograph should:

- Be clearly visible
- Look professional
- Fit naturally into the dark design
- Not dominate the entire hero
- Use a polished card treatment rather than a generic circular avatar unless the approved visual requires otherwise

Do not unnecessarily alter the person's identity or facial appearance.

### Important removal

The hero MUST NOT contain the previously proposed fake status panel containing:

- Build number
- Status
- Automated test count
- Coverage percentage
- Last run time

Those elements were intentionally removed.

Do not recreate them.

---

## 10. HOME — Quality Approach Section

Include a section explaining how Subir approaches software quality.

Suggested flow:

Requirement Understanding
→ Test Planning
→ Test Design
→ Functional Testing
→ API Validation
→ Automation
→ Regression
→ UAT
→ Release Validation

The exact visual treatment can be a timeline/flow/cards.

The purpose is to demonstrate the QA lifecycle and thinking process.

Do not attach fake metrics to this section.

---

## 11. HOME — Featured Projects

Show selected projects as a preview.

Potential projects include:

- QSmart ERP
- Smart Lotto
- OMS
- Other approved portfolio projects

Each project card may contain:

- Project name
- Category
- Short description
- Testing areas
- Tools/technologies
- `View Case Study` action

The homepage should show a curated selection rather than every project.

Include:

**View All Projects**

which leads to the Projects page.

### Confidentiality

Do not expose:

- Company secrets
- Credentials
- Customer data
- Internal URLs
- Private screenshots
- Proprietary architecture
- Sensitive business rules
- Confidential Jira information

Project descriptions must be written at a safe professional level.

---

## 12. HOME — QA Toolbox

Keep the QA Toolbox section on the homepage.

This is a concise preview of Subir's technical skills.

Possible categories:

### Testing

- Manual Testing
- Functional Testing
- Regression Testing
- Smoke Testing
- UAT
- E2E Testing
- Exploratory Testing

### Automation

- Playwright
- JavaScript
- Page Object Model

### API

- Postman
- REST API
- Swagger

### Test Management

- Jira
- TestRail
- Agile/Scrum

### Performance

- JMeter

### Database

- SQL

Only include skills that are genuinely supported by Subir's actual experience.

Do not show arbitrary skill percentages.

Include:

**View All Skills**

leading to the Skills page.

---

## 13. HOME — Certifications

Keep a certification preview section.

Primary certification:

**ISTQB Certified Tester — Foundation Level**

Include:

- Certification name
- Issuing organization
- Relevant date/details if available
- View Certificate / View Certifications action

Do not invent certification dates or credential numbers.

Include:

**View Certificate** or **View Certifications**

leading to the Certifications page.

---

## 14. HOME — Contact CTA

End the homepage with a strong professional CTA.

Suggested direction:

> **Let's build better software together.**

Include links/actions for:

- Email
- LinkedIn
- GitHub
- Contact page

Keep the section clean and professional.

---

# 15. ABOUT PAGE

The About page should expand upon the homepage introduction.

Suggested sections:

### Introduction

A professional biography covering:

- Current QA identity
- Experience
- Testing background
- Web/Mobile/ERP experience
- Manual testing
- Automation
- API testing
- QA mindset

### QA Philosophy

Explain Subir's approach to quality.

The philosophy should emphasize:

- Understanding requirements
- Risk-based thinking
- Thorough testing
- Preventing defects where possible
- Automation where it provides value
- Release confidence
- Collaboration with product/development teams

### What I Bring

Possible areas:

- Manual Testing
- Automation Testing
- API Testing
- ERP Testing
- Regression & Release Validation
- QA Team Collaboration/Leadership
- Agile QA Practices

Do not repeat the entire CV word-for-word.

The About page should feel like a professional personal profile.

---

# 16. JOURNEY PAGE

The Journey page should present Subir's career progression.

Known career history can be represented accurately based on verified information.

Current/previous experience includes progression through:

- Associate SQA Engineer
- Associate QA Engineer
- QA Engineer

The journey should explain professional growth and responsibilities.

Potential timeline content:

- Role
- Company
- Period
- Main responsibilities
- Testing areas
- Tools
- Professional growth

### BRAC IT

Subir has a confirmed SQA Engineer position at BRAC IT with a joining date of:

**September 1, 2026**

Because this is a future joining date at the time of this specification, do NOT present BRAC IT work, responsibilities, Agile practices, sprint cycles, tools, or achievements as completed experience.

It can be represented as:

**SQA Engineer — BRAC IT**  
**Joining: September 1, 2026**

Do not invent details about BRAC IT.

---

# 17. PROJECTS PAGE

Create a dedicated Projects page containing all approved portfolio projects.

Possible categories:

- ERP
- Web
- Mobile
- API
- Automation

Provide filtering only if it improves UX and remains simple.

Each project card should include:

- Project name
- Category
- Description
- QA responsibilities
- Testing types
- Tools
- Case Study link

Avoid fake outcomes or statistics.

---

# 18. PROJECT CASE STUDY PAGE

Each major project may have a dedicated case-study route.

Example:

`/projects/qsmart-erp`

Suggested structure:

### Project Overview

What the system is, at a safe high-level description.

### QA Role

What Subir was responsible for.

### Testing Approach

- Functional testing
- Regression
- Smoke
- API
- E2E
- UAT
- Release validation
- Automation where applicable

Only include applicable areas.

### Tools

Example:

- Jira
- TestRail
- Postman
- Playwright
- JavaScript
- JMeter
- SQL

Only list tools actually used on that project.

### Challenges

Describe testing challenges without revealing confidential information.

### Approach

Explain how the challenge was handled.

### Outcome

Only state outcomes that can be truthfully supported.

Do not invent percentages, defect reduction, coverage, performance improvements, or business impact.

---

# 19. SKILLS PAGE

The Skills page is the expanded version of the homepage QA Toolbox.

Organize skills into clear categories.

Suggested categories:

### QA & Testing

- Manual Testing
- Functional Testing
- Regression Testing
- Smoke Testing
- UAT
- E2E Testing
- Exploratory Testing
- Test Planning
- Test Case Design
- Defect Reporting

### Automation

- Playwright
- JavaScript
- Page Object Model
- Automation Framework Design

### API Testing

- Postman
- REST API
- Swagger

### Performance Testing

- JMeter

### Test Management

- Jira
- TestRail

### Development / Technical

- Git
- SQL
- HTML/CSS/JavaScript as appropriate

### Methodologies

- SDLC
- STLC
- Agile/Scrum

Only include skills that can be supported by Subir's real background.

Do not use misleading percentage proficiency indicators.

---

# 20. CERTIFICATIONS PAGE

Create a dedicated Certifications page.

Current confirmed certification:

### ISTQB Certified Tester — Foundation Level

Possible display:

- Certification
- Organization
- Date, if verified
- Credential/verification link, if available
- Certificate preview/image, if appropriate

Provide a clear:

**View Certificate**

action if the actual certificate asset is available.

Do not invent:

- Credential ID
- Certification date
- Verification URL

Future certifications can be added later through content files.

---

# 21. CONTACT PAGE

Keep the Contact page simple and professional.

Include:

- Short invitation to connect
- Email
- LinkedIn
- GitHub
- Optional contact form only if it can be implemented securely without unnecessary backend complexity

For V1, direct contact links are preferred unless a form provides clear value.

The page should have a strong closing message.

---

# 22. Footer

The footer should include:

- Subir Kundu
- Software QA Engineer
- Home
- About
- Journey
- Projects
- Contact
- GitHub
- LinkedIn
- Email
- Copyright

A subtle QA/quality-focused statement may be included.

Avoid excessive decorative content.

---

# 23. Animation Guidelines

Use Framer Motion only where it improves UX.

Preferred:

- Hero fade/slide-in
- Section reveal on scroll
- Subtle card hover
- Button hover
- Timeline reveal
- Smooth navigation transitions where appropriate

Avoid:

- Constant movement
- Excessive parallax
- Large bouncing objects
- Distracting animations
- Long loading animations

Animation should be fast, subtle, and professional.

Respect `prefers-reduced-motion`.

---

# 24. Responsive Design

The website must be fully responsive.

### Mobile

Priorities:

- Readability
- Navigation usability
- Proper photo scaling
- Stacked cards
- Horizontal overflow prevention
- Touch-friendly buttons
- Proper spacing

### Tablet

Use appropriate two-column layouts where useful.

### Desktop

Use the full visual composition from the approved design.

Do not simply shrink desktop layouts for mobile.

---

# 25. Accessibility

Build with accessibility in mind.

Requirements:

- Semantic HTML
- Correct heading hierarchy
- Alt text for meaningful images
- Keyboard navigation
- Visible focus states
- Sufficient contrast
- Accessible buttons
- Accessible mobile navigation
- Reduced motion support
- Form labels if a form exists
- No information conveyed only by color

Use accessible shadcn/ui components where appropriate.

---

# 26. SEO

Implement basic professional SEO.

Include:

- Page titles
- Meta descriptions
- Open Graph metadata
- Appropriate canonical URLs when applicable
- Semantic HTML
- Sitemap
- Robots configuration
- Favicon/site icon
- Structured metadata where appropriate

The website should be prepared for search engines and social sharing.

Do not make SEO claims that cannot be verified.

---

# 27. Performance

Prioritize:

- Next.js optimized images
- Appropriate image sizing
- Lazy loading where useful
- Minimal client-side JavaScript
- Avoid unnecessary dependencies
- Efficient animations
- Good Core Web Vitals
- Optimized fonts

Use server components by default where appropriate and client components only when interaction requires them.

---

# 28. Content Architecture

Keep content separate from UI components.

Suggested structure:

```text
src/
├── app/
├── components/
├── content/
│   ├── profile.ts
│   ├── experience.ts
│   ├── projects.ts
│   ├── skills.ts
│   └── certifications.ts
├── lib/
└── ...
```

The exact structure can be adjusted if a better Next.js architecture is appropriate.

Content should be easy to update without digging into visual components.

---

# 29. Assets

Use the supplied assets:

- Professional profile photograph
- Approved homepage design reference

Recommended public structure:

```text
public/
├── images/
│   └── profile/
├── projects/
├── certificates/
└── resume/
```

Do not modify or fabricate professional credentials/assets.

Use optimized image formats where appropriate.

---

# 30. Component Architecture

Build reusable components.

Potential shared components:

- Navbar
- Footer
- SectionHeading
- Button
- Badge
- ProjectCard
- SkillGroup
- CertificationCard
- Timeline
- CTASection
- SocialLinks
- ProfileCard

Do not duplicate large blocks of markup unnecessarily.

---

# 31. Code Quality

Requirements:

- TypeScript strictness where practical
- Clear naming
- Small reusable components
- No unnecessary abstractions
- No duplicated content
- No hardcoded repeated design tokens
- No console errors in production
- No unused dependencies
- No dead components
- No unnecessary client components

Keep the implementation maintainable.

---

# 32. Playwright Testing

This website must be tested with Playwright because the site itself is part of Subir's QA portfolio.

Create an appropriate test suite.

Minimum coverage should include:

### Navigation

- Home navigation
- About navigation
- Journey navigation
- Projects navigation
- Contact navigation
- Skills navigation
- Certifications navigation
- Back/forward navigation where applicable

### Home

- Hero renders
- Profile image renders
- CTAs work
- Featured projects render
- QA Toolbox renders
- Certification section renders

### About

- Page loads
- Main sections render
- Navigation works

### Journey

- Timeline renders
- Career information is visible

### Projects

- Project cards render
- Project filtering, if implemented, works
- Case-study links work

### Skills

- Skill categories render
- All Skills navigation works

### Certifications

- Certification information renders
- Certificate link works if available

### Contact

- Contact links work
- Email link is correct
- Social links are correct

### Responsive

At minimum test:

- Mobile viewport
- Desktop viewport

### Accessibility

Use appropriate Playwright accessibility checks or compatible tooling where useful.

### Regression

The final suite should run successfully before deployment.

---

# 33. GitHub

Create a clean repository.

Suggested repository name:

`subirkundu-portfolio`

Possible structure:

```text
subirkundu-portfolio/
├── src/
├── public/
├── tests/
├── playwright.config.ts
├── package.json
├── README.md
└── SUBIR_KUNDU_PORTFOLIO_SPEC.md
```

The README should explain:

- Project overview
- Tech stack
- How to run locally
- How to run tests
- How to build
- Deployment information

Do not include secrets.

---

# 34. Deployment

Target:

**Vercel**

Requirements:

- Production build succeeds
- No runtime errors
- Responsive layout verified
- Links verified
- Images load correctly
- SEO metadata works
- Playwright regression suite passes

---

# 35. Development Approach

Implement incrementally.

Recommended order:

### Phase 1
Project initialization and configuration

### Phase 2
Design tokens, typography, global styles, reusable UI components

### Phase 3
Navbar + Footer

### Phase 4
Home page

### Phase 5
About page

### Phase 6
Journey page

### Phase 7
Projects + case studies

### Phase 8
Skills page

### Phase 9
Certifications page

### Phase 10
Contact page

### Phase 11
Responsive refinement

### Phase 12
SEO, accessibility, performance

### Phase 13
Playwright test suite

### Phase 14
Final build, QA, and deployment preparation

Do not attempt to implement every feature in one unverified pass.

---

# 36. Critical Rules for Codex

1. Read this entire specification before coding.
2. Treat this document as the source of truth.
3. Do not invent sections.
4. Do not add Articles.
5. Do not add QA Lab.
6. Do not add an Admin Dashboard.
7. Do not add a database unless explicitly requested later.
8. Do not add fake metrics.
9. Do not add fake automation coverage.
10. Do not add fake build/test status.
11. Do not assume BRAC IT processes or responsibilities.
12. Do not expose confidential employer information.
13. Do not invent certification information.
14. Do not invent project outcomes.
15. Do not replace the approved design with a generic portfolio template.
16. Reuse components consistently.
17. Keep content separate from UI.
18. Keep the site responsive.
19. Test the implementation with Playwright.
20. Do not deploy until the production build and tests are verified.

---

# 37. Definition of Done

The portfolio is considered V1 complete when:

- [ ] All approved pages exist
- [ ] Navigation works
- [ ] Approved visual identity is implemented
- [ ] Profile photo is correctly integrated
- [ ] Home page matches the approved design direction
- [ ] About page is complete
- [ ] Journey page is complete
- [ ] Projects page is complete
- [ ] Project case studies are functional
- [ ] Skills page is complete
- [ ] Certifications page is complete
- [ ] Contact page is complete
- [ ] CV download works
- [ ] GitHub/LinkedIn/email links work
- [ ] Mobile layout is polished
- [ ] Tablet layout is polished
- [ ] Desktop layout is polished
- [ ] Accessibility basics are implemented
- [ ] SEO metadata is implemented
- [ ] Images are optimized
- [ ] No unnecessary console errors
- [ ] Playwright tests are implemented
- [ ] Playwright tests pass
- [ ] Production build succeeds
- [ ] README is complete
- [ ] No confidential information is exposed
- [ ] No fake metrics or claims are present

---

## Final Product Positioning

The finished website should communicate:

> **Subir Kundu is a professional Software QA Engineer who understands quality beyond simply finding bugs — with experience across manual testing, automation, API testing, ERP systems, release validation, and modern QA practices.**

The website should be:

**Professional · Technical · Minimal · Modern · QA-focused · Credible · Recruiter-friendly**

The portfolio should demonstrate not only Subir's experience, but also his attention to detail and quality mindset.
