import { useMemo, useState } from "react";
import { User, FlaskConical,FolderOpen  } from "lucide-react";
import NavLink from "./components/NavLink";
import PersonalPage from "./pages/PersonalPage";
import ResearchPage from "./pages/ResearchPage";
import ProjectPage from "./pages/ProjectPage";
import { personalInfo } from "./data/siteData";

export default function App() {
  const [page, setPage] = useState("personal");

  const renderPage = () => {
  switch (page) {
    case "research":
      return <ResearchPage />;
    case "project":
      return <ProjectPage />;
    default:
      return <PersonalPage />;
  }
};



  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-6 sm:px-8 lg:px-10">
        <header className="sticky top-0 z-20 mb-8 rounded-[2rem] border border-slate-200/80 bg-white/80 p-4 shadow-sm backdrop-blur">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-lg font-semibold tracking-tight text-slate-950">
                {personalInfo.name}
              </p>
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
              <NavLink
                active={page === "project"}
                onClick={() => setPage("project")}
                icon={FolderOpen }
                label="Project"
              />
            </nav>
          </div>
        </header>

        <main>
          {renderPage()}
        </main>
      </div>
    </div>
  );
}