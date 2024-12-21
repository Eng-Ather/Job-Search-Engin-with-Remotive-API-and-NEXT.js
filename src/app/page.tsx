import JobList from '@/components/JobList'
import { Job } from '@/types/Job'

async function getJobs(): Promise<Job[]> {
  const res = await fetch('https://remotive.io/api/remote-jobs?category=software-dev')
  if (!res.ok) {
    throw new Error('Failed to fetch jobs')
  }
  const data = await res.json()
  return data.jobs
}

export default async function Home() {
  const jobs = await getJobs()

  return (
    <main className="container  bg-slate-400 mx-auto px-4 py-8">
<h1 className="text-3xl text-white bg-slate-600 border border-blue-400 font-bold px-4 py-8 mb-6 rounded-lg shadow-lg text-center">
  Remote Software Development Jobs
</h1>

      <JobList jobs={jobs} />
    </main>
  )
}

