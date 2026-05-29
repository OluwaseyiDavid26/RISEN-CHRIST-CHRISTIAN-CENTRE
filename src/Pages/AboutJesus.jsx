import { motion } from "framer-motion";

// Replace these placeholders with the images the user provides in public/church_images/
const imgTeaching = "/church_images/jesus_teaching.jpg";
const imgMiracle = "/church_images/jesus_miracle.jpg";
const imgResurrection = "/church_images/jesus_resurrection_new.png"; // Generated image

function AboutJesus() {
  return (
    <div className="bg-cream-50 min-h-screen pt-32 pb-24 text-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-gold-400/5 blur-[150px] rounded-full pointer-events-none" />

      {/* Header Section */}
      <section className="px-6 max-w-5xl mx-auto text-center mb-24 relative z-10">
        <motion.p
          className="text-gold-500 text-sm uppercase tracking-widest font-semibold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          The Savior of the World
        </motion.p>
        <motion.h1
          className="text-5xl md:text-7xl font-playfair font-bold mb-8 text-gray-900 leading-[1.05]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          The Life & Ministry of <br />
          <span className="text-gold-500">
            Jesus Christ
          </span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Jesus Christ is the central figure of human history and the cornerstone of our faith. He is the Son of God, sent to earth to teach us how to live, how to love, and ultimately, to offer His life for our salvation.
        </motion.p>
      </section>

      {/* Section 1: The Teacher */}
      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 relative z-10">
        <motion.div
          className="order-2 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-gold-500 text-xs uppercase tracking-widest font-bold mb-3">Divine Wisdom</p>
          <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-6 text-gray-900">
            The Greatest Teacher
          </h2>
          <p className="text-lg text-gray-600 font-light leading-relaxed mb-6">
            Jesus traveled throughout the Holy Land teaching a revolutionary message of love, forgiveness, and grace. Unlike any earthly teacher, He spoke with divine authority, using simple yet profound parables to reveal the mysteries of the Kingdom of Heaven.
          </p>
          <p className="text-lg text-gray-600 font-light leading-relaxed mb-6">
            His most famous discourse, the Sermon on the Mount, challenged the established laws of the time. He taught us to love our enemies, to turn the other cheek, and to find true blessedness in humility and peace.
          </p>
          <ul className="space-y-3 font-medium text-gray-800">
             <li className="flex items-center gap-3"><span className="text-gold-400">✦</span> &ldquo;I am the light of the world.&rdquo; (John 8:12)</li>
             <li className="flex items-center gap-3"><span className="text-gold-400">✦</span> &ldquo;Love your neighbor as yourself.&rdquo; (Mark 12:31)</li>
             <li className="flex items-center gap-3"><span className="text-gold-400">✦</span> &ldquo;Blessed are the pure in heart.&rdquo; (Matthew 5:8)</li>
          </ul>
        </motion.div>
        <motion.div
          className="order-1 lg:order-2 w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white p-2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="w-full h-full rounded-xl overflow-hidden relative group">
             <img src={imgTeaching} alt="Jesus Teaching" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" />
             <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </motion.div>
      </section>

      {/* Section 2: The Miracle Worker */}
      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 relative z-10">
        <motion.div
          className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white p-2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="w-full h-full rounded-xl overflow-hidden relative group">
             <img src={imgMiracle} alt="Jesus performing a miracle" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" />
             <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-gold-500 text-xs uppercase tracking-widest font-bold mb-3">Divine Power</p>
          <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-6 text-gray-900">
            The Miracle Worker
          </h2>
          <p className="text-lg text-gray-600 font-light leading-relaxed mb-6">
            To demonstrate that He was truly the Son of God, Jesus performed countless miracles. He healed the sick, restored sight to the blind, cleansed the lepers, and even raised the dead back to life.
          </p>
          <p className="text-lg text-gray-600 font-light leading-relaxed mb-6">
            Beyond physical healing, His miracles displayed His absolute power over nature—calming raging storms with a word and feeding thousands with a few loaves of bread. Every miracle was an act of profound compassion, pointing humanity toward the ultimate spiritual healing found only in Him.
          </p>
          <div className="p-6 bg-gray-50 border-l-4 border-gold-400 rounded-r-xl">
             <p className="italic text-gray-700 font-playfair text-lg">&ldquo;With man this is impossible, but with God all things are possible.&rdquo; <span className="block text-sm mt-2 text-gray-500 not-italic tracking-wide font-medium">&mdash; Matthew 19:26</span></p>
          </div>
        </motion.div>
      </section>

      {/* Section 3: The Resurrection */}
      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16 relative z-10">
        <motion.div
          className="order-2 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-gold-500 text-xs uppercase tracking-widest font-bold mb-3">Eternal Victory</p>
          <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-6 text-gray-900">
            The Resurrection
          </h2>
          <p className="text-lg text-gray-600 font-light leading-relaxed mb-6">
            The climax of Jesus's earthly ministry was His ultimate sacrifice. He was crucified, taking upon Himself the sins of the world. However, the story did not end at the cross. On the third day, the stone was rolled away, and the tomb was empty.
          </p>
          <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
            Jesus resurrected in glorious victory, conquering death and hell forever. Because He lives, we are offered the gift of eternal life. The Resurrection is the foundation of the Christian faith, bringing hope, redemption, and unending grace to all who believe.
          </p>
          <a href="/sinners" className="btn-primary text-xs">
            Accept Jesus Today
          </a>
        </motion.div>
        <motion.div
          className="order-1 lg:order-2 w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-gold-400/20 bg-white p-2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="w-full h-full rounded-xl overflow-hidden relative group">
             <img src={imgResurrection} alt="The Resurrection" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" />
             <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default AboutJesus;
