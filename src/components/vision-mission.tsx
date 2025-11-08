import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

const VisionMission = () => {
  return (
    <section
      id="vision-mission"
      className="relative w-full py-28 md:py-36 bg-linear-to-b from-background via-muted/20 to-background overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(247,4,30,0.12),transparent_70%)] pointer-events-none" />
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-custom2 mb-20"
        >
          رؤيتنا ورسالتنا
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative bg-card border border-border rounded-3xl p-10 shadow-xl"
          >
            <div className="absolute -top-10 left-10 bg-custom1 text-white p-5 rounded-full shadow-lg">
              <Eye className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-5 mt-5">
              رؤيتنا
            </h3>
            <p className="text-muted-foreground text-justify leading-relaxed">
              أن نكون الشركة الرائدة في ليبيا في تقديم حلول متكاملة في مجال
              تصنيع أنظمة الألومنيوم والـPVC، مع الالتزام بالجودة العالمية
              والابتكار المستمر، وتطوير منتجات تحقق أعلى مستويات الأداء والجمال
              والاعتمادية لتلبية احتياجات السوق الليبي بمعايير عالمية.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative bg-card border border-border rounded-3xl p-10 shadow-xl"
          >
            <div className="absolute -top-10 left-10 bg-custom1 text-white p-5 rounded-full shadow-lg">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-5 mt-5">
              رسالتنا
            </h3>
            <p className="text-muted-foreground text-justify leading-relaxed">
              تقديم منتجات متميزة بمعايير أوروبية باستخدام أفضل المواد والمعدات
              الحديثة، مع توفير خدمة احترافية قبل وأثناء وبعد البيع، وتحقيق رضا
              العملاء الكامل في كل مرحلة، من التصميم إلى التركيب والصيانة، بما
              يعزز الثقة والاستدامة في علاقاتنا مع عملائنا.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
