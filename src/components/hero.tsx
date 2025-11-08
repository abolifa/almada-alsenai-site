import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const mediaSequence = [
  { type: "image", src: "/images/hero-1.jpeg", duration: 10 },
  { type: "image", src: "/images/hero-2.jpg", duration: 10 },
  { type: "image", src: "/images/hero-4.jpg", duration: 10 },
  { type: "image", src: "/images/hero-3.jpg", duration: 10 },
  // { type: "video", src: "/videos/2.mp4", duration: 10 },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(
      () => setIndex((p) => (p + 1) % mediaSequence.length),
      mediaSequence[index].duration * 1000
    );
    return () => clearTimeout(timer);
  }, [index]);

  const current = mediaSequence[index];

  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {current.type === "image" ? (
          <motion.div
            key={current.src}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${current.src})` }}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        ) : (
          <motion.video
            key={current.src}
            className="absolute inset-0 w-full h-full object-cover"
            src={current.src}
            autoPlay
            muted
            loop
            playsInline
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>

      <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/70 to-black/40" />
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-6 text-center">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="mx-auto w-48 md:w-52 h-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] mb-6"
          />

          <h1
            className="text-center text-3xl text-white"
            style={{
              fontFamily: "Castile",
              fontWeight: 200,
            }}
          >
            المدى الصناعي
          </h1>

          <p
            className="mt-4 text-xl text-white max-w-md mx-auto"
            style={{
              fontFamily: "Castile",
              fontWeight: 400,
            }}
          >
            مصنع المدى الصناعي لصناعة الأبواب والنوافذ من الألومينيوم والبي في
            سي
          </p>

          <a
            href="#about"
            className="inline-block mt-10 px-10 py-4 rounded-full font-semibold text-white shadow-lg bg-[#ca3833] hover:bg-[#2a2c6f] transition"
          >
            اكتشف المزيد
          </a>
        </div>
      </div>
    </section>
  );
};
export default Hero;
