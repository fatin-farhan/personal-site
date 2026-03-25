import { motion } from "framer-motion";
import { FlaskConical, BookOpen, ExternalLink } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { research } from "../data/siteData";

export default function ResearchPage() {
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