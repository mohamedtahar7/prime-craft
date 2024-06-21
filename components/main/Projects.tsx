import { projects } from "@/lib/config";
import React from "react";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  return (
    <section id="work" className="border-b border-zinc-700 py-[5%]">
      <div className="mb-5 flex flex-col gap-4">
        <h1 className="text-xl font-semibold text-center">Our Work</h1>
        <p className="text-lg text-zinc-300 font-medium text-center">
          Check out some of the websites we've worked on before.
        </p>
      </div>
      <div className="p-3 flex flex-col gap-5">
        {projects.map((project, id) => (
          <ProjectCard project={project} key={id} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
