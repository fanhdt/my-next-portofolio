import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import Image from "next/image";
import React, { Fragment } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";

const testimonials = [
  {
    name: "Muhammad Akbar",
    position: "Student @ Indonesia University of Education",
    text: "The frontend of this website is truly impressive! The design is clean, responsive, and user-friendly. Every detail is well thought out, making the user experience seamless and enjoyable.",
    avatar: memojiAvatar1,
  },
  {
    name: "Amethyst Hasna",
    position: "Student @ Indonesia University of Education",
    text: "Irfan has a unique way of writing efficient code. He optimizes performance without sacrificing design quality. The website runs smoothly and loads quickly, even on lower-end devices.",
    avatar: memojiAvatar2,
  },
  {
    name: "Salman Fariz",
    position: "Student @ Indonesia University of Education",
    text: "The website is fully responsive and works perfectly on any device. Whether on a phone, tablet, or desktop, everything adjusts flawlessly. Great job!",
    avatar: memojiAvatar3,
  },
  {
    name: "Firli Dystia",
    position: "Student @ Pajajaran Polytechnic",
    text: "Irfan not only delivers a great-looking frontend but also ensures that it meets client needs perfectly. He listens carefully to feedback and implements changes effectively. Highly recommended!",
    avatar: memojiAvatar4,
  },
  {
    name: "Niken Yunita",
    position: "Student @ Indonesia University of Education",
    text: "What I love most is how Irfan solves bugs and issues efficiently. He quickly identifies problems and fixes them without affecting other features. His debugging skills are top-notch!",
    avatar: memojiAvatar2,
  },
  {
    name: "Qani Mulya Walagri",
    position: "Student @ Indonesia University of Education",
    text: "What I love most is how Irfan solves bugs and issues efficiently. He quickly identifies problems and fixes them without affecting other features. His debugging skills are top-notch!",
    avatar: memojiAvatar2,
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonial" className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader eyebrow="Happy Clients" title="What Clients Say About Me" description="See what our clients say about our work" />
        <div
          className="mt-12 lg:mt-20 flex overflow-x-clip py-4 -my-4"
          style={{ maskImage: "linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
        >
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card key={testimonial.name} className="max-w-xs p-6 md:p-8 md:max-w-md hover:-rotate-3 transition duration-300">
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex rounded-full justify-center items-center flex-shrink-0">
                        <Image className="max-h-full" src={testimonial.avatar} alt={testimonial.name} />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">{testimonial.position}</div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
