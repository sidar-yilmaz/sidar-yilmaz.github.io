import AcademicSite from '@/components/academic/AcademicSite';
import { getBibtexContent } from '@/lib/content';
import { parseBibTeX } from '@/lib/bibtexParser';
export default function Home() { return <AcademicSite publications={parseBibTeX(getBibtexContent('publications.bib'))} />; }