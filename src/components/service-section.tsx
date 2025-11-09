import { motion } from "framer-motion";

interface ServiceSectionProps {
  id: string;
  title: string;
  description: string;
  image: string;
  reversed?: boolean;
  color?: string;
}

const ServiceSection = ({
  id,
  title,
  description,
  image,
  reversed = false,
  color = "#b8911a",
}: ServiceSectionProps) => {
  return (
    <section
      id={id}
      dir="rtl"
      className={`relative w-full min-h-[90vh] flex flex-col md:flex-row overflow-hidden ${
        reversed ? "md:flex-row-reverse" : ""
      } bg-gradient-to-b from-[#fffaf0] via-[#fefcf9] to-[#faf8f4]`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 1.05, x: reversed ? 100 : -100 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative w-full md:w-1/2"
      >
        <div className="relative w-full h-full group">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center brightness-[0.95] transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#faf8f4]/60 via-transparent to-transparent group-hover:opacity-90 transition duration-700" />

          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700"
            style={{
              boxShadow: `inset 0 0 100px 30px ${color}25`,
            }}
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: reversed ? 100 : -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 flex items-center justify-center px-6 md:px-16 py-16 md:py-24 text-[#1a1a1a]"
      >
        <motion.div
          className="max-w-xl space-y-8 text-right"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15, delayChildren: 0.3 },
            },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-block px-6 py-2 rounded-full text-sm font-semibold tracking-wide border border-[#b8911a]/40 bg-[#b8911a]/10 text-[#b8911a]"
          >
            {id.toUpperCase()}
          </motion.div>

          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
            style={{ color: color }}
          >
            {title}
          </motion.h2>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-gray-700 text-justify leading-relaxed text-base sm:text-lg"
          >
            {description}
          </motion.p>

          <motion.div
            variants={{
              hidden: { scaleX: 0, opacity: 0 },
              visible: { scaleX: 1, opacity: 1 },
            }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="h-[3px] w-24 origin-right rounded-full"
            style={{
              background: `linear-gradient(to left, ${color}, transparent)`,
              boxShadow: `0 0 10px ${color}70`,
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServiceSection;
