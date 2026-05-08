/** @format */
"use client";
import { useContext } from "react";
import Navbar from "../../components/navbar";
import ProjectsList, { Project } from "./components/projectList";
import { ThemeContext } from "../themeContext";
import React from "react";
import { useTranslation } from "react-i18next";
import Footer from "../../components/footer";

export default function ProjectsPage() {
  const { t } = useTranslation();

  const { isDark } = useContext(ThemeContext);

  const [projects, setProjects] = React.useState<Project[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (loading) return;

    const hash = window.location.hash;
    if (hash) {
      const timeoutId = setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);

      return () => clearTimeout(timeoutId);
    }
  }, [loading]);

  React.useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SITE_URL}/api/projects`,
        );
        if (!res.ok) throw new Error("Erro ao buscar projetos");
        const data = await res.json();
        setProjects(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unexpected error occurred");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  return (
    <div
      className={`${
        isDark ? "dark" : "light"
      } w-full flex flex-col items-center justify-center bg-primary-light dark:bg-primary-dark text-primary-dark dark:text-primary-light`}
    >
      <Navbar />

      <div className="w-full max-w-[1400px] px-2 sm:px-12">
        <section className="fade-element w-full gap-3 text-center flex flex-col items-center my-36">
          <h1 className="text-6xl sm:text-8xl font-bold font-khan">
            {t("projects-page.title")}
          </h1>
          <p className="max-w-[60%] text-lg sm:text-xl font-light">
            {t("projects-page.description")}
          </p>
        </section>

        {loading ? (
          <p className="text-center">Loading projects...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <ProjectsList projects={projects} />
        )}

        {!loading && (
          <section className="my-48 flex justify-center">
            <h4 className="sm:text-xl text-2xl text-center">
              {t("projects-page.done")}
            </h4>
          </section>
        )}
      </div>
      <Footer />
    </div>
  );
}
