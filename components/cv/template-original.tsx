import { CVDataZh } from "@/data/cv.types";

type ResumeOriginalTemplateProps = {
  aboutTitle: string;
  bodyFontClass: string;
  cv: CVDataZh;
  projectsTitle: string;
  skillsTitle: string;
};

export function ResumeOriginalTemplate({
  aboutTitle,
  bodyFontClass,
  cv,
  projectsTitle,
  skillsTitle,
}: ResumeOriginalTemplateProps) {
  const isHans = cv.languageTag === "zh-hans";
  const currentYear = new Date().getFullYear();
  const yearsOfExperience =
    typeof cv.careerStartYear === "number" &&
    cv.careerStartYear >= 1900 &&
    cv.careerStartYear <= currentYear
      ? currentYear - cv.careerStartYear
      : null;
  const experienceLabel = isHans ? "年经验" : "年經驗";
  const toReadableUrl = (url: string) =>
    url.replace(/^https?:\/\/(www\.)?/i, "").replace(/\/$/, "");
  const toPrintableLinkLabel = (url: string) => {
    const readable = toReadableUrl(url);
    if (readable.length <= 64) {
      return readable;
    }

    return `${readable.slice(0, 61)}...`;
  };

  const contactLine = [cv.contact.location, cv.contact.phone, cv.contact.email]
    .filter((item): item is string => Boolean(item))
    .join(" · ");
  const contactLinks = [
    cv.contact.website
      ? {
          href: cv.contact.website,
          label: `${isHans ? "个人网站" : "個人網站"}：${toReadableUrl(cv.contact.website)}`,
        }
      : null,
    cv.contact.github
      ? {
          href: cv.contact.github,
          label: `GitHub：${toReadableUrl(cv.contact.github)}`,
        }
      : null,
    cv.contact.linkedin
      ? {
          href: cv.contact.linkedin,
          label: `LinkedIn：${toReadableUrl(cv.contact.linkedin)}`,
        }
      : null,
  ].filter((item): item is { href: string; label: string } => Boolean(item));

  const openInNewTab = (href: string) => /^https?:\/\//i.test(href);
  const companyProjectsTitle = isHans ? "公司项目" : "公司項目";
  const sideProjectsTitle = cv.labels.sideProjects ?? (isHans ? "个人项目" : "個人專案");
  const sideProjects = cv.sideProjects ?? [];

  return (
    <main className="resume-page" lang={cv.languageTag}>
      <article className={`resume resume-cjk ${bodyFontClass}`}>
        <header className="resume-header">
          <h1 className="resume-name">{cv.name}</h1>
          <p className="resume-role">
            {cv.role}
            {yearsOfExperience !== null ? ` · ${yearsOfExperience}+ ${experienceLabel}` : null}
          </p>
          <p className="resume-location">{contactLine}</p>
          {contactLinks.length ? (
            <ul className="resume-contact-list">
              {contactLinks.map((item) => (
                <li key={`${item.label}-${item.href}`}>
                  <a
                    className="resume-link"
                    href={item.href}
                    rel={openInNewTab(item.href) ? "noreferrer" : undefined}
                    target={openInNewTab(item.href) ? "_blank" : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </header>

        <section className="resume-section">
          <h2 className="resume-section-title">{aboutTitle}</h2>
          <p className="resume-paragraph">{cv.summary}</p>
        </section>

        <section className="resume-section">
          <h2 className="resume-section-title">{skillsTitle}</h2>
          <div className="resume-list">
            {cv.skills.map((group) => (
              <p className="resume-skill-line" key={group.category}>
                <span className="resume-inline-title">【{group.category}】</span>
                {group.items.join(" · ")}
              </p>
            ))}
          </div>
        </section>

        <section className="resume-section">
          <h2 className="resume-section-title">{cv.labels.experience}</h2>
          <div className="resume-list">
            {cv.experience.map((item) => (
              <article className="resume-entry" key={`${item.company}-${item.role}`}>
                <div className="resume-entry-heading">
                  <h3 className="resume-entry-title">{item.company}</h3>
                  <p className="resume-entry-role">{item.role}</p>
                  <p className="resume-entry-period">{item.period}</p>
                </div>
                <p className="resume-entry-meta">{item.location}</p>
                <ol className="resume-bullets resume-bullets-numbered">
                  {item.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
        </section>

        <section className="resume-section">
          <h2 className="resume-section-title">{projectsTitle}</h2>
          {cv.projects.length ? (
            <>
              <h3 className="resume-subsection-title">{companyProjectsTitle}</h3>
              <div className="resume-list">
                {cv.projects.map((project) => (
                  <article className="resume-entry" key={project.name}>
                    <div className="resume-entry-heading">
                      <h3 className="resume-entry-title">{project.name}</h3>
                      <p className="resume-entry-period">{project.tech.join(" · ")}</p>
                    </div>
                    <p className="resume-paragraph">{project.summary}</p>
                   
                    {project.link ? (
                      <a
                        className="resume-link resume-project-link"
                        href={project.link}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {toPrintableLinkLabel(project.link)}
                      </a>
                    ) : null}
                  </article>
                ))}
              </div>
            </>
          ) : null}

          {sideProjects.length ? (
            <>
              <h3 className="resume-subsection-title">{sideProjectsTitle}</h3>
              <div className="resume-list">
                {sideProjects.map((project) => (
                  <article className="resume-entry" key={`side-${project.name}`}>
                    <div className="resume-entry-heading">
                      <h3 className="resume-entry-title">{project.name}</h3>
                      <p className="resume-entry-period">{project.tech.join(" · ")}</p>
                    </div>
                    <p className="resume-paragraph">{project.summary}</p>
                    {project.link ? (
                      <a
                        className="resume-link resume-project-link"
                        href={project.link}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {toPrintableLinkLabel(project.link)}
                      </a>
                    ) : null}
                  </article>
                ))}
              </div>
            </>
          ) : null}
        </section>

        <section className="resume-section">
          <h2 className="resume-section-title">{cv.labels.education}</h2>
          <div className="resume-list">
            {cv.education.map((item) => (
              <article className="resume-entry" key={`${item.school}-${item.degree}`}>
                <div className="resume-entry-heading">
                  <h3 className="resume-entry-title">{item.school}</h3>
                  <p className="resume-entry-role">{item.degree}</p>
                  <p className="resume-entry-period">{item.period}</p>
                </div>
                {item.details?.length ? (
                  <p className="resume-entry-meta">{item.details.join("、")}</p>
                ) : null}
              </article>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
