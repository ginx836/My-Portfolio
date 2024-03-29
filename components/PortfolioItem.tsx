"use client";

import React, { useState } from "react";
import Image from "next/image";
import { projects } from "@/constants";
import { ArrowUpRight } from "lucide-react";

import Link from "next/link";

const PortfolioItem = ({ project }: { project: (typeof projects)[0] }) => {
  const [currentImg, setCurrentImg] = useState(project.pictures[0]);

  return (
    <div className="box">
      <h3 className="mb-5">{project.header}</h3>
      <div className="relative w-full h-80 rounded-lg overflow-hidden group cursor-pointer mb-5">
        <Image
          src={currentImg}
          alt={project.header}
          priority
          fill
          className="object-contain"
        />
        <div className="bg-black bg-opacity-10 backdrop-blur-[1px] absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Link href={`/portfolio/${project.id}`} aria-label="Voir le projet">
            <div className="w-16 h-16 flex items-center justify-center bg-peach-700 border border-peach-400 p-3 text-grey rounded-lg">
              <ArrowUpRight />
            </div>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {project.pictures.map((picture, index) => (
          <div
            key={index}
            className="relative h-20 w-full rounded-lg overflow-hidden group cursor-pointer"
            onClick={() => setCurrentImg(picture)}
          >
            <Image
              src={picture}
              alt={`${project.header} - ${index}`}
              fill
              className="object-contain"
            />
            <div
              className={`bg-black bg-opacity-10 backdrop-blur-[1px] absolute top-0 left-0 w-full h-full transition-opacity duration-300 ${
                currentImg !== picture ? "opacity-100" : "opacity-0"
              }`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioItem;
