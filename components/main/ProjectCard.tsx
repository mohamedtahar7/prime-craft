import { Link } from "lucide-react";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
interface ProjectCardProps {
  project: any;
}
const ProjectCard = ({ project }: ProjectCardProps) => {
  const { name, link, img, description } = project;
  return (
    <Card className="bg-zinc-900 text-zinc-100 shadow-lg flex lg:flex-row flex-col gap-10 items-center py-6 px-10">
      <a
        href={link}
        className="hover:opacity-80 md:w-[60%] transition"
        target="_blank"
      >
        <img src={img} className="rounded-xl shadow-xl" alt="website image" />
      </a>
      <div className="text-center flex flex-col gap-3">
        <h1 className="font-semibold text-xl">{name}</h1>
        <p>{description}</p>
        <a
          className="flex items-center justify-center gap-1 hover:opacity-80 transition-all font-semibold"
          href={link}
          target="_blank"
        >
          Live Demo <Link className="w-5 h-5" />
        </a>
      </div>
    </Card>
  );
};

export default ProjectCard;
