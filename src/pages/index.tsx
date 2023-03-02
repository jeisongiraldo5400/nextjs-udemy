
import { Inter } from 'next/font/google'
import { MainLayout } from '@/layouts/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <MainLayout>
        <h1>Home page</h1>
    </MainLayout>
  )
}
