"use client";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import Image from "next/image";
import itsMe from "@/assets/images/me.jpeg";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import UnityIcon from "@/assets/icons/unity-svgrepo-com.svg";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    title: "Javascript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
  {
    title: "Unity",
    iconType: UnityIcon,
  },
];

const hobbies = [
  {
    title: "Gaming",
    emoji: "🎮",
    left: "50%",
    top: "50%",
  },
  {
    title: "Reading",
    emoji: "📖",
    left: "0%",
    top: "30%",
  },
  {
    title: "Fitness",
    emoji: "🏋️",
    left: "25%",
    top: "20%",
  },
  {
    title: "Hiking",
    emoji: "🥾",
    left: "53%",
    top: "40%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);

  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader eyebrow="About Me" title="A Glimpse Into My World" description="Learn more about who I am, and what I do" />

        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader title="This is me" description="Hi, I'm Irfan, an aspiring full-stack developer passionate about building innovative solutions." />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={itsMe} alt="book cover" />
              </div>
            </Card>

            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader title="My Toolbox" description="Explore the technologies and tools I use to craft exceptional digital experiences" />
              <ToolboxItems items={toolboxItems} itemsWrapperClass="animate-move-left [animation-duration:30s]" />
              <ToolboxItems items={toolboxItems} className="mt-6 md:mt-0" itemsWrapperClass="animate-move-right [animation-duration:30s]" />
            </Card>
          </div>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2 overflow-hidden">
              <CardHeader title="Beyond The Code" description="Explore my interest and hobbies beyond the digital realm" />
              <div className="relative flex-1 h-full" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute cursor-move"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                    dragMomentum={false}
                    whileDrag={{ scale: 1.1 }}
                  >
                    <span className="font-medium text-gray-950">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1 overflow-hidden">
              <Image src={mapImage} alt="map" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <Image src={smileMemoji} alt="smile" className="size-20" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
