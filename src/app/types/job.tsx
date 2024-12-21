'use client'

import Link from 'next/link'
import { Job } from '@/types/Job'

export default function JobList({ jobs }: { jobs: Job[] }) {
  return (
    <div className=" grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {jobs.map((job) => (
        <Link href={`/job/${job.id}`} key={job.id}>
          <div className="border border-gray-300 rounded-lg p-6 bg-white hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">{job.title}</h2>
            <p className="text-sm text-gray-700 mb-2">{job.company_name}</p>
            <p className="text-sm text-gray-500 mb-4">{job.candidate_required_location}</p>
            <p className="text-xs text-gray-400">{new Date(job.publication_date).toLocaleDateString()}</p>
            <div className="mt-auto">
              <span className="inline-block py-2 px-4 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition duration-300">
                View Job
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
