import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import SectionHeading from "../components/SectionHeading";
import { research } from "../data/siteData";

export default function ResearchPage() {
  return (
    // space-y-10: adds vertical spacing between the main page sections
    <div className="space-y-10">
      {/* Page heading */}
      <motion.section
        // Starts slightly lower and invisible
        initial={{ opacity: 0, y: 16 }}
        // Moves into place and becomes visible
        animate={{ opacity: 1, y: 0 }}
        // Animation duration
        transition={{ duration: 0.45 }}
        // space-y-6: adds vertical spacing between children
        className="space-y-6"
      >
        <SectionHeading title="Questions and publications" />
      </motion.section>

      {/* Research themes */}
      <section
        // grid: uses CSS grid
        // gap-6: adds spacing between theme cards
        // lg:grid-cols-3: shows three columns on large screens
        className="grid gap-6 lg:grid-cols-3"
      >
        {research.themes.map((theme, index) => (
          <motion.div
            key={theme.title}
            // Starts slightly lower and invisible
            initial={{ opacity: 0, y: 12 }}
            // Moves into place and becomes visible
            animate={{ opacity: 1, y: 0 }}
            // Staggers each card animation slightly
            transition={{ duration: 0.35, delay: index * 0.06 }}
            // h-full: makes cards fill available height
            // rounded-3xl: large rounded corners
            // border: adds a border
            // border-slate-200: very light gray border
            // bg-white: white card background
            // p-8: padding inside the card
            // shadow-sm: small shadow
            className="h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <h3
              // text-xl: large text size
              // font-semibold: semi-bold text weight
              // text-slate-900: very dark gray text
              className="text-xl font-semibold text-slate-900"
            >
              {theme.title}
            </h3>

            <p
              // mt-3: adds top margin
              // text-sm: small text size
              // leading-7: increases line height for readability
              // text-slate-600: medium gray text color
              className="mt-3 text-sm leading-7 text-slate-600"
            >
              {theme.description}
            </p>
          </motion.div>
        ))}
      </section>

      {/* Publications section */}
      <section
        // space-y-5: adds vertical spacing between heading and publication list
        className="space-y-5"
      >
        <SectionHeading
          eyebrow="Selected work"
          title="Publications and ongoing projects"
        />

        <div
          // grid: stacks publication cards in a grid
          // gap-4: adds spacing between publication cards
          className="grid gap-4"
        >
          {research.publications.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              // Starts slightly lower and invisible
              initial={{ opacity: 0, y: 10 }}
              // Moves into place and becomes visible
              animate={{ opacity: 1, y: 0 }}
              // Staggers each publication animation slightly
              transition={{ duration: 0.35, delay: index * 0.05 }}
              // block: makes the whole card clickable
              // rounded-3xl: large rounded corners
              // border: adds border
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
                  // max-w-3xl: limits text width for readability
                  className="max-w-3xl"
                >
                  <p
                    // text-xs: extra-small text size
                    // font-medium: medium text weight
                    // uppercase: makes text uppercase
                    // tracking-[0.18em]: adds wide letter spacing
                    // text-slate-500: muted gray text color
                    className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500"
                  >
                    {item.venue}
                  </p>

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
                    // mt-2: adds top margin
                    // text-sm: small text size
                    // leading-7: increases line height for readability
                    // text-slate-600: medium gray text color
                    className="mt-2 text-sm leading-7 text-slate-600"
                  >
                    {item.summary}
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