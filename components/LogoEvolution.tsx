'use client';

import { motion } from 'motion/react';
import {
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
} from 'lucide-react';

export default function LogoEvolution() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-blue-50 rounded-full blur-[120px] opacity-60" />
      <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-green-50 rounded-full blur-[100px] opacity-40" />

      <div className="container-custom relative z-10">

        {/* HEADER */}
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">

          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-bold uppercase tracking-[0.25em] text-xs sm:text-sm mb-4 block"
          >
            BRAND EVOLUTION
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl

              font-black
              text-dark

              leading-tight
              mb-6
            "
          >
            From Our Original Identity to a{' '}
            <span className="text-primary italic">
              Modern Digital Brand
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="
              text-gray-600
              text-base
              sm:text-lg

              leading-relaxed

              max-w-3xl
              mx-auto
            "
          >
            As Grehasoft evolved from a growing startup into a modern digital
            solutions company, our brand identity evolved alongside us. Our
            redesigned logo reflects innovation, scalability, clarity, and the
            forward-thinking approach that defines our work today.
          </motion.p>
        </div>

        {/* EVOLUTION SECTION */}
        <div className="max-w-6xl mx-auto relative">

          {/* DESKTOP LINE */}
          <div
            className="
              hidden
              lg:block

              absolute
              top-1/2
              left-1/2

              -translate-x-1/2
              -translate-y-1/2

              w-[26%]
              h-[2px]

              bg-gradient-to-r
              from-primary/10
              via-accent/40
              to-primary/10

              z-0
            "
          >
            <motion.div
              initial={{ left: 0 }}
              animate={{ left: '100%' }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="
                absolute
                top-1/2
                -translate-y-1/2

                w-4
                h-4

                bg-primary
                rounded-full

                blur-sm
                opacity-60

                shadow-[0_0_15px_rgba(26,183,40,0.5)]
              "
            />
          </div>

          {/* MAIN FLEX */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-12 relative">

            {/* OLD LOGO */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full max-w-[360px]"
            >
              <div
                className="
                  bg-white

                  p-8
                  sm:p-10

                  rounded-[2.5rem]

                  border
                  border-gray-100

                  shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)]

                  flex
                  flex-col
                  items-center

                  group

                  hover:shadow-xl

                  transition-all
                  duration-500
                "
              >
                {/* LOGO */}
                <div
                  className="
                    w-40
                    h-28

                    sm:w-48
                    sm:h-32

                    flex
                    items-center
                    justify-center

                    grayscale
                    opacity-80

                    group-hover:grayscale-0
                    group-hover:opacity-100

                    transition-all
                    duration-500
                  "
                >
                  <img
                    src="/images/old.png"
                    alt="Old Grehasoft Logo"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* TEXT */}
                <div className="mt-8 pt-8 border-t border-gray-100 w-full text-center">

                  <span
                    className="
                      text-gray-400
                      text-[10px]
                      font-bold

                      uppercase
                      tracking-[0.2em]
                    "
                  >
                    2012 — Original Identity
                  </span>

                  <p className="text-gray-500 text-sm mt-3">
                    Foundation & Growth Focused
                  </p>
                </div>
              </div>
            </motion.div>

            {/* ARROW */}
            <div className="flex items-center justify-center relative self-center z-20">

              {/* MOBILE LINE */}
              <div
                className="
                  lg:hidden

                  absolute
                  h-16
                  w-[2px]

                  bg-gradient-to-b
                  from-primary/10
                  via-accent/40
                  to-primary/10
                "
              />

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="
                  w-14
                  h-14

                  rounded-full

                  bg-white

                  border
                  border-gray-100

                  shadow-lg

                  flex
                  items-center
                  justify-center

                  text-primary
                "
              >
                <ArrowRight className="w-6 h-6 rotate-90 lg:rotate-0" />
              </motion.div>
            </div>

            {/* NEW LOGO */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full max-w-[360px]"
            >
              <div className="relative group">

                {/* GLOW */}
                <div
                  className="
                    absolute
                    inset-0

                    bg-primary/20

                    rounded-[2.5rem]

                    blur-[30px]

                    opacity-0
                    group-hover:opacity-100

                    transition-opacity
                    duration-700
                  "
                />

                {/* CARD */}
                <div
                  className="
                    relative

                    bg-white/60
                    backdrop-blur-xl

                    p-8
                    sm:p-10

                    rounded-[2.5rem]

                    border
                    border-primary/10

                    shadow-[0_20px_60px_-15px_rgba(26,183,40,0.15)]

                    flex
                    flex-col
                    items-center

                    hover:scale-105

                    transition-all
                    duration-500

                    overflow-hidden
                  "
                >
                  {/* ROTATING DECOR */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className="
                      absolute
                      -top-10
                      -right-10

                      w-24
                      h-24

                      rounded-full

                      bg-accent/10

                      border
                      border-accent/20
                      border-dashed
                    "
                  />

                  {/* LOGO */}
                  <div
                    className="
                      w-40
                      h-28

                      sm:w-48
                      sm:h-32

                      flex
                      items-center
                      justify-center
                    "
                  >
                    <img
                      src="/images/logo.png"
                      alt="New Grehasoft Logo"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  {/* TEXT */}
                  <div className="mt-8 pt-8 border-t border-primary/10 w-full text-center">

                    <span
                      className="
                        text-primary
                        text-[10px]
                        font-bold

                        uppercase
                        tracking-[0.2em]
                      "
                    >
                      2025 — Modern Grehasoft
                    </span>

                    <p className="text-gray-500 text-sm mt-3">
                      Scalability, Innovation, Impact
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* DESIGN PHILOSOPHY */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="
            max-w-5xl
            mx-auto

            mt-20

            p-6
            sm:p-8
            md:p-12

            bg-gray-50/60

            rounded-[2.5rem]

            border
            border-gray-100

            backdrop-blur-sm

            shadow-sm

            relative
          "
        >
          {/* LABEL */}
          <div
            className="
              absolute
              top-0
              left-1/2

              -translate-x-1/2
              -translate-y-1/2

              px-5
              py-2

              rounded-full

              bg-dark
              text-white

              text-[10px]
              font-bold

              uppercase
              tracking-[0.2em]

              shadow-xl
            "
          >
            Design Philosophy
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* ITEM */}
            <div className="flex flex-col gap-3">

              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>

              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
                Innovation
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                Cleaner lines and modern geometry reflect our agile approach to technology.
              </p>
            </div>

            {/* ITEM */}
            <div className="flex flex-col gap-3">

              <div className="w-10 h-10 rounded-xl bg-green-100 text-green-600 flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>

              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
                Efficiency
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                The vibrant green accent represents sustainability and high performance.
              </p>
            </div>

            {/* ITEM */}
            <div className="flex flex-col gap-3">

              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>

              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
                Clarity
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                Bold typography and simplified structure improve readability and trust.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}