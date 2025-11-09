import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const About = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = ["/images/about.1.jpg", "/images/about.2.jpg"];

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section
      id="about"
      className="relative w-full py-28 md:py-36 bg-gradient-to-b from-[#fffaf0] via-[#fefcf9] to-[#faf8f4] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(212,175,55,0.08),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.06),transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-7"
        >
          <div className="inline-block bg-[#d4af37]/10 text-[#b8911a] font-semibold px-5 py-2 rounded-full text-sm tracking-wide">
            منذ تأسيسها
          </div>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[#1a1a1a]">
            من نحن
          </h2>

          <p className="text-base text-gray-700 text-justify leading-relaxed">
            تأسست{" "}
            <span className="font-semibold text-[#b8911a]">
              شركة أنوار القلعة لاستيراد وسائل النقل وملحقاتها
            </span>{" "}
            لتكون من الشركات الليبية الرائدة في مجال استيراد السيارات وقطع
            الغيار من أبرز الموردين العالميين. تلتزم الشركة بتقديم منتجات أصلية
            عالية الجودة مع خدمات موثوقة تغطي جميع أنحاء ليبيا.
          </p>

          <p className="text-base text-gray-700 text-justify leading-relaxed">
            رؤيتنا أن نكون الوجهة الأولى في ليبيا لاستيراد وسائل النقل
            وملحقاتها، عبر بناء شراكات قوية مع الموردين العالميين، وتقديم تجربة
            مميزة لعملائنا ترتكز على الجودة والشفافية والالتزام.
          </p>

          <a
            href="#services"
            className="px-12 py-3 bg-[#d4af37] text-white font-semibold rounded-full shadow-lg hover:bg-[#b89020] transition-all duration-300"
          >
            اكتشف خدماتنا
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <div className="relative w-full max-w-lg h-[440px] cursor-pointer">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15),transparent_70%)] blur-2xl rounded-full" />

            <div
              onClick={() => openLightbox(0)}
              className="absolute top-0 right-0 w-[80%] h-[80%] rounded-3xl overflow-hidden shadow-2xl border border-[#d4af37]/30 transform rotate-1 hover:scale-[1.03] transition"
            >
              <img
                src={images[0]}
                alt="صورة الشركة"
                className="object-cover w-full h-full brightness-95 hover:brightness-100 transition-all"
              />
            </div>

            <div
              onClick={() => openLightbox(1)}
              className="absolute bottom-0 left-0 w-[65%] h-[65%] rounded-3xl overflow-hidden shadow-xl border border-[#d4af37]/30 transform -rotate-2 translate-x-4 translate-y-6 hover:scale-[1.03] transition"
            >
              <img
                src={images[1]}
                alt="ورشة العمل"
                className="object-cover w-full h-full brightness-95 hover:brightness-100 transition-all"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-[#d4af37]/20 blur-2xl" />
            <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-[#b8911a]/20 blur-2xl" />
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50"
          >
            <motion.div
              key={currentIndex}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative max-w-3xl w-[90%] aspect-video rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={images[currentIndex]}
                alt="عرض الصورة"
                className="object-cover w-full h-full"
              />
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white bg-black/60 hover:bg-black/80 rounded-full p-2 transition"
              >
                ✕
              </button>
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-3xl bg-black/40 hover:bg-black/70 rounded-full px-3 pb-2"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-3xl bg-black/40 hover:bg-black/70 rounded-full px-3 pb-2"
              >
                <ChevronRight />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;
