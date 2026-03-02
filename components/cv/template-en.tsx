import { CVData } from "@/data/cv.types";

type CVTemplateEnProps = {
  cv: CVData;
};

export function CVTemplateEn({ cv }: CVTemplateEnProps) {
  const toReadableUrl = (url: string) =>
    url.replace(/^https?:\/\/(www\.)?/i, "").replace(/\/$/, "");
  const toPrintableLinkLabel = (url: string) => {
    const readable = toReadableUrl(url);
    if (readable.length <= 64) {
      return readable;
    }

    return `${readable.slice(0, 61)}...`;
  };

  const contactLine = [
    cv.contact.location,
    cv.contact.phone,
    cv.contact.email,
  ].join(" • ");

  return (
    <main className="classic-page" lang={cv.languageTag}>
      <article className="classic-resume font-resume-serif">
        <header className="classic-header">
          <h1 className="classic-name">{cv.name}</h1>
          <p className="classic-role">{cv.role}</p>
          <p className="classic-contact">{contactLine}</p>
          <p className="classic-contact">
            <a className="classic-link" href={cv.contact.website} rel="noreferrer" target="_blank">
              {toReadableUrl(cv.contact.website)}
            </a>{" "}
            •{" "}
            <a className="classic-link" href={cv.contact.github} rel="noreferrer" target="_blank">
              {toReadableUrl(cv.contact.github)}
            </a>{" "}
            •{" "}
            <a
              className="classic-link"
              href={cv.contact.linkedin}
              rel="noreferrer"
              target="_blank"
            >
              {toReadableUrl(cv.contact.linkedin)}
            </a>
          </p>
        </header>

        <section className="classic-section">
          <h2 className="classic-section-title">{cv.labels.education}</h2>
          {cv.education.map((item) => (
            <article className="classic-entry" key={`${item.school}-${item.degree}`}>
              <div className="classic-entry-head">
                <div>
                  <h3 className="classic-entry-title">{item.school}</h3>
                  <p className="classic-entry-subtitle">{item.degree}</p>
                </div>
                <p className="classic-entry-meta">{item.period}</p>
              </div>
              {item.details.length ? (
                <ul className="classic-list">
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </section>

        <section className="classic-section">
          <h2 className="classic-section-title">{cv.labels.experience}</h2>
          {cv.experience.map((item) => (
            <article className="classic-entry" key={`${item.company}-${item.role}`}>
              <div className="classic-entry-head">
                <div>
                  <h3 className="classic-entry-title">{item.company}</h3>
                  <p className="classic-entry-subtitle">{item.role}</p>
                </div>
                <p className="classic-entry-meta">
                  {item.location}
                  <br />
                  {item.period}
                </p>
              </div>
              <ul className="classic-list">
                {item.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="classic-section">
          <h2 className="classic-section-title">{cv.labels.projects}</h2>
          {cv.projects.map((project) => (
            <article className="classic-entry" key={project.name}>
              <div className="classic-entry-head">
                <h3 className="classic-entry-title">{project.name}</h3>
                <p className="classic-entry-meta">{project.tech.join(" · ")}</p>
              </div>
              <p>{project.summary}</p>
              {project.link ? (
                <a className="classic-link classic-project-link" href={project.link}>
                  {toPrintableLinkLabel(project.link)}
                </a>
              ) : null}
            </article>
          ))}
        </section>

        <section className="classic-section">
          <h2 className="classic-section-title">{cv.labels.skills}</h2>
          {cv.skills.map((group) => (
            <p className="classic-skill-line" key={group.category}>
              <span className="classic-skill-label">{group.category}:</span> {group.items.join(", ")}
            </p>
          ))}
        </section>
      </article>
    </main>
  );
}
