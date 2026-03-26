import { motion } from "framer-motion";
import { Mail, ExternalLink, GraduationCap, FileText, ArrowRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { personalInfo } from "../data/siteData";
import CPS2RL from "../assets/cps2rl.png";
import WSU from "../assets/wsu.gif";
import Fatin from "../assets/fatin.jpg";

export default function PersonalPage() {
  return (
    <div className="space-y-12">
      <section className="grid gap-6 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="space-y-6"
        >
          {/*
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
            <User className="h-4 w-4" />
            Personal
          </div>
          */}

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
              href={`${personalInfo.links[3].href}`}
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
          <div className="mb-6 w-full h-auto ">
            <img src={Fatin} alt="Fatin" className="rounded-lg" />
          </div>
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
            title="Hi, I'm Fatin."          />
          <div className="mt-6 flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
            <GraduationCap className="mt-1 h-20 w-20 text-slate-500" />
            <p className="text-sm leading-7 text-slate-600">
              {personalInfo.background}
            </p>
          </div>
          <div className="mt-2 flex justify-center items-center gap-20">
            <img src={WSU} alt="WSU" className="w-24 h-auto rounded-lg" />
            <img src={CPS2RL} alt="CPS2RL" className="w-24 h-auto rounded-lg" />
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <SectionHeading
            eyebrow="Links"
            title="Find me elsewhere"
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