import { motion } from "framer-motion";
import { Mail, FileText } from "lucide-react";

import SectionHeading from "../components/SectionHeading";
import { personalInfo } from "../data/siteData";
import profileImage from "../assets/fatin.jpg";

export default function PersonalPage() {
  return (
    // space-y-12: adds vertical spacing between the main page sections
    <div className="space-y-12">
      {/* Hero section */}
      <section
        // grid: uses CSS grid
        // gap-6: adds space between grid items
        // lg:grid-cols-[1.3fr_0.9fr]: creates two columns on large screens
        // lg:items-center: vertically centers grid items on large screens
        className="grid gap-6 lg:grid-cols-[1.3fr_0.9fr] lg:items-center"
      >
        {/* Left side: intro text and links */}
        <motion.div
          // Starts slightly lower and invisible
          initial={{ opacity: 0, y: 16 }}
          // Moves into place and becomes visible
          animate={{ opacity: 1, y: 0 }}
          // Animation duration
          transition={{ duration: 0.45 }}
          // space-y-6: adds vertical spacing between children
          className="space-y-6"
        >
          {/* Name and background */}
          <div
            // space-y-4: adds spacing between heading and paragraph
            className="space-y-4"
          >
            <SectionHeading title={`Hi, I'm ${personalInfo.nickname}.`} />

            <p
              // text-sm: small text size
              // leading-7: increases line height for readability
              // text-slate-600: medium gray text color
              className="text-sm leading-7 text-slate-600"
            >
              {personalInfo.background}
            </p>
          </div>

          {/* Main action buttons */}
          <div
            // flex: places buttons in a row
            // flex-wrap: allows buttons to wrap on small screens
            // gap-3: adds spacing between buttons
            className="flex flex-wrap gap-3"
          >
            <a
              href={`mailto:${personalInfo.email}`}
              // inline-flex: keeps icon and text aligned inside the link
              // items-center: vertically centers icon and text
              // rounded-full: makes the button pill-shaped
              // bg-black: black background
              // px-5: horizontal padding
              // py-3: vertical padding
              // text-sm: small text
              // text-white: white text color
              className="inline-flex items-center rounded-full bg-black px-5 py-3 text-sm text-white"
            >
              <Mail
                // mr-2: adds space after the icon
                // h-4: icon height
                // w-4: icon width
                className="mr-2 h-4 w-4"
              />
              Contact
            </a>

            <a
              href={personalInfo.cv}
              target="_blank"
              rel="noreferrer"
              // inline-flex: keeps icon and text aligned inside the link
              // items-center: vertically centers icon and text
              // rounded-full: makes the button pill-shaped
              // border: adds border
              // border-slate-300: light gray border color
              // px-5: horizontal padding
              // py-3: vertical padding
              // text-sm: small text
              // text-slate-800: dark gray text
              className="inline-flex items-center rounded-full border border-slate-300 px-5 py-3 text-sm text-slate-800"
            >
              <FileText
                // mr-2: adds space after the icon
                // h-4: icon height
                // w-4: icon width
                className="mr-2 h-4 w-4"
              />
              View CV
            </a>
          </div>

          {/* Social / academic links */}
          <div
            // flex: places icons in a row
            // flex-wrap: allows icons to wrap on small screens
            // gap-4: adds spacing between icons
            className="flex flex-wrap gap-4"
          >
            {personalInfo.links.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                title={label}
                // flex: enables centering
                // h-14: sets button height
                // w-14: sets button width
                // items-center: vertically centers icon
                // justify-center: horizontally centers icon
                // rounded-full: makes the button circular
                // border: adds border
                // border-slate-200: very light gray border
                // text-slate-700: icon color
                // hover:bg-slate-50: light background on hover
                className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50"
              >
                {Icon && (
                  <Icon
                    // h-8: icon height
                    // w-8: icon width
                    className="h-8 w-8"
                  />
                )}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right side: profile image card */}
        <motion.div
          // Starts slightly smaller and invisible
          initial={{ opacity: 0, scale: 0.97 }}
          // Grows to normal size and becomes visible
          animate={{ opacity: 1, scale: 1 }}
          // Animation duration with slight delay
          transition={{ duration: 0.45, delay: 0.08 }}
          // rounded-3xl: large rounded corners
          // border: adds border around card
          // border-slate-200: very light gray border
          // bg-white: white card background
          // p-8: padding inside the card
          // shadow-xl: large shadow
          className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl"
        >
          <img
            src={profileImage}
            alt={`${personalInfo.name} profile`}
            // rounded-lg: slightly rounds image corners
            className="rounded-lg"
          />
        </motion.div>
      </section>
    </div>
  );
}