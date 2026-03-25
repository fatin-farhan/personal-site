import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  FlaskConical,
  Mail,
  ExternalLink,
  GraduationCap,
  FileText,
  BookOpen,
  ArrowRight,
} from "lucide-react";

const personalInfo = {
  name: "Your Name",
  role: "Researcher · Builder · Lifelong Learner",
  tagline:
    "I explore ideas at the intersection of research, technology, and thoughtful design.",
  bio: "I'm a researcher and creator interested in turning complex ideas into clear, useful work. This site is a simple home for who I am, what I study, and what I'm building next.",
  email: "you@example.com",
  links: [
    { label: "Google Scholar", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "CV", href: "#" },
  ],
  highlights: [
    "Research focus on your field or long-term interests",
    "Experience across academia, industry, or independent work",
    "Interested in collaboration, writing, and open knowledge",
  ],
};

const research = {
  intro:
    "My research centers on a few core questions: how we build better systems, how people use them, and how we evaluate what matters.",
  themes: [
    {
      title: "Research Theme One",
      description:
        "Describe a major line of inquiry here. Summarize the core problem, why it matters, and the methods you use.",
    },
    {
      title: "Research Theme Two",
      description:
        "Use this section for another area of focus, such as applied work, interdisciplinary collaborations, or long-term projects.",
    },
    {
      title: "Research Theme Three",
      description:
        "Add a third theme for breadth: theory, experiments, systems, policy, design, or any other dimension of your research.",
    },
  ],
  publications: [
    {
      title: "Paper Title or Preprint Name",
      venue: "Conference / Journal / Year",
      summary:
        "A one- or two-line description of the contribution and why it matters.",
      href: "#",
    },
    {
      title: "Another Project or Publication",
      venue: "Workshop / Lab / Year",
      summary:
        "A concise summary that makes the work approachable for a broad audience.",
      href: "#",
    },
    {
      title: "Ongoing Research Project",
      venue: "In progress",
      summary:
        "Briefly describe what you are currently exploring and what questions remain open.",
      href: "#",
    },
  ],
};

function NavLink({ active, onClick, icon: Icon, label }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm transition ${
        active
          ? "bg-black text-white"
          : "bg-white text-slate-700 hover:bg-slate-100"
      }`}
    >
      <Icon className="h-4 w-4" />
      {label}
    </button>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl space-y-2">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="text-base leading-7 text-slate-600">{description}</p>
      )}
    </div>
  );
}

function PersonalPage() {
  return (
    <div className="space-y-12">
      <section className="grid gap-6 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
            <User className="h-4 w-4" />
            Personal
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
              {personalInfo.name}
            </h1>
            <p className="text-lg font-medium text-slate-700 sm:text-xl">
              {personalInfo.role}
            </p>
            <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              {personalInfo.tagline}
            </p>
          </div>

          <p className="max-w-2xl text-base leading-8 text-slate-600">
            {personalInfo.bio}
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="rounded-full bg-black px-5 py-3 text-sm text-white"
            >
              <span className="inline-flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </span>
            </a>

            <a
              href="#"
              className="rounded-full border border-slate-300 px-5 py-3 text-sm text-slate-800"
            >
              <span className="inline-flex items-center">
                <FileText className="mr-2 h-4 w-4" />
                View CV
              </span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl"
        >
          <div className="mb-6 h-72 rounded-[1.5rem] bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200" />
          <div className="space-y-4">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                Quick profile
              </p>
              <p className="mt-2 text-lg font-medium text-slate-900">
                Researcher with a personal point of view
              </p>
            </div>

            <div className="space-y-3">
              {personalInfo.highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-slate-500" />
                  <p className="text-sm leading-6 text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <SectionHeading
            eyebrow="Background"
            title="A short introduction"
            description="Use this space for your education, interests, and the story behind your work."
          />
          <div className="mt-6 flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
            <GraduationCap className="mt-1 h-5 w-5 text-slate-500" />
            <p className="text-sm leading-7 text-slate-600">
              Add a few sentences here about your background, current
              affiliation, and the communities or disciplines you work across.
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <SectionHeading
            eyebrow="Links"
            title="Find me elsewhere"
            description="Replace these placeholders with your actual profiles and documents."
          />
          <div className="mt-6 grid gap-3">
            {personalInfo.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 transition hover:bg-slate-50"
              >
                <span>{link.label}</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function ResearchPage() {
  return (
    <div className="space-y-10">
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="space-y-6"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
          <FlaskConical className="h-4 w-4" />
          Research
        </div>

        <SectionHeading
          eyebrow="Overview"
          title="Questions, themes, and publications"
          description={research.intro}
        />
      </motion.section>

      <section className="grid gap-6 lg:grid-cols-3">
        {research.themes.map((theme, index) => (
          <motion.div
            key={theme.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
            className="h-full rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
          >
            <BookOpen className="mb-4 h-5 w-5 text-slate-500" />
            <h3 className="text-xl font-semibold text-slate-900">
              {theme.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {theme.description}
            </p>
          </motion.div>
        ))}
      </section>

      <section className="space-y-5">
        <SectionHeading
          eyebrow="Selected work"
          title="Publications and ongoing projects"
          description="Make your research legible for both specialists and first-time visitors."
        />

        <div className="grid gap-4">
          {research.publications.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="block rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div className="max-w-3xl">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                    {item.venue}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.summary}
                  </p>
                </div>
                <ExternalLink className="h-5 w-5 shrink-0 text-slate-400" />
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState("personal");

  const pageTitle = useMemo(() => {
    return page === "personal" ? "Personal" : "Research";
  }, [page]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-6 sm:px-8 lg:px-10">
        <header className="sticky top-0 z-20 mb-8 rounded-[2rem] border border-slate-200/80 bg-white/80 p-4 shadow-sm backdrop-blur">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-lg font-semibold tracking-tight text-slate-950">
                {personalInfo.name}
              </p>
              <p className="text-sm text-slate-600">Personal website</p>
            </div>

            <nav className="flex flex-wrap gap-2">
              <NavLink
                active={page === "personal"}
                onClick={() => setPage("personal")}
                icon={User}
                label="Personal"
              />
              <NavLink
                active={page === "research"}
                onClick={() => setPage("research")}
                icon={FlaskConical}
                label="Research"
              />
            </nav>
          </div>
        </header>

        <main>
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
              Current page
            </p>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
              {pageTitle}
            </h1>
          </div>

          {page === "personal" ? <PersonalPage /> : <ResearchPage />}
        </main>
      </div>
    </div>
  );
}