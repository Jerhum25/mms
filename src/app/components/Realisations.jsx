"use client";

import Image from "next/image";
import { useState } from "react";

// Liste des projets pour simplifier le code et éviter la répétition
const projects = [
  {
    src: "/images/cuisine1.png",
    alt: "Rénovation cuisine",
    title: "Rénovation cuisine",
  },
  {
    src: "/images/sdb1.png",
    alt: "Rénovation salle de bain",
    title: "Rénovation salle de bain",
  },
  { src: "/images/sol1.png", alt: "Pose de parquet", title: "Pose de parquet" },
  {
    src: "/images/escalier-ext1.png",
    alt: "Pose d'un garde-corps",
    title: "Pose d'un garde-corps",
  },
  {
    src: "/images/meuble-tv1.png",
    alt: "Conception meuble TV",
    title: "Conception meuble TV",
  },
];

export default function Realisations() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="w-full h-auto flex justify-center" id="realisations">
      <div className="xl:w-[70%] w-full flex flex-col bg-white text-black px-5 py-10">
        <div className="flex flex-col gap-3">
          <h2 className="uppercase">nos réalisations</h2>
          <h3 className="text-3xl font-bold">
            Quelques exemples de nos travaux
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full gap-8 pt-8">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col gap-3 w-full sm:w-full">
              <div
                className="w-auto h-44 relative cursor-pointer overflow-hidden rounded-lg group"
                onClick={() => setSelectedImage(project)}
              >
                <Image
                  fill
                  unoptimized
                  alt={project.alt}
                  src={project.src}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p>{project.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modale Plein Écran */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-5 right-5 text-white text-3xl font-bold hover:opacity-75 z-10"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>

          <div
            className="relative w-full h-full max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Évite la fermeture si on clique sur le texte sous l'image
          >
            <div className="relative w-full h-full">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                unoptimized
                className="object-contain"
                priority
              />
            </div>
            <p className="text-white text-center mt-4 text-lg font-medium">
              {selectedImage.title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
