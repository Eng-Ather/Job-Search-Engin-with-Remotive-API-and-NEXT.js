'use client'

import Link from 'next/link'
import { Job } from '@/types/Job'

export default function JobList({ jobs }: { jobs: Job[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {jobs.map((job) => (
        <Link href={`/job/${job.id}`} key={job.id}>
          <div className="bg-white border border-gray-300 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300 h-full">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{job.title}</h2>
            <p className="text-lg text-gray-600 mb-2">{job.company_name}</p>
            <p className="text-sm text-gray-500 mb-2">{job.candidate_required_location}</p>
            <p className="text-sm text-gray-400">{new Date(job.publication_date).toLocaleDateString()}</p>

            {/* Optional: Add a "view details" button */}
            <div className="mt-4 flex justify-between items-center">
              <span className="text-sm text-blue-500 hover:underline">View Details</span>
              <span className="text-sm text-gray-500">{job.job_type}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
