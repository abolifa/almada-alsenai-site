"use client";
import { motion } from "framer-motion";
import { FaFacebookF, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";
import { toast } from "sonner";

const Footer = () => {
  const [email, setEmail] = useState("");

  const quickLinks = [
    { label: "الرئيسية", href: "#hero" },
    { label: "من نحن", href: "#about" },
    { label: "خدماتنا", href: "#services" },
    { label: "تواصل معنا", href: "#contact" },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("تم الاشتراك بنجاح في النشرة الإخبارية!");
    setEmail("");
  };

  return (
    <footer
      dir="rtl"
      className="relative w-full bg-gradient-to-b from-[#fffaf0] via-[#fefcf9] to-[#faf8f4] border-t border-[#d4af37]/30 pt-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.08),transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-5"
        >
          <img
            src="/images/logo.png"
            alt="شركة أنوار القلعة"
            className="w-36 md:w-44 h-auto drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]"
          />
          <p className="text-gray-700 leading-relaxed max-w-xs text-sm">
            <span className="font-semibold text-[#b8911a]">
              شركة أنوار القلعة
            </span>{" "}
            لاستيراد وسائل النقل وملحقاتها – نعمل على توفير سيارات وقطع غيار
            أصلية من كبرى الشركات العالمية بمعايير الجودة والثقة.
          </p>
          <div className="flex gap-3 pt-3">
            {[
              {
                href: "https://www.facebook.com/",
                icon: <FaFacebookF />,
                label: "Facebook",
              },
              {
                href: "mailto:info@anwar-alqalaa.com.ly",
                icon: <FaEnvelope />,
                label: "البريد الإلكتروني",
              },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 bg-[#d4af37] flex items-center justify-center rounded-full text-white hover:bg-[#b89020] transition-all shadow-md"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h4 className="text-xl font-bold text-[#b8911a] mb-5">روابط سريعة</h4>
          <ul className="space-y-3 text-gray-600">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="flex items-center gap-2 hover:text-[#b8911a] transition-all duration-200"
                >
                  <span className="inline-block w-2 h-2 bg-[#d4af37] rounded-full"></span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h4 className="text-xl font-bold text-[#b8911a] mb-5">
            معلومات التواصل
          </h4>
          <ul className="space-y-4 text-gray-700 text-sm">
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#b8911a]" />
              <a
                href="tel:+218912160618"
                dir="ltr"
                className="hover:text-[#b8911a] transition"
              >
                +218 91 216 0618
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#b8911a]" />
              <a
                href="tel:+218512160618"
                dir="ltr"
                className="hover:text-[#b8911a] transition"
              >
                +218 51 216 0618
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[#b8911a]" />
              <a
                href="mailto:info@anwar-alqalaa.com.ly"
                className="hover:text-[#b8911a] transition"
              >
                info@anwar-alqalaa.com.ly
              </a>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col justify-between"
        >
          <div>
            <h4 className="text-xl font-bold text-[#b8911a] mb-4">
              اشترك في نشرتنا
            </h4>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              تصلك آخر العروض وأخبار السيارات الجديدة مباشرة إلى بريدك
              الإلكتروني.
            </p>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row rounded-lg overflow-hidden border border-[#d4af37]/30 bg-white/60 shadow-sm focus-within:border-[#d4af37] transition-all"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 px-4 py-3 text-sm bg-transparent text-gray-700 placeholder:text-gray-500 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#d4af37] hover:bg-[#b89020] text-white px-6 py-3 text-sm font-medium transition-all duration-300"
              >
                اشترك
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      <div className="mt-20 text-center text-sm text-white bg-[#b8911a] py-5 shadow-[0_-4px_10px_rgba(212,175,55,0.3)]">
        © {new Date().getFullYear()} شركة أنوار القلعة – جميع الحقوق محفوظة.
      </div>
    </footer>
  );
};

export default Footer;
