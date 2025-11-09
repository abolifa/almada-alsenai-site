"use client";
import { motion } from "framer-motion";
import { Mail, Phone, Smartphone, MapPin } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSent(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full py-28 md:py-36 bg-gradient-to-b from-[#fffaf0] via-[#fffdfa] to-[#fefcf8] overflow-hidden text-[#1a1a1a]"
    >
     
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(212,175,55,0.08),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.05),transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
       
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#b8911a]"
        >
          تواصل معنا
        </motion.h2>

      
        <div className="grid lg:grid-cols-2 gap-12">
         
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 p-8 rounded-3xl bg-white/70 border border-[#d4af37]/30 shadow-[0_0_25px_rgba(212,175,55,0.1)] backdrop-blur-sm"
          >
            <input
              name="name"
              type="text"
              placeholder="الاسم الكامل"
              value={formData.name}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded-lg bg-transparent border border-[#d4af37]/30 placeholder:text-gray-500 focus:outline-none focus:border-[#d4af37]"
            />
            <input
              name="email"
              type="email"
              placeholder="البريد الإلكتروني"
              value={formData.email}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded-lg bg-transparent border border-[#d4af37]/30 placeholder:text-gray-500 focus:outline-none focus:border-[#d4af37]"
            />
            <input
              name="phone"
              type="text"
              placeholder="رقم الهاتف"
              value={formData.phone}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg bg-transparent border border-[#d4af37]/30 placeholder:text-gray-500 focus:outline-none focus:border-[#d4af37]"
            />
            <textarea
              name="message"
              rows={6}
              placeholder="أدخل رسالتك هنا..."
              value={formData.message}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded-lg bg-transparent border border-[#d4af37]/30 placeholder:text-gray-500 focus:outline-none focus:border-[#d4af37] resize-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="mt-2 bg-[#d4af37] hover:bg-[#b89020] text-white font-semibold py-3 rounded-lg shadow-lg transition-all duration-300"
            >
              {loading
                ? "جاري الإرسال..."
                : sent
                ? "✅ تم الإرسال بنجاح"
                : error
                ? "حدث خطأ! حاول مجددًا"
                : "إرسال الرسالة"}
            </button>
          </motion.form>

         
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 justify-center"
          >
            <div className="p-8 rounded-3xl bg-white/70 border border-[#d4af37]/30 shadow-[0_0_25px_rgba(212,175,55,0.1)] backdrop-blur-sm space-y-5">
              <h3 className="text-2xl font-bold text-[#b8911a] mb-6 text-center">
                بيانات التواصل الرسمية
              </h3>

              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#b8911a]" />
                <p className="text-gray-700 text-sm">
                  مصراتة - ليبيا | بالقرب من الطريق الدائري الرابع
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Smartphone className="w-5 h-5 text-[#b8911a]" />
                <a
                  href="tel:+218912160618"
                  dir="ltr"
                  className="text-gray-700 text-sm underline hover:text-[#b8911a]"
                >
                  +218 91 216 0618
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#b8911a]" />
                <a
                  href="tel:+218512160618"
                  dir="ltr"
                  className="text-gray-700 text-sm underline hover:text-[#b8911a]"
                >
                  +218 51 216 0618
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#b8911a]" />
                <a
                  href="mailto:info@anwar-alqalaa.com.ly"
                  className="text-gray-700 text-sm underline hover:text-[#b8911a]"
                >
                  info@anwar-alqalaa.com.ly
                </a>
              </div>

              <div className="pt-4 text-center border-t border-[#d4af37]/20">
                <p className="text-sm text-gray-600">
                  أوقات العمل:{" "}
                  <span className="text-[#b8911a]">09:00 - 18:00</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
