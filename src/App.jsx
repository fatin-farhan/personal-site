import { useMemo, useState } from "react";
import { User, FlaskConical } from "lucide-react";
import NavLink from "./components/NavLink";
import PersonalPage from "./pages/PersonalPage";
import ResearchPage from "./pages/ResearchPage";
import { personalInfo } from "./data/siteData";

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