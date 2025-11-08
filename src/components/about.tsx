import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const About = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = ["/images/about-2.png", "/images/about-1.png"];

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
      className="relative w-full py-28 md:py-36 bg-linear-to-b from-background via-muted/20 to-background overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(247,4,30,0.12),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(247,4,30,0.12),transparent_65%)] pointer-events-none" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-7"
        >
          <div className="inline-block bg-custom1/10 text-custom1 font-semibold px-5 py-2 rounded-full text-sm tracking-wide">
            منذ عام 1999
          </div>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-custom2">
            من نحن
          </h2>

          <p className="text-base text-muted-foreground text-justify leading-relaxed">
            تأسس{" "}
            <span className="font-semibold text-foreground">
              مصنع المدى الصناعي
            </span>{" "}
            عام 1999، كأحد أبرز المصانع الليبية المتخصصة في تصنيع أنظمة
            الألومنيوم والـPVC للأبواب والنوافذ والواجهات الزجاجية وتقسيمات
            المكاتب. بفضل الجودة العالية والالتزام بالمعايير الأوروبية والابتكار
            المستمر، أصبح اسم المدى مرادفًا للثقة والحرفية.
          </p>

          <p className="text-base text-muted-foreground text-justify leading-relaxed">
            رؤيتنا هي أن نكون روادًا في السوق الليبي بتقديم منتجات بمعايير
            عالمية، باستخدام أفضل المواد والمعدات، مع تقديم خدمة احترافية شاملة
            قبل وأثناء وبعد البيع لتحقيق رضا العملاء الكامل.
          </p>

          <a
            href="#services"
            className="px-12 py-3 bg-custom1 text-white font-semibold rounded-full shadow-lg hover:bg-custom2 transition-all duration-300"
          >
            اعرف أكثر
          </a>
        </motion.div>

        {/* Collage images */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <div className="relative w-full max-w-lg h-[440px] cursor-pointer">
            {/* Decorative glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(42,44,111,0.15),transparent_70%)] blur-2xl rounded-full" />

            {/* Main Image */}
            <div
              onClick={() => openLightbox(0)}
              className="absolute top-0 right-0 w-[80%] h-[80%] rounded-3xl overflow-hidden shadow-2xl border border-border transform rotate-1 hover:scale-[1.02] transition"
            >
              <img
                src={images[0]}
                alt="مصنع المدى الصناعي"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Overlay Image */}
            <div
              onClick={() => openLightbox(1)}
              className="absolute bottom-0 left-0 w-[65%] h-[65%] rounded-3xl overflow-hidden shadow-xl border border-border transform -rotate-2 translate-x-4 translate-y-6 hover:scale-[1.02] transition"
            >
              <img
                src={images[1]}
                alt="ورشة العمل في مصنع المدى"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Decorative circles */}
            <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-custom1/20 blur-2xl" />
            <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-custom2/20 blur-2xl" />
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
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
