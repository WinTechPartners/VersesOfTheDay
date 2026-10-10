import {ExternalLink} from 'lucide-react';
import {providerGuides} from '@/lib/provider-guides';

export default function ProviderGuide({id}:{id:string}) {
 const guide=providerGuides[id];
 if(!guide)return null;
 const link=(url:string,label:string)=><a className="text-link" href={url} target="_blank" rel="noreferrer">{label}<ExternalLink size={14}/></a>;
 return <div className="provider-guide">
  <div className="guide-focus"><span className="small-caps">AT A GLANCE</span><p>{guide.focus}</p></div>
  <nav className="guide-jumps" aria-label="Provider guide sections">{[['background','Who they are'],['offerings','What they offer'],['fit','Who it suits'],['access','Free & paid'],['start','Getting started']].map(([anchor,label])=><a key={anchor} href={`#guide-${anchor}`}>{label}</a>)}</nav>
  <section id="guide-background"><span className="eyebrow">THE PEOPLE & PURPOSE</span><h2>Who they are</h2><p>{guide.background}</p>{link(guide.backgroundUrl,'About the provider')}</section>
  <section id="guide-offerings"><span className="eyebrow">BEYOND THE DAILY VERSE</span><h2>What you can do there</h2><div className="guide-offerings">{guide.offerings.map((item,i)=><div className="guide-tool" key={item.title}><span className="guide-number">0{i+1}</span><h3>{item.title}</h3><p>{item.detail}</p>{link(item.url,'Explore this offering')}</div>)}</div></section>
  <section className="guide-distinctive"><span className="eyebrow">WHAT STANDS OUT</span><h2>Why you might choose them</h2><p>{guide.distinctive}</p></section>
  <section id="guide-fit"><span className="eyebrow">FIND YOUR FIT</span><h2>Who may find it useful</h2><p className="guide-note">Our assessment, based on the offerings above.</p><div className="guide-audiences">{guide.audiences.map(item=><div key={item.title}><h3>{item.title}</h3><p>{item.detail}</p></div>)}</div></section>
  <section id="guide-access"><span className="eyebrow">BEFORE YOU BEGIN</span><h2>Free access, accounts & paid resources</h2><p>{guide.access}</p>{link(guide.accessUrl,'Check current access details')}</section>
  <section id="guide-start"><span className="eyebrow">A PRACTICAL FIRST VISIT</span><h2>Where to start</h2><ol className="guide-steps">{guide.start.map(step=><li key={step}>{step}</li>)}</ol></section>
  <p className="guide-checked">Provider information checked October 10, 2026. Links above lead to official provider pages. Features and access can change.</p>
 </div>;
}
