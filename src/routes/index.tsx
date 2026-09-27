import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Clock3,
  ExternalLink,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Scissors,
  ShieldCheck,
  Sparkles,
  Star,
  UsersRound,
  X,
} from "lucide-react";
import { SiteButton } from "@/components/site-button";
import { siteContent, whatsappUrl } from "@/lib/site-content";
import logoAsset from "@/assets/dallas-logo.jpg.asset.json";
import atendimentoAsset from "@/assets/barbeiro-atendimento.jpg.asset.json";
import equipeAsset from "@/assets/equipe-dallas.jpg.asset.json";
import salaoAsset from "@/assets/salao-dallas.jpg.asset.json";
import cadeirasAsset from "@/assets/cadeiras-dallas.jpg.asset.json";
import sinucaAsset from "@/assets/area-sinuca.jpg.asset.json";
import poleAsset from "@/assets/barber-pole.jpg.asset.json";
import detalhesAsset from "@/assets/detalhes-classicos.jpg.asset.json";
import apresentacaoAsset from "@/assets/dallas-apresentacao.mp4.asset.json";
import detalheManSalonAsset from "@/assets/detalhe-man-salon.jpg.asset.json";
import detalhesDallasVideoAsset from "@/assets/detalhes-dallas.mp4.asset.json";

const mediaOrigin = "https://dallas-barbershop-go.lovable.app";
const mediaUrl = (path: string) => new URL(path, mediaOrigin).href;

const navItems = [
  ["Início", "#inicio"],
  ["Sobre", "#sobre"],
  ["Serviços", "#servicos"],
  ["Galeria", "#galeria"],
  ["Avaliações", "#avaliacoes"],
  ["Localização", "#localizacao"],
  ["Contato", "#contato"],
] as const;

