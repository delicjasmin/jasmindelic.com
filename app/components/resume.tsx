const experience = [
  {
    role: "Full Stack Software Engineer",
    org: "DSLON Wireless",
    place: "Remote",
    dates: "Jun 2024 – Mar 2026",
    points: [
      "Built a management platform for wireless, FTTH, IPTV, and VoIP with Next.js, tRPC, and Prisma, covering provisioning through retention.",
      "Designed role-based access and multi-tenant isolation with Better Auth and Redis across 50+ API routes.",
      "Built inventory tracking from warehouse to customer site, including validated bulk CSV import.",
      "Added RADIUS and PPPoE monitoring for live network troubleshooting.",
      "Shipped a field-task system with priority queues and map-based assignment.",
      "Built reconciliation and reporting on PostgreSQL, including multi-bank balance tracking.",
    ],
  },
  {
    role: "Full Stack Software Engineer",
    org: "Trailfund",
    place: "Remote, contract",
    dates: "May 2025 – Jul 2025",
    points: [
      "Built a data onboarding flow for real-estate spreadsheets, with mapping, validation, and inline editing.",
      "Shipped workspace settings for invites, notifications, email templates, and deal workflows.",
      "Moved the database layer from Supabase to Prisma.",
    ],
  },
  {
    role: "General Manager",
    org: "AP Agropromet",
    place: "Gradačac",
    dates: "Jan 2019 – Oct 2023",
    points: [
      "Led a team of 30+ across operations, contracts, and retail accounts.",
      "Replaced manual workflows with tracking for labor and inventory.",
      "Ran supply and distribution for bulk produce.",
    ],
  },
  {
    role: "Operations Coordinator",
    org: "AP Agropromet",
    place: "Gradačac",
    dates: "Jun 2015 – Dec 2018",
    points: [
      "Scheduled harvest crews and daily regional deliveries.",
      "Coordinated field teams and management on safety and quality.",
    ],
  },
];

const skills = [
  {
    label: "Programming",
    value:
      "TypeScript, JavaScript, React, React Native, Next.js, Node.js, Go, C/C++, HTML, CSS, Docker",
  },
  {
    label: "APIs",
    value: "REST, tRPC, Prisma, Drizzle",
  },
  {
    label: "Data",
    value: "PostgreSQL, MySQL, MongoDB, Redis",
  },
  {
    label: "Cloud",
    value: "Vercel, AWS, Railway",
  },
  {
    label: "Tools",
    value: "Git, Linux, Jira, Linear",
  },
];

export function Resume() {
  return (
    <article>
      <header>
        <h1 className="text-base font-bold">Jasmin Delić</h1>
        <p>Software Engineer · Tuzla, Bosnia and Herzegovina</p>
        <p className="mt-1">
          <a
            className="text-[#000080] underline"
            href="mailto:delicjasmi@gmail.com"
          >
            delicjasmi@gmail.com
          </a>
          {" · "}
          <a className="text-[#000080] underline" href="tel:+38762355912">
            +387 62 355 912
          </a>
        </p>
        <p>
          <a
            className="text-[#000080] underline"
            href="https://github.com/delicjasmin"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          {" · "}
          <a
            className="text-[#000080] underline"
            href="https://www.linkedin.com/in/delic-jasmin/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          {" · "}
          <a
            className="text-[#000080] underline"
            href="/Jasmin-Delic-CV.pdf"
            target="_blank"
            rel="noreferrer"
          >
            CV (PDF)
          </a>
        </p>
      </header>

      <section className="mt-3">
        <h2 className="text-[13px] font-bold">Summary</h2>
        <p className="mt-1">
          Full-stack software engineer. Ships web applications end to end, from
          the interface to the API and the data behind them. Also led operations
          and managed a team of 30+ people before moving into software.
        </p>
      </section>

      <section className="mt-3">
        <h2 className="text-[13px] font-bold">Experience</h2>
        <ul className="mt-1 list-none p-0">
          {experience.map((job) => (
            <li key={`${job.org}-${job.dates}`} className="mt-2">
              <p className="font-bold">
                {job.role}, {job.org}
              </p>
              <p>
                {job.place} · {job.dates}
              </p>
              <ul className="mt-1 list-disc pl-4">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-3">
        <h2 className="text-[13px] font-bold">Skills</h2>
        <ul className="mt-1 list-none p-0">
          {skills.map((skill) => (
            <li key={skill.label}>
              <span className="font-bold">{skill.label}: </span>
              {skill.value}
            </li>
          ))}
        </ul>
        <p className="mt-1">Languages: English, Bosnian</p>
      </section>

      <section className="mt-3">
        <h2 className="text-[13px] font-bold">Education</h2>
        <p className="mt-1">
          BSc of Civil Engineering, University of Sarajevo
        </p>
      </section>
    </article>
  );
}
