import './globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import Navbar from './components/Navbar';
import AuthContext from './context/AuthContext';
import SWRConfigContext from './context/SWRConfigContext';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={`${openSans.className}`}>
      <body className={`w-full max-w-screen-xl overflow-auto mx-auto`}>
          <div id='portal'></div>
          <AuthContext>
            <header className='sticky top-0 bg-white z-10 border-b'>
              <Navbar />
            </header>
            <main className="w-full flex justify-center bg-neutral-50 min-h-[calc(100%-71px)]">
            <SWRConfigContext>{children}</SWRConfigContext>
            </main>
          </AuthContext>
      </body>
    </html>
  );
}

