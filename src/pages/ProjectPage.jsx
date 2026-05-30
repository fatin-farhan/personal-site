import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import SectionHeading from "../components/SectionHeading";
import { project } from "../data/siteData";

export default function ProjectPage() {
  return (
    // space-y-10: adds vertical spacing between the main page sections
    <div className="space-y-10">
      {/* Projects section */}
      <section
        // space-y-5: adds vertical spacing between the heading and project list
        className="space-y-5"
      >
        <SectionHeading eyebrow="Selected work" title="Projects" />

        <div
          // grid: stacks project cards in a grid
          // gap-4: adds spacing between project cards
          className="grid gap-4"
        >
          {project.publications.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              // Starts slightly lower and invisible
              initial={{ opacity: 0, y: 10 }}
              // Moves into place and becomes visible
              animate={{ opacity: 1, y: 0 }}
              // Staggers each project card animation slightly
              transition={{ duration: 0.35, delay: index * 0.05 }}
              // block: makes the whole card clickable
              // rounded-3xl: large rounded corners
              // border: adds a border
              // border-slate-200: very light gray border
              // bg-white: white card background
              // p-7: padding inside the card
              // shadow-sm: small shadow
              // transition: smooths hover effects
              // hover:-translate-y-0.5: lifts card slightly on hover
              // hover:shadow-md: increases shadow on hover
              className="block rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div
                // flex: uses flexbox layout
                // flex-col: stacks content vertically on small screens
                // gap-3: adds spacing between text and icon
                // md:flex-row: switches to row layout on medium screens
                // md:items-start: aligns items to the top on medium screens
                // md:justify-between: pushes text and icon apart on medium screens
                className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between"
              >
                <div
                  // max-w-3xl: limits the card text width for readability
                  className="max-w-3xl"
                >
                  <h3
                    // mt-2: adds top margin
                    // text-xl: large text size
                    // font-semibold: semi-bold text
                    // text-slate-900: very dark gray text
                    className="mt-2 text-xl font-semibold text-slate-900"
                  >
                    {item.title}
                  </h3>

                  <p
                    // mt-4: adds top margin
                    // text-sm: small text size
                    // font-medium: medium text weight
                    // uppercase: makes text uppercase
                    // tracking-wide: adds letter spacing
                    // text-slate-500: muted gray text color
                    className="mt-4 text-sm font-medium uppercase tracking-wide text-slate-500"
                  >
                    Project Description
                  </p>

                  <p
                    // mt-2: adds top margin
                    // text-base: normal body text size
                    // leading-relaxed: comfortable line height
                    // text-slate-700: dark gray text color
                    // max-w-prose: limits paragraph width for readability
                    className="mt-2 max-w-prose text-base leading-relaxed text-slate-700"
                  >
                    {item.description}
                  </p>

                  <p
                    // mt-4: adds top margin
                    // text-sm: small text size
                    // font-medium: medium text weight
                    // uppercase: makes text uppercase
                    // tracking-wide: adds letter spacing
                    // text-slate-500: muted gray text color
                    className="mt-4 text-sm font-medium uppercase tracking-wide text-slate-500"
                  >
                    Technologies and Concepts Used
                  </p>

                  <p
                    // mt-2: adds top margin
                    // text-base: normal body text size
                    // leading-relaxed: comfortable line height
                    // text-slate-700: dark gray text color
                    // max-w-prose: limits paragraph width for readability
                    className="mt-2 max-w-prose text-base leading-relaxed text-slate-700"
                  >
                    {item.techniques}
                  </p>
                </div>

                <ExternalLink
                  // h-5: icon height
                  // w-5: icon width
                  // shrink-0: prevents icon from shrinking
                  // text-slate-400: light gray icon color
                  className="h-5 w-5 shrink-0 text-slate-400"
                />
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </div>
  );
}