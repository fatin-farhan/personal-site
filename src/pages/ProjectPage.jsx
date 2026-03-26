import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { project } from "../data/siteData";

export default function ProjectPage() {
  return (
    <div className="space-y-10">

      <section className="space-y-5">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects"
        />

        <div className="grid gap-4">
          {project.publications.map((item, index) => (
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
                    <h3 className="mt-2 text-xl font-semibold text-slate-900"> {item.title}</h3>
                    <p className="mt-4 text-sm font-medium uppercase tracking-wide text-slate-500">Project Description</p>
                    <p className="mt-2 text-base leading-relaxed text-slate-700 max-w-prose">{item.description}</p>
                    <p className="mt-4 text-sm font-medium uppercase tracking-wide text-slate-500">Technologies and Concepts Used</p>
                    <p className="mt-2 text-base leading-relaxed text-slate-700 max-w-prose">{item.techniques}</p>
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