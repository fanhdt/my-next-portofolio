import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import { HeroOrbit } from "@/components/HeroOrbit";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";

export const HeroSection = () => {
  return (
    <section id="home" className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div
        className="absolute inset-0 pointer-events-none "
        style={{ maskImage: "linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)", WebkitMaskImage: "linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)" }}
      >
        <div className="absolute inset-0 -z-30 opacity-5" style={{ backgroundImage: `url(${grainImage.src})` }}></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>

        <HeroOrbit size={430} rotation={-14} spinDuration="10s" shouldSpin shouldOrbit orbitDuration="30s">
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={80} spinDuration="10s" shouldSpin shouldOrbit orbitDuration="32s">
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-42} spinDuration="10s" shouldSpin shouldOrbit orbitDuration="34s">
          <div className="size-3 text-emerald-300/20 rounded-full" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178} spinDuration="10s" shouldSpin shouldOrbit orbitDuration="36s">
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20} spinDuration="10s" shouldSpin shouldOrbit orbitDuration="38s">
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98} spinDuration="10s" shouldSpin shouldOrbit orbitDuration="40s">
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98} spinDuration="10s" shouldSpin shouldOrbit orbitDuration="42s">
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-10} spinDuration="10s" shouldSpin shouldOrbit orbitDuration="44s">
          <div className="size-3 text-emerald-300/20 rounded-full" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={150} spinDuration="10s" shouldSpin shouldOrbit orbitDuration="46s">
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={86} spinDuration="10s" shouldSpin shouldOrbit orbitDuration="48s">
          <SparkleIcon className="size-3 text-emerald-300/20 rounded-full" />
        </HeroOrbit>
        <HeroOrbit size={800} rotation={-72} spinDuration="10s" shouldSpin shouldOrbit orbitDuration="50s">
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          {" "}
          <Image src={memojiImage} alt="Memoji" className="size-[100px]" />
          <div className="pointer-events-none bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className=" text-sm font-medium">Avaible for new projects</div>
          </div>
        </div>

        <div className="max-w-lg mx-auto">
          <h1 className="font-serif md:text-5xl text-3xl text-center mt-8 tracking-wide">Building Exceptional User Experiences</h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">I Spesialize in transforming design into functional, high performing websites. Let's discuss your next project</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className=" inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore My Work Here</span>
            <ArrowDown className="size-4" />
          </button>
          <a href="https://wa.me/0895346176572" className="inline-flex items-center gap-2 border border-white hover:scale-[0.98] transition-all ease-in-out bg-white text-gray-900 h-12 px-6 rounded-xl ">
            <span>👋</span>
            <span className="font-semibold">Let's Connect</span>
          </a>
        </div>
      </div>
    </section>
  );
};
