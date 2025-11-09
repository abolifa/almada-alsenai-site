import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const mediaSequence = [
  { type: "image", src: "/images/hero.1.jpeg", duration: 8 },
  { type: "image", src: "/images/hero.2.jpg", duration: 8 },
  { type: "image", src: "/images/hero.3.jpg", duration: 8 },
  { type: "image", src: "/images/hero.4.jpg", duration: 8 },
  { type: "image", src: "/images/hero.5.jpg", duration: 8 },
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
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#fffaf0] via-[#fefcf9] to-[#faf8f4]"
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

      <div className="absolute inset-0 bg-gradient-to-b from-[#fffaf0]/60 via-[#fefcf9]/70 to-[#faf8f4]/90" />

      <div className="relative z-10 text-center px-6">
        <motion.img
          src="/images/logo.png"
          alt="Logo"
          className="mx-auto w-44 md:w-52 h-auto object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />

        <motion.h1
          className="text-center text-4xl md:text-5xl font-bold text-[#1a1a1a]"
          style={{ fontFamily: "Cairo" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          شركة{" "}
          <span className="text-[#b8911a] drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]">
            أنوار القلعة
          </span>
        </motion.h1>

        <motion.p
          className="mt-5 text-lg md:text-xl text-gray-700 max-w-xl mx-auto leading-relaxed"
          style={{ fontFamily: "Cairo" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.6 }}
        >
          شركة ليبية رائدة في استيراد وسائل النقل وقطع الغيار الأصلية، نقدم
          الجودة والموثوقية عبر شراكاتنا مع الموردين العالميين.
        </motion.p>

        <motion.a
          href="#about"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 1 }}
          className="inline-block mt-10 px-10 py-4 rounded-full font-semibold text-white shadow-lg bg-[#d4af37] hover:bg-[#b89020] transition-all duration-300"
        >
          تعرف علينا أكثر
        </motion.a>
      </div>

      <div className="absolute top-0 left-0 w-40 h-40 bg-[#d4af37]/15 blur-3xl rounded-full" />
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-[#b8911a]/10 blur-3xl rounded-full" />
    </section>
  );
};

export default Hero;
