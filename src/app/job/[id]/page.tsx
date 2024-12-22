import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Job } from '@/types/Job'

async function getJob(id: string): Promise<Job | null> {
  const res = await fetch('https://remotive.io/api/remote-jobs?category=software-dev')
  if (!res.ok) {
    throw new Error('Failed to fetch jobs')
  }
  const data = await res.json()
  return data.jobs.find((job: Job) => job.id.toString() === id) || null
}

export default async function JobPage({ params }: { params: { id: string } }) {
  const job = await getJob(params.id)

  if (!job) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="text-white hover:underline mb-4 inline-block">
        &larr; Back to all jobs
      </Link>
      <div className="bg-white shadow-md rounded-lg p-6 mt-4">
        <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
        <p className="text-xl mb-2">{job.company_name}</p>
        <p className="text-lg mb-2">{job.candidate_required_location}</p>
        <p className="text-sm text-gray-500 mb-4">Posted on: {new Date(job.publication_date).toLocaleDateString()}</p>
        <p className="text-lg mb-2">Job Type: {job.job_type}</p>
        {job.salary && <p className="text-lg mb-4">Salary: {job.salary}</p>}
        
        <h2 className="text-2xl font-semibold mb-2">Job Description</h2>
        <div className="mb-6 prose max-w-none" dangerouslySetInnerHTML={{ __html: job.description }}></div>
        
        <a 
          href={job.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 inline-block"
        >
          Apply on Remotive
        </a>
      </div>
    </div>
  )
}

