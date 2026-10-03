import type { Metadata } from 'next';
import './globals.css';
import { profile } from '@/data/site';
import { asset } from '@/lib/assets';
export const metadata: Metadata = { title: 'Ali Sidar Yilmaz | Aerial Robotics', description: profile.statement, icons: { icon: asset('/favicon.svg') }, openGraph: { title: 'Ali Sidar Yilmaz | Aerial Robotics', description: profile.statement, type: 'website' }, ...(profile.canonical.startsWith('https://') ? {alternates:{canonical:profile.canonical}} : {}) };
export default function RootLayout({children}: {children: React.ReactNode}) { return <html lang="en" className="dark" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{__html:"try{document.documentElement.classList.toggle('dark',localStorage.getItem('academic-theme')!=='light')}catch{}"}}/></head><body>{children}</body></html>; }
