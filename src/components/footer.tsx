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
    { label: "رسالتنا", href: "#vision-mission" },
    { label: "خدماتنا", href: "#services" },
    { label: "أعمالنا", href: "#projects" },
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
      className="relative w-full bg-linear-to-b from-background via-muted/10 to-background border-t border-border pt-24 overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(202,56,51,0.08),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(42,44,111,0.08),transparent_70%)] pointer-events-none" />

      {/* Grid Content */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {/* Logo & Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-5"
        >
          <img
            src="/images/logo.png"
            alt="مصنع المدى الصناعي"
            className="w-36 md:w-40 h-auto"
          />
          <p className="text-muted-foreground leading-relaxed max-w-xs">
            تأسس{" "}
            <span className="text-foreground font-medium">
              مصنع المدى الصناعي
            </span>{" "}
            عام 1999 كمؤسسة رائدة في تصنيع أنظمة الألومنيوم والـPVC للأبواب
            والنوافذ.
          </p>
          <div className="flex gap-3 pt-2">
            {[
              {
                href: "https://www.facebook.com/almdaalsenaee",
                icon: <FaFacebookF />,
                label: "Facebook",
              },
              {
                href: "mailto:info@almada.ly",
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
                className="w-10 h-10 bg-custom2 flex items-center justify-center rounded-full border border-border text-white hover:bg-custom1 hover:text-white transition"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h4 className="text-xl font-bold text-custom2 mb-5">روابط سريعة</h4>
          <ul className="space-y-3 text-muted-foreground">
            {quickLinks.map((link) => (
              <li key={link.href} className="flex items-center gap-2">
                <span>
                  <svg
                    className="inline-block w-2 h-2 mr-2 fill-current text-custom1"
                    viewBox="0 0 8 8"
                  >
                    <circle cx="4" cy="4" r="4" />
                  </svg>
                </span>
                <a
                  href={link.href}
                  className="hover:text-custom1 hover:underline transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h4 className="text-xl font-bold text-custom2 mb-5">
            معلومات الاتصال
          </h4>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-custom1" />
              <a
                href="tel:+218913207929"
                dir="ltr"
                className="hover:text-custom1 transition"
              >
                +218 91 320 7929
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-custom1" />
              <a
                href="tel:+218912127403"
                dir="ltr"
                className="hover:text-custom1 transition"
              >
                +218 91 212 7403
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-custom1" />
              <a
                href="mailto:info@almada.ly"
                className="hover:text-custom1 transition"
              >
                info@almada.ly
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col justify-between"
        >
          <div>
            <h4 className="text-xl font-bold text-custom2 mb-4">
              اشترك في النشرة الإخبارية
            </h4>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              تابع أحدث مشاريع مصنع المدى التي تجمع بين التصميم العصري والجودة
              العالية.
            </p>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row rounded-md overflow-hidden border border-border bg-card shadow-sm"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 px-4 py-3 text-sm bg-transparent focus:outline-none"
              />
              <button
                type="submit"
                className="bg-custom2 hover:bg-custom1 text-white px-6 py-3 text-sm font-medium transition"
              >
                اشترك
              </button>
            </form>
          </div>
        </motion.div>
      </div>
      <div className="mt-16 text-center text-sm text-white bg-custom2 border-t border-border py-6 flex items-center justify-center">
        © {new Date().getFullYear()} مصنع المدى الصناعي – جميع الحقوق محفوظة.
      </div>
    </footer>
  );
};

export default Footer;
