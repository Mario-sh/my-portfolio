import { motion } from "framer-motion";
import { contactItems, resume } from "../data/userData";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const Contact = () => {
  const { t, lang } = useLanguage();

  return (
    <section id="contact" className="w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-48 min-h-screen text-foreground relative z-10 scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl"
      >
        <div className="flex flex-col items-center mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 text-foreground tracking-tighter"
          >
            {t.contact.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-base md:text-lg lg:text-xl text-muted max-w-2xl mx-auto font-medium"
          >
            {t.contact.subheading}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* LEFT SIDE - MESSAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left space-y-4"
          >
            <h3 className="text-3xl md:text-5xl font-black leading-tight text-foreground tracking-tighter">
              {t.contact.headlineStart}
              <span className="text-blue-600 dark:text-blue-500 text-glow">{t.contact.headlineAccent}</span>
              {t.contact.headlineEnd}
            </h3>

            <p className="text-lg md:text-2xl text-muted font-medium max-w-md leading-relaxed">
              {t.contact.body}
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-wrap gap-2">
              <a
                href="mailto:ajseven@outlook.in"
                className="px-6 py-3.5 rounded-full bg-foreground text-background font-black text-base transition-all duration-300 hover:opacity-90 hover:-translate-y-1 flex items-center gap-2 group"
              >
                {t.contact.ctaContact}
              </a>
              <a
                href={resume[lang]}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-foreground border border-border rounded-full font-black text-base hover:bg-card hover:-translate-y-1 transition-all duration-300"
              >
                {t.contact.ctaResume} <ArrowUpRight size={18} />
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-4 w-full">
            {contactItems.map(({ icon: Icon, label, value, href }, i) => {
              const CardComponent = href ? motion.a : motion.div;

              return (
                <CardComponent
                  key={i}
                  href={href}
                  target={href ? "_blank" : undefined}
                  rel={href ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.4 }}
                  className="group p-5 rounded-3xl border border-border bg-card hover:border-blue-500/30 hover:bg-card-strong transition-all duration-500 flex items-center gap-5 w-full"
                >
                  <div className="p-3 rounded-2xl bg-card border border-border group-hover:scale-110 transition-transform duration-500">
                    <Icon className="text-muted group-hover:text-blue-500 transition-colors" size={20} />
                  </div>

                  <div className="flex-1 flex flex-col items-start text-left">
                    <p className="font-mono font-semibold text-muted uppercase tracking-widest text-[10px] mb-1">
                      {label}
                    </p>
                    <p className="text-base font-bold text-foreground group-hover:text-blue-500 transition-colors truncate w-full">
                      {value}
                    </p>
                  </div>

                  {href && (
                    <div className="text-faint group-hover:text-foreground transition-all duration-300">
                      <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  )}
                </CardComponent>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
