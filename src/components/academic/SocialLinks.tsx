import { Github, Linkedin, Mail, MailOpen } from 'lucide-react';
import { profile } from '@/data/site';
import { validLink } from '@/lib/assets';

export default function SocialLinks() {
  return <div className="socials social-icons">
    {profile.socials.filter(s => validLink(s.url)).map(s => {
      const label = s.url.startsWith('mailto:') ? `${s.label}: ${s.url.slice(7)}` : s.label;
      return <a key={s.label} href={s.url} aria-label={label} title={label}>
        {s.label === 'Google Scholar' ?
          <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/></svg> :
          s.label === 'LinkedIn' ? <Linkedin aria-hidden="true"/> :
          s.label === 'GitHub' ? <Github aria-hidden="true"/> :
          s.label === 'Personal email' ? <MailOpen aria-hidden="true"/> : <Mail aria-hidden="true"/>}
      </a>;
    })}
  </div>;
}
