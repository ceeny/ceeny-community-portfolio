import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Command,
  Gauge,
  Layers3,
  MessageCircle,
  Radio,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

const services = [
  "Community moderation",
  "Customer support",
  "Onboarding flows",
  "Content & updates",
  "Crisis response",
  "Community analytics",
  "Operations",
];

const principles = [
  {
    number: "01",
    title: "Keep the room clear",
    description:
      "I turn noisy, fast-moving channels into places where members can actually find answers, context, and confidence.",
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "Make support feel human",
    description:
      "Calm responses, useful escalation, and clear follow-through — especially when a product moment gets complicated.",
    icon: MessageCircle,
  },
  {
    number: "03",
    title: "Close the feedback loop",
    description:
      "I spot patterns in questions and sentiment, then turn what the community is saying into better team decisions.",
    icon: Workflow,
  },
];

const timeline = [
  {
    year: "JAN 2023 — DEC 2025",
    company: "Metis",
    role: "Community Manager",
    label: "AI-aligned · human-defined",
    description:
      "Supported the public-facing community around an AI-aligned Web3 ecosystem — keeping members informed, helping newcomers orient themselves, and making sure useful questions reached the right people.",
    bullets: [
      "Moderated Telegram conversations and protected the signal-to-noise ratio.",
      "Handled member questions around product updates, access, and ecosystem participation.",
      "Shared announcements in a clear, timely voice across a live community.",
    ],
  },
  {
    year: "2024 — DEC 2025",
    company: "LazAI",
    role: "Community Manager",
    label: "AI × Web3 ecosystem",
    description:
      "Helped a fast-moving AI and crypto community stay connected to the product story — from onboarding and recurring support to community health and issue escalation.",
    bullets: [
      "Welcomed members and translated project context into accessible answers.",
      "Monitored conversations for friction, risk, and opportunities to re-engage.",
      "Worked with a remote team to keep community communication consistent.",
    ],
  },
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/12 bg-white/[0.045] px-3 py-2 text-[11px] font-medium tracking-[0.12em] text-white/72 transition-colors hover:border-cyan/40 hover:text-cyan">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-ink text-white">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/78 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <a href="#top" className="group flex items-center gap-3" aria-label="Back to top">
            <span className="grid h-8 w-8 place-items-center rounded-full border border-cyan/45 bg-cyan/10 text-cyan transition-transform duration-200 group-hover:rotate-12">
              <Command size={15} strokeWidth={2.4} />
            </span>
            <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-white/85">Ceeny / CM</span>
          </a>
          <div className="hidden items-center gap-7 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/48 sm:flex">
            <a href="#work" className="transition-colors hover:text-cyan">Work</a>
            <a href="#approach" className="transition-colors hover:text-cyan">Approach</a>
            <a href="#services" className="transition-colors hover:text-cyan">Skills</a>
          </div>
          <a href="mailto:clementjohn83@gmail.com" className="rounded-full border border-cyan/45 bg-cyan px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-white active:scale-[0.97]">Start a conversation</a>
        </div>
      </nav>

      <section id="top" className="relative isolate min-h-[760px] border-b border-white/10 pt-32 sm:pt-40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_76%_24%,rgba(91,239,255,0.14),transparent_25%),radial-gradient(circle_at_20%_0%,rgba(146,116,255,0.13),transparent_30%)]" />
        <div className="absolute right-[-10%] top-[-20%] -z-10 h-[620px] w-[620px] rounded-full border border-cyan/10 [transform:rotate(25deg)] sm:h-[820px] sm:w-[820px]" />
        <div className="absolute right-[8%] top-[14%] -z-10 h-[330px] w-[330px] rounded-full border border-lilac/15 [transform:rotate(-18deg)]" />
        <div className="mx-auto grid max-w-[1320px] gap-16 px-5 pb-24 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-12 lg:px-12 lg:pb-32">
          <div className="max-w-3xl">
            <div className="mb-8 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-cyan"><span className="h-2 w-2 animate-pulse rounded-full bg-cyan shadow-[0_0_18px_rgba(91,239,255,0.9)]" />Available for remote Web3 roles</div>
            <p className="mb-6 max-w-xl text-sm leading-7 text-white/50 sm:text-base">Community manager · support operator · calm in the chaos</p>
            <h1 className="font-display text-[clamp(4rem,10.5vw,9.4rem)] font-black leading-[0.88] tracking-[-0.075em] text-white">Community<br /><span className="bg-gradient-to-r from-cyan via-white to-lilac bg-clip-text text-transparent">is a product.</span></h1>
            <div className="mt-9 flex max-w-2xl flex-col gap-7 border-l border-cyan/40 pl-5 sm:flex-row sm:items-start sm:gap-12">
              <p className="text-base leading-7 text-white/72 sm:max-w-sm">I help Web3 teams turn fast-moving communities into clearer, safer, more useful places to be.</p>
              <a href="#work" className="group inline-flex shrink-0 items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-cyan">See selected work <ArrowUpRight size={15} className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" /></a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[480px] lg:mb-4">
            <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.035] p-3 shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:p-5">
              <div className="absolute inset-3 z-10 rounded-[1.6rem] border border-cyan/45 shadow-[inset_0_0_45px_rgba(91,239,255,0.12)] sm:inset-5" />
              <img src="https://raw.githubusercontent.com/ceeny/ceeny-community-portfolio/main/media/ceeny-profile.jpeg" alt="Ceeny profile avatar" className="h-full w-full rounded-[1.5rem] object-cover" />
              <span className="absolute left-7 top-7 z-20 rounded-full bg-acid px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-ink">Ceeny / CM</span>
              <span className="absolute bottom-7 right-7 z-20 max-w-[170px] text-right text-[10px] font-bold uppercase leading-5 tracking-[0.16em] text-white/80 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">Make every message move the mission forward.</span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3"><div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4"><p className="font-display text-2xl font-bold text-cyan">3+</p><p className="mt-1 text-[9px] font-bold uppercase leading-4 tracking-[0.15em] text-white/45">Years in Web3</p></div><div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4"><p className="font-display text-2xl font-bold text-lilac">2</p><p className="mt-1 text-[9px] font-bold uppercase leading-4 tracking-[0.15em] text-white/45">Core ecosystems</p></div><div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4"><p className="font-display text-2xl font-bold text-acid">24/7</p><p className="mt-1 text-[9px] font-bold uppercase leading-4 tracking-[0.15em] text-white/45">Global mindset</p></div></div>
          </div>
        </div>
        <div className="border-y border-white/10 bg-white/[0.025]"><div className="mx-auto flex max-w-[1320px] items-center gap-8 overflow-hidden px-5 py-5 sm:px-8 lg:px-12"><span className="shrink-0 text-[10px] font-bold uppercase tracking-[0.22em] text-white/36">What I bring</span><div className="flex min-w-max items-center gap-8 text-sm font-semibold text-white/70"><span>Signal over noise</span><span className="text-cyan">✳</span><span>Human support</span><span className="text-lilac">✳</span><span>Clear escalation</span><span className="text-acid">✳</span><span>Community trust</span></div></div></div>
      </section>

      <section id="approach" className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24"><div><p className="section-kicker">The short version</p><h2 className="mt-5 max-w-md font-display text-4xl font-bold leading-[0.98] tracking-[-0.05em] sm:text-5xl">Trust is built in the small moments.</h2></div><div><p className="max-w-3xl text-xl leading-9 text-white/72 sm:text-2xl sm:leading-10">I’m Ceeny, a community manager who cares about the details that make people stay: a useful answer, a steady moderator, an update that arrives before confusion turns into friction.</p><p className="mt-7 max-w-2xl text-sm leading-7 text-white/45">My work sits between the community and the team — translating context, protecting the conversation, and turning member signals into action. I’m most useful when the product is moving quickly and the people around it need clarity.</p><div className="mt-9 flex flex-wrap gap-2">{services.map((service) => <Pill key={service}>{service}</Pill>)}</div></div></div></section>

      <section id="work" className="border-y border-white/10 bg-[#0c0d1a]"><div className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><div className="mb-16 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="section-kicker">Selected experience</p><h2 className="mt-5 max-w-xl font-display text-5xl font-bold leading-[0.95] tracking-[-0.055em] sm:text-7xl">Built close to the community.</h2></div><p className="max-w-xs text-sm leading-6 text-white/42 sm:text-right">Two ecosystems. One consistent operating principle: make it easier for good people to participate.</p></div><div className="space-y-5">{timeline.map((item, index) => <article key={item.company} className="group grid gap-8 rounded-[1.6rem] border border-white/10 bg-white/[0.035] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/35 hover:bg-white/[0.055] sm:p-8 lg:grid-cols-[0.26fr_0.29fr_0.45fr] lg:gap-12 lg:p-10"><div className="flex justify-between lg:block"><div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan">0{index + 1}</p><p className="mt-5 text-[10px] font-bold uppercase tracking-[0.16em] text-white/38">{item.year}</p></div><span className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/38 transition-colors group-hover:border-cyan/35 group-hover:text-cyan lg:mt-12"><ArrowUpRight size={16} /></span></div><div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/38">{item.label}</p><h3 className="mt-3 font-display text-4xl font-bold tracking-[-0.05em] text-white sm:text-5xl">{item.company}</h3><p className="mt-2 text-sm font-semibold text-lilac">{item.role}</p></div><div><p className="max-w-xl text-sm leading-7 text-white/65">{item.description}</p><ul className="mt-6 space-y-3">{item.bullets.map((bullet) => <li key={bullet} className="flex gap-3 text-xs leading-5 text-white/45"><Check size={15} className="mt-0.5 shrink-0 text-cyan" />{bullet}</li>)}</ul></div></article>)}</div></div></section>

      <section className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><div className="mb-14 flex items-end justify-between gap-8"><div><p className="section-kicker">Proof of work</p><h2 className="mt-5 max-w-2xl font-display text-5xl font-bold leading-[0.95] tracking-[-0.055em] sm:text-7xl">Access is earned.</h2></div><Radio className="hidden text-cyan sm:block" size={34} strokeWidth={1.2} /></div><div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"><div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-black/40 p-3 shadow-[0_30px_90px_rgba(0,0,0,0.35)]"><div className="overflow-hidden rounded-[1.1rem] bg-[#15161e]"><img src="https://raw.githubusercontent.com/ceeny/ceeny-community-portfolio/main/media/metis-community-proof.jpeg" alt="Metis Telegram community showing moderator access and live member count" className="block h-auto max-h-[620px] w-full object-cover object-top" loading="lazy" /></div><div className="absolute left-7 top-7 rounded-full bg-acid px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.16em] text-ink">Live community evidence</div></div><div className="lg:pl-8"><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan">Metis · Telegram</p><h3 className="mt-4 max-w-lg font-display text-4xl font-bold leading-[0.98] tracking-[-0.05em] sm:text-5xl">Trusted with the room, not just the replies.</h3><p className="mt-6 max-w-xl text-sm leading-7 text-white/55">This snapshot shows my moderator access in the Metis community: a live, active room where keeping information clear and member experience steady matters every day.</p><div className="mt-8 grid grid-cols-2 gap-3 sm:max-w-md"><div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"><Gauge className="mb-8 text-cyan" size={19} /><p className="font-display text-2xl font-bold">15.6K</p><p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/38">Visible members</p></div><div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"><Layers3 className="mb-8 text-lilac" size={19} /><p className="font-display text-2xl font-bold">MOD</p><p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/38">Role in the room</p></div></div><a href="https://t.me/MetisL2" target="_blank" rel="noreferrer" className="group mt-8 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-cyan">View community <ArrowUpRight size={15} className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" /></a></div></div></section>

      <section id="services" className="border-y border-white/10 bg-gradient-to-br from-[#101225] via-ink to-[#101225]"><div className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24"><div><p className="section-kicker">How I operate</p><h2 className="mt-5 font-display text-5xl font-bold leading-[0.95] tracking-[-0.055em] sm:text-7xl">Useful by design.</h2><p className="mt-7 max-w-sm text-sm leading-7 text-white/45">Not just present in the chat. I build the systems, habits, and tone that help a community move with the product.</p></div><div className="grid gap-4 sm:grid-cols-3">{principles.map((principle) => { const Icon = principle.icon; return <div key={principle.number} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 transition-colors duration-200 hover:border-cyan/35 hover:bg-white/[0.065] sm:p-7"><div className="flex items-center justify-between"><span className="text-[10px] font-bold tracking-[0.18em] text-cyan">{principle.number}</span><Icon size={20} className="text-white/35" /></div><h3 className="mt-14 font-display text-2xl font-bold tracking-[-0.04em]">{principle.title}</h3><p className="mt-4 text-sm leading-6 text-white/46">{principle.description}</p></div>; })}</div></div><div className="mt-20 border-t border-white/10 pt-8"><div className="flex flex-wrap gap-x-7 gap-y-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white/42">{services.map((service) => <span key={service} className="flex items-center gap-2"><Sparkles size={12} className="text-lilac" />{service}</span>)}</div></div></div></section>

      <section className="relative isolate overflow-hidden px-5 py-28 sm:px-8 lg:px-12 lg:py-40"><div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_20%,rgba(91,239,255,0.16),transparent_32%),radial-gradient(circle_at_80%_80%,rgba(156,140,255,0.13),transparent_28%)]" /><div className="mx-auto max-w-[900px] text-center"><p className="section-kicker">Channel open</p><h2 className="mt-6 font-display text-[clamp(3.8rem,9vw,8rem)] font-black leading-[0.88] tracking-[-0.075em]">Let’s build the<br /><span className="text-cyan">next good room.</span></h2><p className="mx-auto mt-8 max-w-xl text-base leading-7 text-white/55">If you’re building something ambitious in Web3 and want a community manager who brings clarity, care, and operational follow-through, I’d like to hear about it.</p><a href="mailto:clementjohn83@gmail.com" className="group mt-10 inline-flex items-center gap-3 rounded-full bg-cyan px-7 py-4 text-[11px] font-black uppercase tracking-[0.18em] text-ink transition-all duration-200 hover:-translate-y-1 hover:bg-white active:scale-[0.97]">Start a conversation <ArrowUpRight size={17} className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" /></a><div className="mt-14 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-xs text-white/40"><a href="mailto:clementjohn83@gmail.com" className="transition-colors hover:text-cyan">clementjohn83@gmail.com</a><span className="hidden text-white/20 sm:block">/</span><a href="https://x.com/ceeny007" target="_blank" rel="noreferrer" className="transition-colors hover:text-cyan">X / @ceeny007</a><span className="hidden text-white/20 sm:block">/</span><a href="https://t.me/ceeny007" target="_blank" rel="noreferrer" className="transition-colors hover:text-cyan">Telegram / @ceeny007</a></div></div></section>

      <footer className="border-t border-white/10 px-5 py-6 sm:px-8 lg:px-12"><div className="mx-auto flex max-w-[1320px] flex-col justify-between gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-white/28 sm:flex-row"><span>© 2026 Ceeny / Community Manager</span><span>Built for clarity, not clutter.</span><a href="#top" className="flex items-center gap-2 transition-colors hover:text-cyan">Back to top <ChevronDown size={12} className="rotate-180" /></a></div></footer>
    </main>
  );
}
