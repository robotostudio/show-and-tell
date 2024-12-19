'use client'

import { cn } from "@/lib/utils"

interface HandwrittenNotesProps {
  notes: string[]
  className?: string
}

export function HandwrittenNotes({ notes, className }: HandwrittenNotesProps) {
  return (
    <div 
      className={cn(
        "text-xl space-y-4 text-muted-foreground",
        className
      )}
    >
      {notes.map((note, index) => (
        <div 
          key={index}
          className="flex items-start gap-2"
        >
          <span className="text-primary">→</span>
          <p>{note}</p>
        </div>
      ))}
    </div>
  )
}

