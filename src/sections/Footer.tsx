import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "Instagram",
    href: "https://www.instagram.com/fan_hdt02/",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/yourprofile",
  },
  {
    title: "WhatsApp",
    href: "https://wa.me/0895346176572",
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      {/* Background Gradient - Tidak menghalangi klik */}
      <div className="absolute inset-x-0 bottom-0 h-[400px] w-[1600px] left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] pointer-events-none"></div>

      <div className="container relative z-10">
        <div className="border-t md:flex-row md:justify-between border-white/15 py-6 text-sm flex flex-col items-center gap-8">
          <div className="text-white/40">&copy; 2025 All rights reserved</div>
          <nav className="flex md:flex-row md:justify-between flex-col items-center gap-8">
            {footerLinks.map((link) => (
              <a href={link.href} key={link.title} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 cursor-pointer text-white hover:text-emerald-300 transition-colors">
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
