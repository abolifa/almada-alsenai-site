"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, X, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "مجموعة فيلات سكنية – مصراتة",
    location: "مصراتة، ليبيا",
    images: [
      "/images/projects/1/1.jpg",
      "/images/projects/1/2.jpg",
      "/images/projects/1/3.jpg",
    ],
  },
  {
    title: "مبنى شركة الكهرباء – سرت",
    location: "سرت، ليبيا",
    images: [
      "/images/projects/2/1.jpg",
      "/images/projects/2/2.jpg",
      "/images/projects/2/3.jpg",
      "/images/projects/2/4.jpg",
      "/images/projects/2/5.jpg",
      "/images/projects/2/6.jpg",
      "/images/projects/2/7.jpg",
      "/images/projects/2/8.jpg",
    ],
  },
  {
    title: "مبنى تجاري – بنغازي",
    location: "شارع فينيسيا، بنغازي، ليبيا",
    images: [
      "/images/projects/3/4.jpg",
      "/images/projects/3/2.jpg",
      "/images/projects/3/3.jpg",
      "/images/projects/3/1.jpg",
    ],
  },
];

const Projects = () => {
  const [lightbox, setLightbox] = useState<{
    projectIndex: number;
    imageIndex: number;
  } | null>(null);

  const handleOpen = (projectIndex: number, imageIndex = 0) =>
    setLightbox({ projectIndex, imageIndex });

  const handleClose = () => setLightbox(null);

  const handleNext = () => {
    if (!lightbox) return;
    const project = projects[lightbox.projectIndex];
    setLightbox({
      projectIndex: lightbox.projectIndex,
      imageIndex: (lightbox.imageIndex + 1) % project.images.length,
    });
  };

  const handlePrev = () => {
    if (!lightbox) return;
    const project = projects[lightbox.projectIndex];
    setLightbox({
      projectIndex: lightbox.projectIndex,
      imageIndex:
        (lightbox.imageIndex - 1 + project.images.length) %
        project.images.length,
    });
  };

  return (
    <section
      id="projects"
      dir="rtl"
      className="relative w-full py-28 md:py-36 bg-linear-to-b from-background via-muted/20 to-background overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(42,44,111,0.1),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(202,56,51,0.08),transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-custom2 mb-6">
            بعض أعمالنا المميزة
          </h2>
          <p className="max-w-3xl mx-auto text-muted-foreground text-lg leading-relaxed">
            نفخر بتنفيذ مشاريع متعددة في مختلف المدن الليبية، تشمل الفيلات
            السكنية والمباني التجارية والفنادق والمقرات الإدارية بأعلى معايير
            الجودة والدقة.
          </p>
          <div className="h-[3px] w-24 mx-auto mt-6 bg-linear-to-r from-custom1 to-custom2 rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl overflow-hidden shadow-lg border border-border bg-card hover:shadow-xl transition-all cursor-pointer"
              onClick={() => handleOpen(i)}
            >
              {/* Image */}
              <div className="overflow-hidden">
                <motion.img
                  src={p.images[0]}
                  alt={p.title}
                  className="w-full h-64 md:h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Info */}
              <div className="p-6 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-foreground">
                  {p.title}
                </h3>
                <div className="flex items-center text-muted-foreground text-sm gap-2">
                  <MapPin className="w-4 h-4 text-custom1" />
                  <span>{p.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-999 bg-black/90 backdrop-blur-sm flex items-center justify-center"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 text-white hover:text-custom1 transition"
            >
              <X size={32} />
            </button>

            {/* Navigation */}
            <button
              onClick={handlePrev}
              className="absolute left-6 text-white/80 hover:text-white transition"
            >
              <ChevronLeft size={48} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-6 text-white/80 hover:text-white transition"
            >
              <ChevronRight size={48} />
            </button>

            {/* Image */}
            <motion.img
              key={lightbox.imageIndex}
              src={projects[lightbox.projectIndex].images[lightbox.imageIndex]}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="max-h-[80vh] max-w-[90vw] rounded-2xl shadow-2xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
