"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function SceneShell({ children, className = "", id }: { children: React.ReactNode; className?: string; id: string }) {
  const scope = useRef<HTMLElement>(null);
  useGSAP(() => {
    const elements = scope.current?.querySelectorAll("[data-reveal]");
    if (!elements?.length) return;
    gsap.fromTo(elements, { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: 1.8, ease: "power3.out", stagger: .18, scrollTrigger: { trigger: scope.current, start: "top 70%", once: true } });
  }, { scope });
  return <section ref={scope} id={id} className={`scene ${className}`}>{children}<div className="grain" /></section>;
}

function TextBlock({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div data-reveal className={`scene-copy serif text-center text-[clamp(1.55rem,3.5vw,3.4rem)] leading-[1.18] tracking-[-.025em] ${className}`}>{children}</div>;
}

function Scene01() { return <SceneShell id="scene-01" className="flex min-h-[92vh] items-center justify-center bg-[#080707] px-6"><TextBlock className="max-w-3xl text-[#e9e0dc]">Sometimes i make you feel bad<br /><br />Sometimes we argue<br /><br />But i never want you to forget<br /><br />The good moments we had</TextBlock><div className="vignette" /></SceneShell>; }

function Scene02() {
  const scope = useRef<HTMLElement>(null);
  useGSAP(() => { const tl = gsap.timeline({ scrollTrigger: { trigger: scope.current, start: "top 80%", end: "bottom 20%", scrub: 1.2 } }); tl.fromTo(".cigarette", { rotate: -5, scale: .84, x: -30 }, { rotate: 5, scale: 1, x: 0, duration: 1.2, ease: "power2.inOut" }).to(".cigarette", { scaleX: .46, duration: .8, ease: "power4.inOut" }).fromTo(".heart", { scale: 0, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: .7, ease: "back.out(1.6)" }).to(".heart", { scale: 13, duration: 2.5, ease: "power2.inOut" }); }, { scope });
  return <SceneShell id="scene-02" className="min-h-[105vh] bg-[#0a0809]"><section ref={scope} className="absolute inset-0 flex items-center justify-center"><div className="cigarette relative h-3 w-[min(58vw,520px)] rotate-[-5deg] rounded-full bg-gradient-to-r from-[#d4c8be] via-[#f5eee5] to-[#b77948] shadow-[0_0_35px_rgba(255,184,108,.14)]"><span className="absolute right-[-8px] top-[-1px] h-5 w-10 rounded-r-full bg-[#e78c49] blur-[3px]" /></div><div className="heart absolute h-16 w-16 rotate-45 rounded-[12px] bg-gradient-to-br from-[#fff0f3] via-[#f6b8c9] to-[#c75678] shadow-[0_0_90px_30px_rgba(238,154,179,.35)] before:absolute before:-left-0 before:top-[-32px] before:h-16 before:w-16 before:rounded-full before:bg-inherit after:absolute after:bottom-0 after:-left-32 after:h-16 after:w-16 after:rounded-full after:bg-inherit" /></section><div className="absolute bottom-[15vh] left-0 right-0 z-10 px-6"><TextBlock className="text-[clamp(1.3rem,2.7vw,2.5rem)]">Prima tigara<br /><br />Si aia "imprumutata pe jumate"</TextBlock></div><div className="vignette" /></SceneShell>;
}

function Scene03() { return <SceneShell id="scene-03" className="min-h-[110vh] bg-[radial-gradient(circle_at_50%_30%,#d87599_0%,#70354f_45%,#21131e_100%)] px-6 py-[18vh]"><div className="mx-auto flex max-w-2xl flex-col gap-5"><div data-reveal className="chat-bubble self-start rounded-2xl rounded-bl-sm px-6 py-5 font-serif text-xl leading-snug text-white/95 md:text-2xl">Si faptul ca ti-am zis atatea lucruri in primele zile ca nu stiu cum ai decis sa continuam</div><div data-reveal className="chat-bubble self-end rounded-2xl rounded-br-sm px-6 py-5 font-serif text-xl leading-snug text-white/95 md:text-2xl">Intradevar am facut si eu una alta mai buna</div><div data-reveal className="chat-bubble self-start rounded-2xl rounded-bl-sm px-6 py-5 font-serif text-xl leading-snug text-white/95 md:text-2xl">O salata de fructe</div></div><div className="vignette" /></SceneShell>; }

function Scene04() { const scope = useRef<HTMLElement>(null); useGSAP(() => { gsap.fromTo(".fruit", { y: -150, rotate: -35 }, { y: 360, rotate: 380, ease: "power2.in", duration: 2.6, scrollTrigger: { trigger: scope.current, start: "top 70%", end: "bottom 20%", scrub: 1 } }); gsap.fromTo(".knife", { x: -180, rotate: -10 }, { x: 180, rotate: 4, ease: "power3.inOut", duration: 2.2, scrollTrigger: { trigger: scope.current, start: "top 65%", end: "bottom 25%", scrub: 1 } }); }, { scope }); return <SceneShell id="scene-04" className="min-h-[72vh] bg-[#d87599]"><section ref={scope} className="absolute inset-0 flex items-center justify-center"><div className="fruit absolute top-[12%] h-20 w-20 rounded-full bg-gradient-to-br from-[#ffd574] to-[#e36d41] shadow-xl" /><div className="knife absolute h-3 w-[min(74vw,620px)] -rotate-6 rounded-full bg-gradient-to-r from-transparent via-[#eee] to-[#777] shadow-[0_4px_15px_rgba(0,0,0,.3)]" /></section><div className="vignette" /></SceneShell>; }

function PhotoScene({ id, photo, children, className = "" }: { id: string; photo: string; children: React.ReactNode; className?: string }) { const scope = useRef<HTMLElement>(null); useGSAP(() => { gsap.fromTo("img", { scale: 1.08 }, { scale: 1, ease: "none", scrollTrigger: { trigger: scope.current, start: "top bottom", end: "bottom top", scrub: 1.4 } }); }, { scope }); return <SceneShell id={id} className={`min-h-screen bg-[#201915] ${className}`}><section ref={scope} className="photo-frame"><Image src={photo} alt="" fill sizes="100vw" loading="lazy" /></section><div className="absolute inset-x-0 bottom-[12vh] z-10 px-6"><TextBlock className="text-white drop-shadow-[0_3px_20px_rgba(0,0,0,.75)]">{children}</TextBlock></div><div className="vignette" /></SceneShell>; }

function Scene06() { return <SceneShell id="scene-06" className="flex min-h-[120vh] items-center justify-center bg-[#101010] px-6"><TextBlock className="max-w-4xl">A inceput de la tine</TextBlock><div className="vignette" /></SceneShell>; }
function Scene07() { return <PhotoScene id="scene-07" photo="/assets/photos/photo-02.jpg" className="bg-[#171017]"><span>Si dupa de la mine</span></PhotoScene>; }
function Scene08() { return <PhotoScene id="scene-08" photo="/assets/photos/photo-03.jpg"><span>La o tigara la 12 noaptea</span></PhotoScene>; }
function Scene09() { const scope = useRef<HTMLElement>(null); useGSAP(() => { gsap.fromTo(".wallet", { rotate: -5, y: 24 }, { rotate: 4, y: -6, ease: "power2.inOut", scrollTrigger: { trigger: scope.current, start: "top 70%", end: "bottom 30%", scrub: 1 } }); gsap.fromTo(".fly", { x: 0, y: 50, autoAlpha: 0 }, { x: 150, y: -130, autoAlpha: 1, ease: "power2.out", scrollTrigger: { trigger: scope.current, start: "top 60%", end: "bottom 30%", scrub: 1 } }); }, { scope }); return <SceneShell id="scene-09" className="flex min-h-[80vh] items-center justify-center bg-[#0b0a0a] px-6"><section ref={scope} className="relative flex items-center justify-center"><div className="wallet h-52 w-72 rounded-[18px] border border-[#9b764e] bg-gradient-to-br from-[#553923] to-[#1c130e] shadow-2xl before:absolute before:left-0 before:right-0 before:top-12 before:h-px before:bg-[#a47b50]/40" /><div className="fly absolute text-3xl">✦</div></section><div className="absolute bottom-[13vh] left-0 right-0 px-6"><TextBlock>Rupt in cur eram cu banii</TextBlock></div><div className="vignette" /></SceneShell>; }
function Scene10() { return <SceneShell id="scene-10" className="flex min-h-[110vh] items-center justify-center bg-[#111011] px-6"><TextBlock className="max-w-3xl text-[#eee5e0]">A inceput de la tine<br /><br />Si dupa de la mine</TextBlock><div className="vignette" /></SceneShell>; }

const subtitles = ["Mereu o sa fii prima mea alegere", "Fata care ma face fericit", "Fata care ma pune la punct", "Fata care mi-a schimbat viata", "Fata care imi e alaturi", "Si fata care este", "iubita mea"];
function Scene11() { const scope = useRef<HTMLElement>(null); const video = useRef<HTMLVideoElement>(null); useEffect(() => { const node = scope.current; const media = video.current; if (!node || !media) return; const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { void media.play().catch(() => undefined); } else media.pause(); }, { threshold: .45 }); observer.observe(node); return () => observer.disconnect(); }, []); return <SceneShell id="scene-11" className="min-h-screen bg-black"><section ref={scope} className="absolute inset-0"><video ref={video} className="h-full w-full object-cover" src="/assets/videos/ending-video.mp4" playsInline preload="metadata" /><div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/75 via-transparent to-black/10 px-6 pb-[13vh]"><div className="max-w-3xl text-center font-serif text-[clamp(1.35rem,3vw,2.7rem)] leading-tight text-white">{subtitles.map((line) => <p key={line} className="mb-2">{line}</p>)}</div></div><div className="vignette" /></section></SceneShell>; }
function Scene12() { return <SceneShell id="scene-12" className="flex min-h-[70vh] items-center justify-center bg-black px-6"><TextBlock className="text-[clamp(1.1rem,2.2vw,1.8rem)] tracking-[.18em]">HAPPY GIRLFRIEND'S DAY</TextBlock></SceneShell>; }

export default function LoveStory() { useEffect(() => { const lenis = new Lenis({ duration: 1.25, smoothWheel: true, touchMultiplier: 1.05 }); let raf = 0; const update = (time: number) => { lenis.raf(time); raf = requestAnimationFrame(update); }; raf = requestAnimationFrame(update); return () => { cancelAnimationFrame(raf); lenis.destroy(); }; }, []); return <main><Scene01 /><Scene02 /><Scene03 /><Scene04 /><PhotoScene id="scene-05" photo="/assets/photos/photo-01.jpg" className="bg-[#2e211a]">O cafea in sesiune</PhotoScene><Scene06 /><Scene07 /><Scene08 /><Scene09 /><Scene10 /><Scene11 /><Scene12 /></main>; }
