"use client";
import { motion } from "framer-motion";
import { Factory, Mail, Phone, Smartphone, Store } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    company: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=`;
    script.async = true;
    script.onload = () => {
      const map = new google.maps.Map(mapRef.current!, {
        center: { lat: 32.34, lng: 15.07 },
        zoom: 13,
        mapId: "aali_map",
        disableDefaultUI: true,
        styles: [
          {
            featureType: "poi",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ color: "#dddddd" }],
          },
        ],
      });

      const locations = [
        {
          position: { lat: 32.336719520024765, lng: 15.066221599999995 },
          title: "🏭 مصنع المدى الصناعي",
        },
        {
          position: { lat: 32.35245472684797, lng: 15.082709699999997 },
          title: "🏢 صالة العرض",
        },
      ];

      locations.forEach((loc) => {
        const marker = new google.maps.Marker({
          position: loc.position,
          map,
          title: loc.title,
          icon: {
            url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
          },
        });

        const infowindow = new google.maps.InfoWindow({
          content: `<div style="font-family:Tajawal,sans-serif;font-size:14px;color:#333;padding:5px 10px">${loc.title}</div>`,
        });

        marker.addListener("mouseover", () => infowindow.open(map, marker));
        marker.addListener("mouseout", () => infowindow.close());
      });
    };

    document.body.appendChild(script);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const res = await fetch(
        "https://aalialmajdholding.com.ly/contact-mail.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData as any).toString(),
        }
      );
      if (res.ok) {
        setSent(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          company: "",
        });
      } else setError(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full py-28 md:py-36 bg-linear-to-b from-background via-muted/20 to-background overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(202,56,51,0.08),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(42,44,111,0.1),transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-custom2 mb-14"
        >
          تواصل معنا
        </motion.h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 p-8 rounded-3xl bg-card border border-border shadow-xl"
          >
            <input
              name="name"
              type="text"
              placeholder="الاسم"
              value={formData.name}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded-lg bg-background border border-border placeholder:text-muted-foreground focus:outline-none focus:border-custom1"
            />
            {/* honeypot */}
            <input
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              autoComplete="off"
              tabIndex={-1}
              style={{
                position: "absolute",
                left: "-9999px",
                width: "1px",
                height: "1px",
              }}
            />
            <input
              name="email"
              type="email"
              placeholder="البريد الإلكتروني"
              value={formData.email}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded-lg bg-background border border-border placeholder:text-muted-foreground focus:outline-none focus:border-custom1"
            />
            <input
              name="phone"
              type="text"
              placeholder="رقم الهاتف"
              value={formData.phone}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg bg-background border border-border placeholder:text-muted-foreground focus:outline-none focus:border-custom1"
            />
            <textarea
              name="message"
              rows={8}
              placeholder="الرسالة"
              value={formData.message}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded-lg bg-background border border-border placeholder:text-muted-foreground focus:outline-none focus:border-custom1 resize-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="mt-2 bg-custom2 hover:bg-custom1 text-white font-semibold py-3 rounded-lg shadow-lg transition-all"
            >
              {loading
                ? "جاري الإرسال..."
                : sent
                ? "تم الإرسال بنجاح"
                : error
                ? "حدث خطأ، حاول مرة أخرى"
                : "إرسال"}
            </button>
          </motion.form>

          {/* Contact Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="p-8 rounded-3xl bg-card border border-border shadow-xl space-y-4">
              <h3 className="text-xl font-bold text-custom1 mb-4">
                معلومات الاتصال
              </h3>
              <div className="flex items-center gap-2">
                <Store className="w-5 h-5 text-custom2" />
                <p className="text-muted-foreground">
                  الطريق الدائري الرابع بجوار عمارات 9 يوليو. مصراتة | ليبيا
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Factory className="w-5 h-5 text-custom2" />
                <p className="text-muted-foreground">
                  بالقرب من نادي ذات الرمال للفروسية. 11 يوليو. مصراتة | ليبيا
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-custom2" />
                <a
                  href="tel:+218913207929"
                  dir="ltr"
                  className="text-muted-foreground underline underline-offset-2 hover:text-custom2"
                >
                  +218 91 320 7929
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-custom2" />
                <a
                  href="tel:+218912127403"
                  dir="ltr"
                  className="text-muted-foreground underline underline-offset-2 hover:text-custom2"
                >
                  +218 91 212 7403
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-custom2" />
                <a
                  href="mailto:info@aalialmajdholding.com.ly"
                  className="text-muted-foreground underline underline-offset-2 hover:text-custom2"
                >
                  info@aalialmajdholding.com.ly
                </a>
              </div>
            </div>

            <div
              ref={mapRef}
              className="w-full h-[350px] rounded-3xl border border-border shadow-xl overflow-hidden"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
