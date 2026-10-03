import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar, Footer } from '@/components/academic/AcademicSite';
import { asset } from '@/lib/assets';

export const metadata: Metadata = {
  title: 'Template credits | Ali Sidar Yilmaz',
  description: 'PRISM template attribution and software licensing information.',
};

export default function CreditsPage() {
  return <><Navbar detail/><main className="container credits-page">
    <span className="eyebrow">WEBSITE CREDITS</span>
    <h1>Template &amp; license</h1>
    <p>This academic website is a customized adaptation of <a href="https://github.com/xyjoey/PRISM">PRISM — Portfolio &amp; Research Interface Site Maker</a>, the open-source academic website template published by <a href="https://github.com/xyjoey">xyjoey</a> and its contributors.</p>
    <p>The PRISM foundation includes its original website components, configuration utilities, and BibTeX parsing workflow. The layout, research content, profile, and deployment setup have been adapted for Ali Sidar Yilmaz.</p>
    <h2>PRISM software license</h2>
    <p>PRISM is distributed under the MIT License. Its original copyright notice, permission notice, and warranty disclaimer are preserved in the repository and included with this website.</p>
    <p className="credits-copyright">Copyright (c) 2025 PRISM</p>
    <a className="text-link" href={asset('/licenses/prism-MIT.txt')}>Read the complete PRISM MIT License</a>
    <h2>Content and other assets</h2>
    <p>The software license for the template does not grant permission to reuse academic content, photographs, research figures, or university logos. These materials retain their respective ownership and permissions. Third-party software dependencies retain their own licenses.</p>
    <div className="credits-back"><Link className="text-link" href="/">Return to the website</Link></div>
  </main><Footer/></>;
}
