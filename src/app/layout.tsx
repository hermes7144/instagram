import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import AuthContext from './context/AuthContext'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={`${openSans.className} w-full max-w-screen-xl overflow-auto mx-auto`}>
        <AuthContext>
          <header className='sticky top-0 bg-white z-10 border-b'>
            <Navbar />
          </header>
          <main className='grow'>{children}</main>
          <Footer/>
        </AuthContext>
      </body>
    </html>
  )
}
