import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownToLine,
  ArrowRight,
  Bot,
  Braces,
  BrainCircuit,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  Github,
  GraduationCap,
  Linkedin,
  LockKeyhole,
  Mail,
  Map,
  Menu,
  Send,
  Sparkles,
  TestTube2,
  Users,
  X,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import profileAsset from "@/assets/fulufhelo-matshaya-profile.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fulufhelo Matshaya | Software Developer" },
      { name: "description", content: "Portfolio of Fulufhelo Matshaya — qualified Urban & Regional Planner and Software Developer focused on AI, automation testing and cybersecurity." },
      { property: "og:title", content: "Fulufhelo Matshaya | Software Developer" },
      { property: "og:description", content: "A multidisciplinary portfolio connecting planning, people and technology." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const links = {
  github: "https://github.com/Matshayafulu",
  linkedin: "https://www.linkedin.com/in/fulufhelo-matshaya-232b14214",
  email: "mailto:Matshayafulufhelo@gmail.com",
};

const projects = [
  { title: "Admin Management System", type: "Full-stack application", description: "An administrative platform built around secure authentication, data management and complete CRUD workflows.", tech: ["React", "C# / .NET", "SQL Server", "REST API", "JWT"], icon: Database },
  { title: "ATM System", type: "Application logic", description: "A C# application exploring object-oriented programming, transaction workflows and reliable business logic.", tech: ["C#", "OOP", "Workflows"], icon: Braces },
  { title: "Flight Management System", type: "System design", description: "A structured application focused on data management, application logic and thoughtful system design.", tech: ["C#", "Data", "System Design"], icon: Code2 },
  { title: "Noble Tech Solutions", type: "Full-stack development", description: "A practical web project connecting a responsive React interface to a REST API.", tech: ["React", "REST API", "Full-stack"], icon: Sparkles },
];

const skillGroups = [
  ["Programming", "C# · JavaScript · SQL · HTML · CSS"],
  ["Development", "React · Vite · .NET · Entity Framework Core"],
  ["Data & APIs", "SQL Server · REST APIs · Fetch API · JWT · CRUD"],
  ["Planning, GIS & Data", "GIS · AutoCAD · SketchUp · IBM Statistics & Data Analysis · Urban & Regional Planning · Data Analysis · Spatial Analysis"],
  ["Tools", "Git · GitHub · Visual Studio · VS Code"],
  ["Professional", "Customer service · Communication · Problem solving · Analytical thinking · Leadership · Teamwork · Project management"],
];

const certifications = [
  { title: "Google AI Essentials", issuer: "Google", items: ["Introduction to AI", "Maximize Productivity With AI Tools", "Discover the Art of Prompting", "Use AI Responsibly", "Stay Ahead of the AI Curve"] },
  { title: "Google Project Management Certificate", issuer: "Coursera", items: [] },
];

const journey = ["2016 — Matric, Thengwe High School", "University of Venda — Urban & Regional Planning", "2019–2021 — Speaker of the Parliament, University of Venda", "Customer Service Experience", "Self-taught Software Development", "Full-stack Development", "AI & Technology Learning", "Automation Testing / Selenium", "Future — Cybersecurity + Automation + AI"];


function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  const submitContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(String(data.get("subject") || "Portfolio enquiry"));
    const body = encodeURIComponent(`Hi Fulufhelo,\n\n${String(data.get("message") || "")}\n\nFrom: ${String(data.get("name") || "")} (${String(data.get("email") || "")})`);
    window.location.href = `${links.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:px-8">
          <a href="#home" className="font-display text-lg font-extrabold">FM<span className="text-primary">.</span></a>
          <nav aria-label="Main navigation" className="hidden items-center gap-7 md:flex">
            {["About", "Projects", "Skills", "Journey", "Education", "Contact"].map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">{item}</a>)}
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
        </div>
        {menuOpen && <nav className="border-t border-border bg-background px-5 py-4 md:hidden">{["About", "Projects", "Skills", "Journey", "Education", "Contact"].map((item) => <a onClick={() => setMenuOpen(false)} key={item} href={`#${item.toLowerCase()}`} className="block py-2 text-sm font-medium">{item}</a>)}</nav>}
      </header>

      <main>
        <section id="home" className="relative min-h-[92vh] pt-24">
          <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(var(--color-border)_1px,transparent_1px),linear-gradient(90deg,var(--color-border)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-12 md:grid-cols-[1.15fr_0.85fr] md:py-20 lg:px-8">
            <div className="reveal">
              <div className="mb-6 inline-flex items-center gap-2 border border-primary/25 bg-primary/5 px-3 py-1.5 text-xs font-bold uppercase text-primary"><span className="h-2 w-2 animate-pulse rounded-full bg-primary" /> Open to opportunities</div>
              <p className="mb-3 font-mono text-sm font-semibold text-primary">Hello, I’m</p>
              <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl">Fulufhelo<br /><span className="text-primary">Matshaya.</span></h1>
              <p className="mt-6 text-xl font-semibold text-foreground sm:text-2xl">Qualified Urban & Regional Planner <span className="text-muted-foreground">|</span> Software Developer</p>
              <p className="mt-3 font-mono text-sm font-semibold text-secondary-foreground">AI&nbsp; • &nbsp;Automation Testing&nbsp; • &nbsp;Cybersecurity</p>
              <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground">Building practical technology solutions while combining analytical thinking, customer experience and continuous technical learning.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg"><a href="#projects">View Projects <ArrowRight /></a></Button>
                <Button asChild size="lg" variant="outline"><a href={links.email} title="Request Fulufhelo’s CV by email"><ArrowDownToLine /> Download CV</a></Button>
              </div>
              <div className="mt-8 flex gap-3">
                <Button asChild variant="ghost" size="icon"><a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a></Button>
                <Button asChild variant="ghost" size="icon"><a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a></Button>
                <Button asChild variant="ghost" size="icon"><a href={links.email} aria-label="Email"><Mail /></a></Button>
              </div>
            </div>
            <div className="reveal relative mx-auto w-full max-w-sm md:ml-auto">
              <div className="absolute -inset-4 translate-x-3 translate-y-3 border-2 border-primary/30" />
              <div className="relative aspect-[4/5] overflow-hidden border border-border bg-card shadow-2xl">
                <img src={profileAsset.url} alt="Fulufhelo Matshaya" className="h-full w-full object-cover object-top" />
                <div className="absolute inset-x-0 bottom-0 bg-foreground/90 p-4 text-background backdrop-blur-sm"><p className="font-mono text-xs">// planning + people + technology</p></div>
              </div>
              <div className="absolute -bottom-6 -left-6 border border-border bg-card px-4 py-3 shadow-lg"><p className="text-xs font-semibold text-muted-foreground">BASED IN</p><p className="font-display font-bold">South Africa</p></div>
            </div>
          </div>
        </section>

        <section id="about" className="border-y border-border bg-card py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
            <div><p className="font-mono text-sm font-bold text-primary">01 / ABOUT</p><h2 className="mt-4 text-4xl font-extrabold">Different paths.<br />One powerful perspective.</h2></div>
            <div><p className="text-xl leading-8">My journey began in Urban & Regional Planning, developed through customer service, and grew into software development.</p><p className="mt-5 leading-7 text-muted-foreground">That combination gives me a unique way of approaching technology: understanding systems, asking the right questions, communicating clearly and building practical solutions. I have hands-on development experience with C#, SQL, React, HTML, CSS, .NET and REST APIs.</p>
              <div className="mt-8 flex flex-wrap gap-2">{["Analytical thinking", "Systems thinking", "Problem solving", "Customer communication", "Process awareness", "Research", "Data-oriented thinking", "Adaptability", "Continuous learning"].map((item) => <span key={item} className="border border-border bg-muted px-3 py-1.5 text-sm font-medium">{item}</span>)}</div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-6xl px-5 lg:px-8"><p className="font-mono text-sm font-bold text-primary">02 / PROFESSIONAL EXPERIENCE</p><h2 className="mt-3 text-4xl font-extrabold">A multidisciplinary foundation</h2>
            <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
              {[[Map, "Urban & Regional Planning", "Analytical, planning, research, systems and data-oriented foundation."], [Users, "Customer Service", "Clear communication, problem solving, process adherence and calm under pressure."], [Code2, "Technology", "Self-directed software development, practical applications and continued technical learning."]].map(([Icon, title, copy]) => { const ItemIcon = Icon as typeof Map; return <article key={String(title)} className="bg-background p-7"><ItemIcon className="h-7 w-7 text-primary" /><h3 className="mt-5 text-xl font-bold">{String(title)}</h3><p className="mt-3 leading-7 text-muted-foreground">{String(copy)}</p></article>; })}
            </div>
          </div>
        </section>

        <section id="projects" className="bg-foreground py-24 text-background">
          <div className="mx-auto max-w-6xl px-5 lg:px-8"><div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="font-mono text-sm font-bold text-accent">03 / SELECTED PROJECTS</p><h2 className="mt-3 text-4xl font-extrabold">Things I’ve built</h2></div><p className="max-w-md text-sm leading-6 text-background/65">Practical work across full-stack development, business logic, APIs and data management.</p></div>
            <div className="mt-12 grid gap-5 md:grid-cols-2">{projects.map(({ title, type, description, tech, icon: Icon }, index) => <article key={title} className="group border border-background/15 bg-background/5 p-7 transition-colors hover:border-primary"><div className="flex items-center justify-between"><Icon className="h-7 w-7 text-accent" /><span className="font-mono text-xs text-background/50">0{index + 1}</span></div><p className="mt-8 text-xs font-bold uppercase text-accent">{type}</p><h3 className="mt-2 text-2xl font-bold">{title}</h3><p className="mt-3 leading-7 text-background/65">{description}</p><div className="mt-6 flex flex-wrap gap-2">{tech.map(t => <span key={t} className="border border-background/15 px-2.5 py-1 font-mono text-xs">{t}</span>)}</div></article>)}</div>
            <div className="mt-5 border border-dashed border-background/25 p-6"><div className="flex items-center gap-3"><Bot className="text-accent" /><div><h3 className="font-bold">Learning / Experimental Projects</h3><p className="mt-1 text-sm text-background/60">Future explorations in AI, Selenium, automation testing and cybersecurity.</p></div></div></div>
          </div>
        </section>

        <section id="skills" className="py-24"><div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8"><div><p className="font-mono text-sm font-bold text-primary">04 / SKILLS</p><h2 className="mt-3 text-4xl font-extrabold">Tools for thoughtful problem solving</h2><p className="mt-5 leading-7 text-muted-foreground">An established technical toolkit supported by communication, curiosity and systems thinking.</p></div><div className="divide-y divide-border border-y border-border">{skillGroups.map(([title, skills]) => <div key={title} className="grid gap-2 py-5 sm:grid-cols-[9rem_1fr]"><h3 className="font-bold text-primary">{title}</h3><p className="text-muted-foreground">{skills}</p></div>)}</div></div></section>

        <section id="journey" className="border-y border-border bg-card py-24"><div className="mx-auto max-w-6xl px-5 lg:px-8"><p className="font-mono text-sm font-bold text-primary">05 / CAREER JOURNEY</p><h2 className="mt-3 text-4xl font-extrabold">Progress with purpose</h2><div className="mt-12 grid gap-0 md:grid-cols-4">{journey.map((step, index) => <div key={step} className="relative border-l-2 border-primary/30 pb-8 pl-6 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pr-6 md:pt-7"><span className="absolute -left-[7px] top-0 h-3 w-3 rounded-full bg-primary md:-top-[7px] md:left-0" /><p className="text-sm font-semibold leading-6">{step}</p>{index < journey.length - 1 && <ArrowRight className="mt-4 hidden h-4 w-4 text-muted-foreground md:block" />}</div>)}</div></div></section>

        <section id="education" className="py-24"><div className="mx-auto max-w-6xl px-5 lg:px-8"><div className="grid gap-12 lg:grid-cols-2"><div><p className="font-mono text-sm font-bold text-primary">06 / EDUCATION</p><h2 className="mt-3 text-4xl font-extrabold">Learning foundations</h2></div><div className="space-y-8"><article className="border-l-4 border-primary pl-6"><GraduationCap className="text-primary" /><h3 className="mt-4 text-xl font-bold">University of Venda</h3><p className="mt-1 font-semibold">Urban & Regional Planning</p><p className="mt-3 text-sm leading-6 text-muted-foreground">Environmental Resource Management · Environmental Law · Transport Planning · Energy Planning</p></article><article className="border-l-4 border-secondary pl-6"><GraduationCap className="text-secondary-foreground" /><h3 className="mt-4 text-xl font-bold">Thengwe High School</h3><p className="mt-1 text-muted-foreground">Matric — 2016</p></article></div></div></div></section>

        <section id="certifications" className="border-y border-border bg-card py-24"><div className="mx-auto max-w-6xl px-5 lg:px-8"><p className="font-mono text-sm font-bold text-primary">07 / CERTIFICATIONS &amp; DEVELOPMENT</p><h2 className="mt-3 text-4xl font-extrabold">Certified, curious, always growing</h2><div className="mt-10 grid gap-5 md:grid-cols-2">{certifications.map(({ title, issuer, items }) => <article key={title} className="border border-border bg-background p-7 transition-shadow hover:shadow-[0_0_0_1px_var(--color-primary)]"><span className="text-xs font-bold uppercase text-muted-foreground">{issuer}</span><h3 className="mt-1 text-xl font-bold">{title}</h3>{items.length > 0 && <ul className="mt-5 space-y-2">{items.map((item) => <li key={item} className="flex items-start gap-2 text-sm leading-6 text-muted-foreground"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{item}</li>)}</ul>}</article>)}
            <article className="border border-border bg-background p-7 md:col-span-2"><span className="text-xs font-bold uppercase text-muted-foreground">Leadership · University of Venda</span><h3 className="mt-1 text-xl font-bold">Speaker of the Parliament — 2019–2021</h3><p className="mt-3 leading-7 text-muted-foreground">Leadership, communication, public speaking and stakeholder-engagement experience gained by chairing student parliament proceedings.</p></article></div></div></section>

        <section className="bg-secondary/40 py-24"><div className="mx-auto max-w-6xl px-5 lg:px-8"><p className="font-mono text-sm font-bold text-primary">08 / CURRENTLY LEARNING</p><h2 className="mt-3 text-4xl font-extrabold">Always in beta</h2><p className="mt-4 max-w-xl text-muted-foreground">These are active learning areas — explored with curiosity, consistency and practical experimentation.</p><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[[BrainCircuit, "AI"], [TestTube2, "Automation Testing", "Selenium"], [LockKeyhole, "Cybersecurity"], [Cloud, "Cloud Technology"]].map(([Icon, title, note]) => { const ItemIcon = Icon as typeof BrainCircuit; return <article key={String(title)} className="border border-border bg-background p-6"><ItemIcon className="h-7 w-7 text-primary" /><span className="mt-8 block text-xs font-bold uppercase text-muted-foreground">Learning area</span><h3 className="mt-1 text-lg font-bold">{String(title)}</h3>{note && <p className="mt-1 text-sm text-muted-foreground">{String(note)}</p>}</article>; })}</div></div></section>


        <section id="contact" className="py-24"><div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8"><div><p className="font-mono text-sm font-bold text-primary">08 / CONTACT</p><h2 className="mt-3 text-5xl font-extrabold">Let’s build something.</h2><p className="mt-5 max-w-md leading-7 text-muted-foreground">Have an opportunity, collaboration or idea in mind? I’d love to hear about it.</p><div className="mt-8 space-y-3"><a className="flex items-center gap-3 font-semibold hover:text-primary" href={links.email}><Mail className="h-5 w-5" /> matshayafulhelo@gmail.com</a><a className="flex items-center gap-3 font-semibold hover:text-primary" href={links.linkedin} target="_blank" rel="noreferrer"><Linkedin className="h-5 w-5" /> LinkedIn</a><a className="flex items-center gap-3 font-semibold hover:text-primary" href={links.github} target="_blank" rel="noreferrer"><Github className="h-5 w-5" /> GitHub</a></div></div>
            <form onSubmit={submitContact} className="grid gap-5" aria-label="Contact form"><div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-semibold">Name<input name="name" required className="mt-2 h-11 w-full border border-input bg-background px-3 font-normal outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" /></label><label className="text-sm font-semibold">Email<input name="email" type="email" required className="mt-2 h-11 w-full border border-input bg-background px-3 font-normal outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" /></label></div><label className="text-sm font-semibold">Subject<input name="subject" required className="mt-2 h-11 w-full border border-input bg-background px-3 font-normal outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" /></label><label className="text-sm font-semibold">Message<textarea name="message" rows={5} required className="mt-2 w-full resize-none border border-input bg-background p-3 font-normal outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" /></label><Button type="submit" size="lg" className="w-fit">Send Message <Send /></Button></form>
          </div></section>
      </main>

      <footer className="border-t border-border bg-foreground py-10 text-background"><div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 sm:flex-row sm:items-center sm:justify-between lg:px-8"><div><p className="font-display font-bold">Fulufhelo Matshaya<span className="text-accent">.</span></p><p className="mt-1 text-xs text-background/60">© 2026 Fulufhelo Matshaya. All rights reserved.</p></div><p className="text-sm text-background/60">Built with curiosity, code and continuous learning.</p><div className="flex gap-3"><a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github className="h-5 w-5" /></a><a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a><a href={links.email} aria-label="Email"><Mail className="h-5 w-5" /></a></div></div></footer>
    </div>
  );
}
