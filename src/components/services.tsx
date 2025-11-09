import { motion } from "framer-motion";
import ServiceSection from "./service-section";

const Services = () => {
  return (
    <section
      id="services"
      className="relative w-full bg-gradient-to-b from-[#faf9f7] via-[#fffefc] to-[#f8f6f2] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.07),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.05),transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 py-24 md:py-32 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-6 tracking-tight"
        >
          خدماتنا
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-gray-600 leading-relaxed text-lg"
        >
          نقدم في شركة{" "}
          <span className="text-[#d4af37] font-semibold">أنوار القلعة</span>{" "}
          مجموعة متكاملة من خدمات استيراد السيارات وقطع الغيار والشحن اللوجستي،
          بتجربة تجمع بين الاحترافية والجودة.
        </motion.p>
      </div>

      <div className="relative z-10 space-y-12">
        <ServiceSection
          id="cars"
          title="استيراد السيارات"
          description="نوفر سيارات حديثة ومستعملة من أشهر العلامات التجارية العالمية، مع متابعة كاملة لإجراءات الشحن والتسليم حتى وصولها إلى عملائنا داخل ليبيا."
          image="/images/services/ser.1.jpg"
          color="rgba(212,175,55,0.9)"
        />

        <ServiceSection
          id="parts"
          title="استيراد قطع الغيار الأصلية"
          description="نقدم مجموعة واسعة من قطع الغيار الأصلية والمضمونة، تشمل الميكانيكية والكهربائية والإلكترونية، لتلبية احتياجات الأفراد وورش الصيانة والشركات."
          image="/images/services/ser.2.jpg"
          color="rgba(26,26,26,0.9)"
          reversed
        />

        <ServiceSection
          id="logistics"
          title="الشحن والتخليص الجمركي"
          description="فريقنا المتخصص يتولى عمليات الشحن والتخليص الجمركي بدقة واحترافية عالية، لضمان سرعة التسليم وسلامة الشحنات من المصدر إلى الوجهة."
          image="/images/services/ser3.jpg"
          color="rgba(212,175,55,0.9)"
        />

        <ServiceSection
          id="contracts"
          title="عروض توريد خاصة"
          description="نوفر حلولًا تجارية مخصصة للشركات والمؤسسات، تشمل التوريد بالجملة، والعقود السنوية بأسعار تنافسية وخدمات شاملة."
          image="/images/services/ser.4.jpg"
          color="rgba(26,26,26,0.9)"
          reversed
        />
      </div>

      <div className="text-center mt-20 mb-12 relative z-10">
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-block px-12 py-4 rounded-full text-white font-semibold text-lg shadow-lg bg-[#d4af37] hover:bg-[#b89020] transition-all duration-300"
        >
          تواصل معنا لمزيد من التفاصيل
        </motion.a>
      </div>
    </section>
  );
};

export default Services;
