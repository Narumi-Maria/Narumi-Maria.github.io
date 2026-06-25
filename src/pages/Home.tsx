import { useEffect, useRef, type ReactNode } from "react";
import { ArrowUpRight, BriefcaseBusiness, Github, GraduationCap, Mail, MapPin, Phone } from "lucide-react";
import moonImage from "@/assets/moon.png";
import { education, experiences, profile, publications, type Publication } from "@/data/profile";

const navItems = [
  { href: "#overview", label: "Overview" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Internship" },
  { href: "#research", label: "Research" },
];

function CyberJellyfishBackground() {
  return (
    <div className="cyber-bg" aria-hidden="true">
      <div className="moon-crop">
        <img className="moon-bg-image" src={moonImage} alt="" />
      </div>
      <video
        className="jellyfish-bg-video"
        src="/pics/jellyfish_3s.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    </div>
  );
}

type JellyParticle = {
  x: number;
  y: number;
  anchorX: number;
  anchorY: number;
  driftX: number;
  driftY: number;
  orbitX: number;
  orbitY: number;
  angularSpeed: number;
  size: number;
  hue: number;
  alpha: number;
  phase: number;
};

function JellyfishParticleField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return;

    const particles: JellyParticle[] = [];
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const maxParticles = prefersReducedMotion ? 42 : Math.min(180, Math.max(96, Math.floor(window.innerWidth / 8)));
    const frameInterval = 1000 / 30;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let animationId = 0;
    let lastFrame = 0;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const resetParticle = (particle: JellyParticle, randomPosition = false) => {
      particle.anchorX = randomPosition ? Math.random() * width : Math.random() * width;
      particle.anchorY = randomPosition ? Math.random() * height : Math.random() * height;
      particle.driftX = (Math.random() - 0.5) * 0.16;
      particle.driftY = (Math.random() - 0.5) * 0.08;
      particle.orbitX = 10 + Math.random() * 28;
      particle.orbitY = 4 + Math.random() * 13;
      particle.angularSpeed = (Math.random() > 0.5 ? 1 : -1) * (0.012 + Math.random() * 0.018);
      particle.size = 0.8 + Math.random() * 1.45;
      particle.hue = Math.random() > 0.4 ? 305 : 198;
      particle.alpha = 0.18 + Math.random() * 0.34;
      particle.phase = Math.random() * Math.PI * 2;
      particle.x = particle.anchorX + Math.cos(particle.phase) * particle.orbitX;
      particle.y = particle.anchorY + Math.sin(particle.phase) * particle.orbitY;
    };

    resize();
    for (let index = 0; index < maxParticles; index += 1) {
      const particle = {} as JellyParticle;
      resetParticle(particle, true);
      particles.push(particle);
    }

    const draw = (timestamp: number) => {
      animationId = window.requestAnimationFrame(draw);
      if (timestamp - lastFrame < frameInterval) return;
      lastFrame = timestamp;

      context.clearRect(0, 0, width, height);
      context.globalCompositeOperation = "lighter";

      for (const particle of particles) {
        particle.phase += particle.angularSpeed;
        particle.anchorX += particle.driftX;
        particle.anchorY += particle.driftY;

        if (particle.anchorY < -24) particle.anchorY = height + 24;
        if (particle.anchorY > height + 24) particle.anchorY = -24;
        if (particle.anchorX < -24) particle.anchorX = width + 24;
        if (particle.anchorX > width + 24) particle.anchorX = -24;

        particle.x = particle.anchorX + Math.cos(particle.phase) * particle.orbitX;
        particle.y = particle.anchorY + Math.sin(particle.phase * 1.35) * particle.orbitY;

        const twinkle = 0.65 + Math.sin(particle.phase * 1.7) * 0.35;
        const alpha = particle.alpha * twinkle;

        context.fillStyle = `hsla(${particle.hue}, 100%, 72%, ${alpha * 0.2})`;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.size * 3.2, 0, Math.PI * 2);
        context.fill();

        context.fillStyle = `hsla(${particle.hue}, 100%, 88%, ${alpha})`;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fill();
      }
    };

    animationId = window.requestAnimationFrame(draw);
    window.addEventListener("resize", resize);

    return () => {
      window.cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas className="jelly-particles" ref={canvasRef} aria-hidden="true" />;
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="section-block">
      <div className="section-heading">
        <span>{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}

function NavRail() {
  return (
    <nav className="nav-rail" aria-label="Section navigation">
      {navItems.map((item) => (
        <a key={item.href} href={item.href}>
          {item.label}
        </a>
      ))}
    </nav>
  );
}

function Hero() {
  return (
    <header id="overview" className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-content">
        <h1>{profile.name}</h1>
        <div className="hero-title">
          {profile.titleLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </div>
        <div className="keyword-row">
          {profile.keywords.map((keyword) => (
            <span key={keyword}>{keyword}</span>
          ))}
        </div>
      </div>
      <aside className="profile-card" aria-label="Profile links">
        <img src={profile.avatar} alt="Qingyang Liu" className="avatar-image" />
        <div className="profile-links">
          <span>
            <Mail size={18} />
            {profile.email}
          </span>
          <span>
            <Phone size={18} />
            {profile.phone}
          </span>
          <a href={profile.github} target="_blank" rel="noreferrer">
            <Github size={18} />
            GitHub
          </a>
        </div>
      </aside>
    </header>
  );
}

function EducationTimeline() {
  return (
    <div className="timeline compact">
      {education.map((item) => (
        <article className="timeline-card" key={item.school}>
          <div className="timeline-icon">
            <GraduationCap size={20} />
          </div>
          <div>
            <h3>{item.school}</h3>
            <p className="muted italic">{item.degree}</p>
            <ul>
              {item.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}

function ExperienceTimeline() {
  return (
    <div className="timeline">
      {experiences.map((item) => (
        <article className="timeline-card" key={`${item.organization}-${item.time}`}>
          <div className="timeline-icon">
            <BriefcaseBusiness size={20} />
          </div>
          <div className="card-main">
            <div className="card-topline">
              <div>
                <h3>{item.organization}</h3>
                <p className="muted italic">{item.team}</p>
              </div>
              <div className="meta-stack">
                <span>{item.time}</span>
                <span>
                  <MapPin size={14} />
                  {item.location}
                </span>
              </div>
            </div>
            <ul>
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}

function PublicationLink({ publication }: { publication: Publication }) {
  if (!publication.link.url) {
    return <span className="paper-link pending">Paper Link</span>;
  }

  return (
    <a className={`paper-link ${publication.link.status}`} href={publication.link.url} target="_blank" rel="noreferrer">
      Paper Link
      <ArrowUpRight size={15} />
    </a>
  );
}

function PublicationList() {
  return (
    <div className="publication-list">
      {publications.map((paper, index) => (
        <article className="paper-card" key={paper.title}>
          <div className="paper-index">{String(index + 1).padStart(2, "0")}</div>
          <div className="paper-body">
            <h3>{paper.title}</h3>
            <p>{paper.summary}</p>
            <div className="paper-actions">
              <span>{paper.venue}</span>
              <span>{paper.role}</span>
              <PublicationLink publication={paper} />
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <CyberJellyfishBackground />
      <JellyfishParticleField />
      <main className="page-shell">
        <NavRail />
        <div className="mobile-nav" aria-label="Mobile section navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <Hero />
        <Section id="education" eyebrow="01" title="Education">
          <EducationTimeline />
        </Section>
        <Section id="experience" eyebrow="02" title="Internship Experience">
          <ExperienceTimeline />
        </Section>
        <Section id="research" eyebrow="03" title="Research">
          <PublicationList />
        </Section>
        <footer className="site-footer">
          <span>Qingyang Liu</span>
          <span>{profile.email}</span>
          <span>Updated from cv.md</span>
        </footer>
      </main>
    </>
  );
}
