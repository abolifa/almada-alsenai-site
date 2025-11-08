import { motion } from "framer-motion";
import ServiceSection from "./service-section";

const Services = () => {
  return (
    <section
      id="services"
      className="relative w-full bg-linear-to-b from-background via-muted/20 to-background overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(202,56,51,0.08),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(42,44,111,0.1),transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 py-24 md:py-32 text-center">
        {/* Animated Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-custom2 mb-6"
        >
          خدماتنا
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-muted-foreground leading-relaxed text-lg"
        >
          نقدم مجموعة شاملة من الحلول المتكاملة في مجال أنظمة الألومنيوم والـPVC
          لتلبية احتياجات المشاريع السكنية والتجارية والصناعية وفق أعلى معايير
          الجودة.
        </motion.p>
      </div>

      {/* Service Sections */}
      <div className="relative z-10">
        <ServiceSection
          id="windows"
          title="تصنيع الأبواب والنوافذ"
          description="تصميم وتصنيع أنظمة الألومنيوم والـPVC بمواصفات أوروبية عالية الجودة، مع خيارات متعددة للألوان والعزل الحراري والصوتي، لتحقيق أفضل أداء ووظيفة جمالية."
          image="/images/services/service-1.webp"
          color="rgba(202,56,51,0.9)"
        />

        <ServiceSection
          id="facades"
          title="الواجهات الزجاجية"
          description="تنفيذ أنظمة الواجهات الزجاجية الحديثة (Curtain Wall) بمختلف المقاسات والتصاميم الهندسية، باستخدام أفضل المواد التي تضمن العزل الحراري والصوتي والمتانة."
          image="/images/services/service-2.jpg"
          color="rgba(42,44,111,0.9)"
          reversed
        />

        <ServiceSection
          id="partitions"
          title="تقسيمات المكاتب"
          description="نقدم حلول تقسيم مكاتب مرنة وعصرية من الألومنيوم والزجاج، تمنح المساحات طابعاً أنيقاً ومنظماً يعزز بيئة العمل الإنتاجية."
          image="/images/services/service-3.webp"
          color="rgba(202,56,51,0.9)"
        />

        <ServiceSection
          id="installation"
          title="التوريد والتركيب والصيانة"
          description="فريقنا الفني المتخصص يقدم خدمات التوريد والتركيب والصيانة لجميع المشاريع مع التزام كامل بالجودة والدقة في التنفيذ."
          image="/images/services/service-4.jpg"
          color="rgba(42,44,111,0.9)"
          reversed
        />
      </div>
    </section>
  );
};

export default Services;