const gallery = [
  { src: mediaUrl(salaoAsset.url), alt: "Interior da Dallas Barbearia com estações de atendimento", type: "image" },
  { src: mediaUrl(detalhesDallasVideoAsset.url), alt: "Vídeo com detalhes da Dallas Barbearia", type: "video" },
  { src: mediaUrl(detalheManSalonAsset.url), alt: "Parede decorativa da Dallas Barbearia", type: "image" },
  { src: mediaUrl(atendimentoAsset.url), alt: "Barbeiro da Dallas realizando atendimento", type: "image" },
  { src: mediaUrl(equipeAsset.url), alt: "Equipe da Dallas Barbearia", type: "image" },
  { src: mediaUrl(cadeirasAsset.url), alt: "Cadeiras clássicas da Dallas Barbearia", type: "image" },
  { src: mediaUrl(sinucaAsset.url), alt: "Área de convivência com mesa de sinuca", type: "image" },
  { src: mediaUrl(detalhesAsset.url), alt: "Detalhes clássicos do salão", type: "image" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dallas Barbearia | Barbearia premium em Goiânia" },
      { name: "description", content: "Corte masculino, barba e uma experiência completa na Dallas Barbearia, no Setor Santa Genoveva, Goiânia." },
      { property: "og:title", content: "Dallas Barbearia | Goiânia" },
      { property: "og:description", content: "Seu estilo, nossa tradição. Conheça a Dallas e agende pelo WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DallasHome,
});

function BrandLogo({ className = "" }: { className?: string }) {
  return <img src={mediaUrl(logoAsset.url)} alt="Dallas Barbearia" className={`aspect-square object-contain ${className}`} />;
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
      <p className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-primary">{eyebrow}</p>
      <h2 className="font-display text-3xl font-semibold uppercase leading-tight text-foreground md:text-5xl">{title}</h2>
      <div className="gold-line mx-auto my-5 h-px w-24" />
      {copy ? <p className="text-sm leading-7 text-muted-foreground md:text-base">{copy}</p> : null}
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
      <div className="section-shell grid h-18 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3">
        <a href="#inicio" aria-label="Dallas Barbearia — início" className="shrink-0">
          <BrandLogo className="h-14 w-14" />
        </a>
        <nav aria-label="Navegação principal" className="hidden justify-center gap-5 lg:flex">
          {navItems.map(([label, href]) => <a key={href} href={href} className="text-[0.66rem] font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary">{label}</a>)}
        </nav>
        <SiteButton href={whatsappUrl} target="_blank" rel="noreferrer" className="hidden min-h-10 px-4 py-2 lg:inline-flex">
          Agendar
        </SiteButton>
        <button aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} onClick={() => setOpen((value) => !value)} className="col-start-3 grid h-11 w-11 place-items-center justify-self-end rounded-sm border border-border text-foreground lg:hidden">
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="section-shell flex flex-col py-4" aria-label="Menu mobile">
            <div className="mb-4 flex items-center gap-3 border-b border-border pb-4"><BrandLogo className="h-12 w-12" /><span className="font-display text-sm text-primary">DALLAS BARBEARIA</span></div>
            {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="border-b border-border py-3 text-xs font-bold uppercase tracking-widest text-foreground">{label}</a>)}
            <SiteButton href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-4">Agendar pelo WhatsApp</SiteButton>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function GalleryCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const interactingRef = useRef(false);

  useEffect(() => {
    const timer = window.setInterval(() => {
      const track = trackRef.current;
      if (!track || interactingRef.current) return;

      const firstCard = track.firstElementChild as HTMLElement | null;
      const step = firstCard ? firstCard.offsetWidth + 12 : track.clientWidth * 0.82;
      const reachedEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - step / 2;
      track.scrollTo({ left: reachedEnd ? 0 : track.scrollLeft + step, behavior: "smooth" });
    }, 3500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div
      ref={trackRef}
      className="gallery-track -mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-3 md:-mx-8 md:px-8"
      onPointerDown={() => { interactingRef.current = true; }}
      onPointerUp={() => { interactingRef.current = false; }}
      onPointerCancel={() => { interactingRef.current = false; }}
      onMouseEnter={() => { interactingRef.current = true; }}
      onMouseLeave={() => { interactingRef.current = false; }}
      aria-label="Galeria de fotos da Dallas Barbearia"
    >
      {gallery.map((image, index) => (
        <figure key={image.src} className="group relative aspect-[4/5] w-[82vw] max-w-[390px] shrink-0 snap-center overflow-hidden rounded-sm border border-border bg-background shadow-2xl md:w-[34vw] lg:w-[29vw]">
          {image.type === "video" ? (
            <video src={image.src} aria-label={image.alt} muted loop autoPlay playsInline preload="metadata" className="h-full w-full object-cover" />
          ) : (
            <img src={image.src} alt={image.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
          )}
          <figcaption className="absolute bottom-0 left-0 border-r border-t border-primary/60 bg-background/85 px-4 py-2 text-[0.62rem] font-bold uppercase tracking-widest text-primary backdrop-blur-md">
            Dallas Barbearia · 0{index + 1}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

function DallasHome() {
  return (
    <main className="bg-background text-foreground">
      <Header />

      <section id="inicio" className="relative flex min-h-[92svh] items-end overflow-hidden pt-18">
        <video
          className="absolute inset-0 h-full w-full object-cover object-center"
          src={mediaUrl(apresentacaoAsset.url)}
          poster={mediaUrl(equipeAsset.url)}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Apresentação em vídeo da Dallas Barbearia"
        />
        <div className="image-shade absolute inset-0" />
        <div className="absolute inset-0 bg-background/30" />
        <div className="section-shell relative z-10 pb-14 pt-32 text-center md:pb-20">
          <BrandLogo className="mx-auto mb-4 h-28 w-28 rounded-full border border-primary/60 shadow-2xl md:h-36 md:w-36" />
          <p className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.28em] text-primary">Tradição, precisão e personalidade</p>
          <h1 className="font-display text-4xl font-semibold uppercase leading-tight md:text-7xl">Dallas Barbearia</h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-foreground/85 md:text-lg">Seu estilo, nossa tradição. Uma experiência de cuidado masculino feita nos detalhes.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <SiteButton href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Agendar pelo WhatsApp</SiteButton>
            <SiteButton href="#servicos" variant="outline">Conhecer serviços <ArrowRight size={16} /></SiteButton>
          </div>
          <div className="mx-auto mt-9 flex max-w-sm items-center justify-center gap-2 text-xs text-muted-foreground"><MapPin size={15} className="text-primary" /> Santa Genoveva · Goiânia</div>
        </div>
      </section>

      <section id="sobre" className="border-y border-border bg-surface py-20 md:py-28">
        <div className="section-shell grid items-center gap-10 md:grid-cols-[0.92fr_1.08fr] md:gap-16">
          <div className="relative">
            <img src={mediaUrl(atendimentoAsset.url)} alt="Atendimento na Dallas Barbearia" loading="lazy" className="aspect-[4/5] w-full rounded-sm object-cover" />
            <div className="absolute -bottom-4 -right-2 border border-primary bg-background px-5 py-4 md:-right-5"><p className="font-display text-lg text-primary">Cuidado em cada detalhe</p></div>
          </div>
          <div>
            <p className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-primary">Sobre a Dallas</p>
            <h2 className="font-display text-3xl font-semibold uppercase leading-tight md:text-5xl">Mais que um corte.<br />Uma experiência.</h2>
            <div className="my-6 h-px w-20 bg-primary" />
            <p className="mb-5 leading-8 text-muted-foreground">A Dallas Barbearia nasceu para oferecer cuidado, técnica e atenção em um espaço pensado para você. Do atendimento ao acabamento, cada escolha valoriza seu estilo e transforma sua visita em um momento único.</p>
            <p className="leading-8 text-muted-foreground">Aqui, tradição e modernidade se encontram em uma atmosfera autêntica, com equipe preparada e estrutura completa.</p>
            <SiteButton href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-8">Falar no WhatsApp</SiteButton>
          </div>
        </div>
      </section>

      <section id="servicos" className="py-20 md:py-28">
        <div className="section-shell">
          <SectionHeading eyebrow="Técnica & precisão" title="Nossos serviços" copy="Cuidados essenciais para manter sua imagem sempre alinhada. Valores e detalhes podem ser consultados diretamente com nossa equipe." />
          <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {siteContent.services.map((service, index) => (
              <article key={service.name} className="group min-h-52 bg-background p-7 transition-colors duration-300 hover:bg-surface-raised">
                <div className="mb-8 flex items-center justify-between"><Scissors size={23} className="text-primary" /><span className="font-display text-2xl text-border-strong">0{index + 1}</span></div>
                <h3 className="font-display text-xl uppercase text-foreground">{service.name}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{service.description}</p>
              </article>
            ))}
            <article className="flex min-h-52 flex-col justify-center bg-primary p-7 text-primary-foreground">
              <p className="text-xs font-bold uppercase tracking-widest">Seu horário</p>
              <h3 className="mt-3 font-display text-2xl uppercase">Pronto para renovar?</h3>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest">Agendar agora <ArrowRight size={16} /></a>
            </article>
          </div>
        </div>
      </section>

      <section id="galeria" className="border-y border-border bg-surface py-20 md:py-28">
        <div className="section-shell">
          <SectionHeading eyebrow="Conheça nosso espaço" title="Galeria Dallas" copy="Ambiente, estrutura e atendimento reais da Dallas Barbearia." />
          <GalleryCarousel />
          <p className="mt-4 text-center text-[0.65rem] font-bold uppercase tracking-widest text-muted-foreground">Deslize para ver mais</p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="section-shell">
          <SectionHeading eyebrow="Por que escolher a Dallas" title="Nosso jeito de fazer" />
          <div className="grid gap-8 md:grid-cols-3">
            {[
              [Sparkles, "Precisão nos detalhes", "Cada acabamento é pensado para deixar seu visual alinhado e autêntico."],
              [UsersRound, "Atendimento de verdade", "Uma equipe preparada para entender seu estilo e entregar a melhor experiência."],
              [ShieldCheck, "Ambiente completo", "Conforto, personalidade e estrutura para você aproveitar cada momento."],
            ].map(([Icon, title, copy]) => {
              const FeatureIcon = Icon as typeof Sparkles;
              return <article key={String(title)} className="border-t border-primary pt-7"><FeatureIcon size={25} className="mb-6 text-primary" /><h3 className="font-display text-xl uppercase">{String(title)}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{String(copy)}</p></article>;
            })}
          </div>
        </div>
      </section>

      <section id="avaliacoes" className="relative overflow-hidden border-y border-border bg-surface py-20 md:py-28">
        <div className="absolute inset-y-0 right-0 hidden w-1/3 md:block"><img src={mediaUrl(poleAsset.url)} alt="Detalhe clássico da barbearia" loading="lazy" className="h-full w-full object-cover opacity-25" /><div className="absolute inset-0 bg-gradient-to-r from-surface to-transparent" /></div>
        <div className="section-shell relative">
          <div className="max-w-3xl">
            <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-sm border border-primary text-primary"><Star size={25} /></div>
            <p className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-primary">Avaliações no Google</p>
            <h2 className="font-display text-3xl font-semibold uppercase leading-tight md:text-5xl">O que nossos clientes dizem</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">Confira as avaliações da Dallas Barbearia no Google e conheça a experiência de quem já passou por aqui.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <SiteButton href={siteContent.reviewsUrl} target="_blank" rel="noreferrer">Ver avaliações no Google <Star size={16} /></SiteButton>
              <SiteButton href={siteContent.reviewsUrl} target="_blank" rel="noreferrer" variant="outline">Avaliar no Google <ExternalLink size={16} /></SiteButton>
            </div>
            <p className="mt-5 text-xs text-muted-foreground">Você será direcionado ao perfil oficial no Google.</p>
          </div>
        </div>
      </section>

      <section id="localizacao" className="py-20 md:py-28">
        <div className="section-shell grid overflow-hidden border border-border md:grid-cols-2">
          <div className="min-h-[360px] bg-surface"><img src={mediaUrl(sinucaAsset.url)} alt="Área de convivência da Dallas Barbearia" loading="lazy" className="h-full w-full object-cover" /></div>
          <div className="flex flex-col justify-center bg-surface-raised p-7 md:p-12">
            <p className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-primary">Localização</p>
            <h2 className="font-display text-3xl uppercase md:text-4xl">Venha conhecer a Dallas</h2>
            <address className="mt-7 not-italic text-sm leading-7 text-muted-foreground">{siteContent.addressLines.map((line) => <span key={line} className="block">{line}</span>)}</address>
            <div className="mt-6 flex gap-3 border-t border-border pt-6"><Clock3 size={19} className="mt-1 shrink-0 text-primary" /><p className="text-sm leading-6 text-muted-foreground"><strong className="block text-foreground">Horário de funcionamento</strong>{siteContent.hours}</p></div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><SiteButton href={siteContent.mapsUrl} target="_blank" rel="noreferrer"><MapPin size={17} /> Como chegar</SiteButton><SiteButton href={whatsappUrl} target="_blank" rel="noreferrer" variant="outline"><MessageCircle size={17} /> WhatsApp</SiteButton></div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-16">
        <div className="section-shell grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <div><p className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-primary">Acompanhe a Dallas</p><h2 className="mt-3 font-display text-3xl uppercase">Bastidores, cortes e novidades</h2><p className="mt-3 text-sm text-muted-foreground">Siga nosso perfil e acompanhe o dia a dia da barbearia.</p></div>
          {siteContent.instagramUrl ? <SiteButton href={siteContent.instagramUrl} target="_blank" rel="noreferrer" variant="outline"><Instagram size={18} /> {siteContent.instagramHandle}</SiteButton> : <div className="flex items-center gap-3 border border-border px-5 py-4 text-sm text-muted-foreground"><Instagram size={20} className="text-primary" /><span>Perfil em breve</span></div>}
        </div>
      </section>

      <section id="contato" className="relative overflow-hidden py-24 text-center md:py-32">
        <img src={mediaUrl(cadeirasAsset.url)} alt="Cadeiras da Dallas Barbearia" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-25" /><div className="absolute inset-0 bg-background/75" />
        <div className="section-shell relative"><p className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-primary">Sua vez</p><h2 className="mt-4 font-display text-4xl uppercase md:text-6xl">Seu próximo corte<br />começa aqui.</h2><SiteButton href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-9"><MessageCircle size={18} /> Agendar meu horário</SiteButton></div>
      </section>

      <section className="border-t border-border py-20">
        <div className="section-shell max-w-3xl"><SectionHeading eyebrow="Tire suas dúvidas" title="Perguntas frequentes" />
          <div className="divide-y divide-border border-y border-border">{[
            ["Como faço para agendar?", "Clique em qualquer botão de WhatsApp do site. A mensagem já estará pronta para você solicitar seu horário."],
            ["Quais serviços estão disponíveis?", "Oferecemos corte masculino, barba, corte com barba, acabamento e sobrancelha. Consulte a equipe para outros serviços."],
            ["Onde fica a Dallas Barbearia?", "Estamos no Posto Rede Carreteiro 10, Av. São Francisco, 40, em Goiânia - GO."],
            ["Como consulto os valores?", "Fale com nossa equipe pelo WhatsApp para receber informações atualizadas sobre serviços e valores."],
          ].map(([question, answer]) => <details key={question} className="group py-5"><summary className="grid cursor-pointer list-none grid-cols-[minmax(0,1fr)_auto] items-center gap-4 font-display text-sm uppercase text-foreground"><span className="min-w-0">{question}</span><ChevronDown size={18} className="shrink-0 text-primary transition-transform group-open:rotate-180" /></summary><p className="max-w-2xl pt-4 text-sm leading-7 text-muted-foreground">{answer}</p></details>)}</div>
        </div>
      </section>

      <footer className="border-t border-border bg-surface py-12 pb-24 md:pb-12">
        <div className="section-shell grid gap-10 md:grid-cols-3">
          <div><BrandLogo className="h-24 w-24" /><p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">Dallas Barbearia. Tradição, cuidado e personalidade em Goiânia.</p></div>
          <div><p className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">Navegue</p><div className="grid grid-cols-2 gap-3">{navItems.slice(1, 7).map(([label, href]) => <a key={href} href={href} className="text-sm text-muted-foreground transition-colors hover:text-primary">{label}</a>)}</div></div>
          <div><p className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">Contato</p><a href={whatsappUrl} target="_blank" rel="noreferrer" className="block text-sm text-muted-foreground hover:text-primary">(62) 99906-0802</a><a href={siteContent.mapsUrl} target="_blank" rel="noreferrer" className="mt-3 block text-sm leading-6 text-muted-foreground hover:text-primary">{siteContent.addressLines.join(" · ")}</a><a href={siteContent.reviewsUrl} target="_blank" rel="noreferrer" className="mt-3 block text-sm text-muted-foreground hover:text-primary">Avaliações no Google</a></div>
        </div>
        <div className="section-shell mt-10 border-t border-border pt-6 text-xs text-muted-foreground">© {new Date().getFullYear()} Dallas Barbearia. Todos os direitos reservados.</div>
      </footer>

      <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Agendar pelo WhatsApp" className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-success text-primary-foreground shadow-xl transition-transform hover:scale-105 md:bottom-7 md:right-7"><MessageCircle size={25} /></a>
    </main>
  );
}