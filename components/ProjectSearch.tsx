'use client'
import React, { useState } from 'react'
import { Card, CardContent } from './ui/card'
import { Search } from 'lucide-react'
import { Input } from './ui/input'

type SortBy = "newest" | "oldest" | "name";

function ProjectSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortBy>("newest");
  return (
    <div>
        <Card>
            <CardContent className="p-4">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="relative max-w-md flex-1">
                  <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                  <Input
                    placeholder="Search audio projects..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9"
                  />
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortBy)}
                  className="border-input bg-background rounded-md border px-3 py-2 text-sm"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="name">Text A-Z</option>
                </select>
              </div>
            </CardContent>
          </Card>
    </div>
  )
}

export default ProjectSearch