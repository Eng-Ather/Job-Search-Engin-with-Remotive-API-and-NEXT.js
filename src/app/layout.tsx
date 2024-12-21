import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Remote Software Development Jobs',
  description: 'Find the best remote software development jobs using the Remotive API',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-gray-600"}>{children}</body>
    </html>
  )
}

