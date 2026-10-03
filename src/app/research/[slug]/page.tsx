import Link from 'next/link';
import { notFound } from 'next/navigation';
import { research,projects,ongoing } from '@/data/site';
import { Navbar,Footer,PublicationCard } from '@/components/academic/AcademicSite';
import Media from '@/components/academic/Media';
import { parseBibTeX } from '@/lib/bibtexParser';
import { getBibtexContent } from '@/lib/content';
export function generateStaticParams(){return research.map(r=>({slug:r.slug}));}
export async function generateMetadata({params}: {params:Promise<{slug:string}>}){const {slug}=await params;const r=research.find(r=>r.slug===slug);return {title:r?`${r.title} | Ali Sidar Yilmaz`:'Research',description:r?.summary};}
export default async function ResearchPage({params}: {params:Promise<{slug:string}>}){const {slug}=await params;const r=research.find(r=>r.slug===slug);if(!r)notFound();const pubs=slug==='fully-actuated'?parseBibTeX(getBibtexContent('publications.bib')):[];return <><Navbar detail/><main id="about" className="container detail-page"><Link className="text-link" href="/#research">All research</Link><span className="eyebrow">AERIAL ROBOTICS / RESEARCH</span><h1>{r.title}</h1><p className="detail-lead">{r.summary}</p><Media title={r.title} image={r.image} video={r.video} kind={r.kind}/><h2>Research overview</h2><p>{r.technical}</p><div className="tags">{r.tags.map(t=><span key={t}>{t}</span>)}</div>{pubs.length>0&&<><h2>Related publication</h2>{pubs.map(p=><PublicationCard key={p.id} pub={p}/>)}</>}{projects.filter(p=>p.slug===slug).length>0&&<><h2>Related platforms</h2>{projects.filter(p=>p.slug===slug).map(p=><article className="ongoing-card" key={p.title}><h3>{p.title}</h3><p>{p.summary}</p></article>)}</>}{(slug==='physical-interaction'||slug==='wrench-estimation')&&<><h2>Related research topic</h2><p>{ongoing[slug==='physical-interaction'?1:0].summary}</p></>}</main><Footer/></>;}
