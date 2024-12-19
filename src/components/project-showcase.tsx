'use client'

import Image from "next/image"
import { ExternalLink } from 'lucide-react'

interface ProjectLink {
  url: string;
  label: string;
}

interface Project {
  title: string;
  links: ProjectLink[];
  description: string;
  imageUrl: string;
  blurDataUrl?: string;
  notes: string[];
}

interface ProjectShowcaseProps {
  projects: Project[]
}

export function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  return (
    <div className="container mx-auto py-12 space-y-32">
      <header className="max-w-4xl mx-auto mb-16">
        <div>
          <h1 className="text-5xl font-extrabold mb-6 text-balance">
            How{" "}
            <span className="hover:underline">
              <a
                href="https://robotostudio.com?ref=show-and-tell"
                target="_blank"
                rel="noopener noreferrer"
              >
                Roboto Studio
              </a>
            </span>{" "}
            ships faster with v0
          </h1>
          <p className="text-xl text-balance">
            We are a boutique web development studio that creates the
            very best editorial experiences on the web. We build
            extraordinarily fast and scalable websites leveraging
            generative AI.
          </p>
        </div>
      </header>

      {projects.map((project, index) => (
        <div key={index} className="relative">
          <div className="max-w-4xl mx-auto bg-[#F5F5F5] border border-gray-200 rounded-lg p-8">
            <div className="mb-8">
              <h2 className="text-4xl font-extrabold mb-4">
                {project.title}
              </h2>
              <div className="space-y-1">
                {project.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    className="flex items-center text-base hover:bg-gray-200 transition-colors p-1 rounded"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="space-y-8">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm border border-gray-200">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  className="object-cover"
                  placeholder={project.blurDataUrl ? "blur" : "empty"}
                  blurDataURL={project.blurDataUrl}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  priority={index === 0}
                />
              </div>
              <p className="text-base leading-normal">
                {project.description}
              </p>
              <div>
                <h3 className="text-2xl font-bold mb-4">Features</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {project.notes.map((note, noteIndex) => (
                    <li key={noteIndex} className="text-base">
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
      <footer className="text-center text-sm text-gray-500 mt-16">
        Built with ❤️ & v0.dev, approximately 3 hours before the
        presentation
      </footer>
    </div>
  );
}

