import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import HomePage from '@/src/component/home/home.container'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <HomePage />
  )
}
