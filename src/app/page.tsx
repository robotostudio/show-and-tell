import { ProjectShowcase } from "@/components/project-showcase";

const projects = [
  {
    title: "Loggle",
    links: [
      { url: "https://loggle.ai", label: "Dashboard" },
      {
        url: "https://www.loggle.ai/report/synacti%20website-ii5msbucfsfgu",
        label: "Linear Project View",
      },
    ],
    description:
      "A powerful dashboard for managing and tracking time entries with detailed analytics.",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/www.loggle.ai_dashboard-7WAbRaU6IDN6McpnAXCQ0r6Ge8TiRl.png",
    blurDataUrl:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVigAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyUC0zLyYuLy0xPDZCN0A3MS85RFVIWURGVk1RW3BbYFRhXFtvYF3/2wBDARUXFx4aHR4eHV5eXmBeYF5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=",
    notes: [
      "Direct integration between Toggl & Linear",
      "Entire UI built with v0, no figma designs",
      "All tables, filters and some of the functionality built in v0",
      "Building internal tools, no longer mammoth task",
    ],
  },
  {
    title: "Synacti",
    links: [
      { url: "https://synacti.vercel.app", label: "Website" },
      {
        url: "https://v0.dev/chat/BsERvjD2gNp",
        label: "Early animation in v0",
      },
      {
        url: "https://synacti-6pm7e0xem-roboto.vercel.app/",
        label: "Theme customiser",
      },
    ],
    description:
      "A marketplace platform where founders can connect and trade with other founders.",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/synacti.vercel.app_%20(1)-oy1luaNbC1mtoOPzlpJn0FGU9qB9It.png",
    notes: [
      "First version of all components on the page built in v0",
      "Falling blocks entirely made with v0 + Matter.js",
      "Color picker stolen from old v0 theming (bring it back)",
      "Data as object to help with v0 prompting",
    ],
  },
  {
    title: "Money Atlas",
    links: [
      {
        url: "https://www.moneyatlas.com/calculator-example-1",
        label: "Calculator Example 1",
      },
      {
        url: "https://www.moneyatlas.com/calculator-example-2",
        label: "Calculator Example 2",
      },
      {
        url: "https://www.moneyatlas.com/calculator-example-3",
        label: "Calculator Example 3",
      },
    ],
    description:
      "A comprehensive financial product comparison platform that simplifies money management decisions.",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/www.moneyatlas.com_%20(1)-3J8MnjfLLUjXa9adUaJrkSOdFk8TOc.png",
    notes: [
      "v0 was used for some of the components throughout website",
      "Our non-tech client used v0 to generate calculators (especially v3)",
      "Ultra-fast low cost organic SEO technique",
      "PDF generated from content",
    ],
  },
  {
    title: "Victorian Cat Generator",
    links: [
      {
        url: "https://victoriancat.vercel.app",
        label: "Victorian Cat Generator",
      },
    ],
    description:
      "An AI-powered generator that creates unique Victorian-style cat portraits with customizable characteristics.",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/victorian-cat-generator-p7vvl43q2-roboto.vercel.app_-78EHBkKbUOlhIjd5ZdsRGmeCXwzLUh.png",
    notes: [
      "Generated in half an hour, inspired by ginger bread v0 project",
      "Internal micro-tools are incredible with v0",
      "All UI generated with v0, fun prompts included",
      "Placeholder cat lovingly drawn on MS Paint",
    ],
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-black antialiased">
      <ProjectShowcase projects={projects} />
    </main>
  );
}
