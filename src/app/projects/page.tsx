/** @format */
"use client";
import { useContext } from "react";
import Navbar from "../../components/navbar";
import ProjectsList, { Project } from "./components/projectList";
import { ThemeContext } from "../themeContext";
import React from "react";

// async function getProjects() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/projects`, {
//     cache: "no-store", // sempre pegar dados frescos
//   });

//   if (!res.ok) throw new Error("Erro ao buscar projetos");
//   return res.json();
// }

export default function ProjectsPage() {
  //const projects = await getProjects();
  const { isDark } = useContext(ThemeContext);

  const [projects, setProjects] = React.useState<Project[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SITE_URL}/api/projects`
        );
        if (!res.ok) throw new Error("Erro ao buscar projetos");
        const data = await res.json();
        setProjects(data);
      } catch (err: any) {
        setError(err.message);
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
          <h1 className="text-6xl sm:text-8xl font-bold font-khan">Projects</h1>
          <p className="max-w-[60%] text-lg sm:text-xl font-light">
            Made with love, inspiration and effort
          </p>
        </section>

        {loading ? (
          <p className="text-center">Loading projects...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <ProjectsList projects={projects} />
        )}

        <section className="my-48 flex justify-center">
          <h4 className="sm:text-xl text-2xl text-center">
            Por enquanto é só isso, mas vem mais por aí!
          </h4>
        </section>
      </div>
    </div>
  );
}
