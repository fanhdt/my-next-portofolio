import portalBerita from "@/assets/images/portal berita.png";
import portalberita2 from "@/assets/images/portal_berita_2.png";
import akbarPortofolio from "@/assets/images/akbar_portofolio.png";
import ngaWibu from "@/assets/images/ngawibu.png";
import upahara from "@/assets/images/Upahara.jpeg";
import metaVerse from "@/assets/images/Metaverse.jpeg";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import Link from "next/link";
const portfolioProjects = [
  {
    id: 1,
    company: "Freelance",
    year: "2024",
    title: "Simple News Web",
    results: [{ title: "Simple design" }, { title: "User Friendly" }, { title: "Fully Responsive" }],
    link: "https://firlidystia-investasi-untuk-pemula-gia1udn3b.vercel.app/",
    image: portalBerita,
  },
  {
    id: 2,
    company: "Freelance",
    year: "2024",
    results: [{ title: "Simple design" }, { title: "User Friendly" }, { title: "Fully Responsive" }],
    link: "https://fintech-about.vercel.app/",
    image: portalberita2,
  },
  {
    id: 3,
    company: "Freelance",
    year: "2024",
    title: "Make Portfolio Website",
    results: [{ title: "Modern Design" }, { title: "High Performance" }, { title: "Fully Responsive" }],
    link: "https://akbar-skill.vercel.app/",
    image: akbarPortofolio,
  },
  {
    id: 4,
    company: "Ngawibu",
    year: "2024",
    title: "Make Anime Data List",
    results: [{ title: "Real Database" }, { title: "High Performance" }, { title: "Fully Responsive" }],
    link: "",
    image: ngaWibu,
  },
  {
    id: 5,
    company: "UPAHARA",
    year: "2024",
    title: "Make Game Education",
    results: [{ title: "Fully responsive" }, { title: "High Performance" }, { title: "Good for education" }],
    link: "https://drive.google.com/file/d/1HdFQQ0KT75R8Bcfg9EN0acMg5DOhQqaQ/view?usp=drivesdk",
    image: upahara,
  },
  {
    id: 6,
    company: "PKM DRPTM",
    year: "2024",
    title: "Make Gallery Metaverse",
    results: [{ title: "Build using spatial.io" }, { title: "Acces with web" }, { title: "Good for education" }],
    link: "https://www.spatial.io/s/PKM-Dikti-Pameran-VR-UPI-X-SMKN-14-66e395366d5e25c243332e54?share=3607338139915042933",
    image: metaVerse,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader eyebrow="Real-World Results" title="Featured Projects" description="See how i transfomed concept into engaging digital experiences" />
        <div className="flex md:mt-20 flex-col mt-10 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.id}
              className="px-8 pt-8 pb-0 after:pointer-events-none md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky "
              style={{
                top: `calc(64px + ${projectIndex * 40}px`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span> <span>&bull;</span> <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:mt-4 md:text-4xl">{project.title}</h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li className="flex gap-2 text-sm text-white/50 md:text-base" key={project.id}>
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={project.link}>
                    {" "}
                    <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6">
                      <span>View Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </Link>
                </div>
                <div className="relative">
                  <Image src={project.image} alt="image" className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
