'use client'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Filter, Download } from 'lucide-react'
import { useState } from 'react'

export default function Submissions() {
  return (
    <>
      <div className="p-6">
        <h1 className="mb-6 text-2xl font-bold">Submissions</h1>

        <div className="mb-4 flex items-center justify-between">
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="border-[#0891b2] bg-white text-[#0891b2]"
            >
              All
            </Button>
            <Button variant="ghost" size="sm">
              Pending
            </Button>
            <Button variant="ghost" size="sm">
              Graded
            </Button>
            <Button variant="ghost" size="sm">
              Drafts
            </Button>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Download className="h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border bg-white">
          <div className="grid grid-cols-12 gap-4 border-b bg-gray-50 p-4 text-sm font-medium">
            <div className="col-span-4">Worksheet</div>
            <div className="col-span-2">Course</div>
            <div className="col-span-2">Submitted</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-2">Actions</div>
          </div>

          {[
            {
              name: 'Market Analysis Worksheet',
              course: 'Business Intelligence',
              status: 'Graded',
              score: '92%',
            },
            {
              name: 'Customer Segmentation Form',
              course: 'Data Analysis',
              status: 'Pending',
              score: '',
            },
            {
              name: 'SWOT Analysis Template',
              course: 'Business Strategy',
              status: 'Graded',
              score: '85%',
            },
            {
              name: 'Competitive Analysis Framework',
              course: 'Market Research',
              status: 'Draft',
              score: '',
            },
            {
              name: 'Financial Projection Worksheet',
              course: 'Business Planning',
              status: 'Pending',
              score: '',
            },
          ].map((submission, i) => (
            <div key={i} className="grid grid-cols-12 items-center gap-4 border-b p-4 text-sm">
              <div className="col-span-4 font-medium">{submission.name}</div>
              <div className="col-span-2 text-gray-600">{submission.course}</div>
              <div className="col-span-2 text-gray-600">
                {i === 3 ? '—' : `${i + 1} day${i > 0 ? 's' : ''} ago`}
              </div>
              <div className="col-span-2">
                {submission.status === 'Graded' && (
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                    {submission.status} • {submission.score}
                  </Badge>
                )}
                {submission.status === 'Pending' && (
                  <Badge
                    variant="outline"
                    className="bg-yellow-50 text-yellow-600 hover:bg-yellow-50"
                  >
                    {submission.status}
                  </Badge>
                )}
                {submission.status === 'Draft' && (
                  <Badge variant="outline" className="bg-gray-50 text-gray-600 hover:bg-gray-50">
                    {submission.status}
                  </Badge>
                )}
              </div>
              <div className="col-span-2 flex gap-2">
                <Button variant="outline" size="sm">
                  View
                </Button>
                {submission.status === 'Draft' && (
                  <Button size="sm" className="bg-[#0891b2] hover:bg-[#0891b2]/90">
                    Edit
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
