"use client"

import { motion } from "framer-motion"
import HeroText from "./HeroText"
import ParallaxText from "./ParallaxText"
import HeroGraphic from "./HeroGraphic"
import DigitalGlobe from "../DigitalGlobe"

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center"
      initial="initial"
      animate="animate"
    >
      <HeroGraphic />
      <HeroText />
      <div className="mt-10 w-full overflow-hidden">
        <ParallaxText direction={500} baseVelocity={-1}>
          Frontend Web Developer
        </ParallaxText>
        <ParallaxText direction={-500} baseVelocity={1}>
          Data Science
        </ParallaxText>
      </div>
      <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute left-0 top-[50%] hidden h-[121px] w-[350px] flex-col items-start justify-center rounded-br-full rounded-tr-full bg-zinc-800 px-5 dark:bg-zinc-100 lg:flex"
      >
        <p className="text-md font-medium text-zinc-200 dark:text-zinc-600">
          Locate
        </p>
        <p className="text-md font-medium text-zinc-200 dark:text-zinc-600">
          in Bogor
        </p>
        <p className="text-md font-medium text-zinc-200 dark:text-zinc-600">
          West Java, Indonesia
        </p>
        <DigitalGlobe className="absolute right-3 top-[10%]" />
      </motion.div>

      {/* Tambahkan Konten untuk CV */}
      <div className="mt-10 flex space-x-4">
        <a
          href="/cv/CV-Muhamad Husni Mubarok.pdf"
          download
          className="rounded-lg bg-black px-10 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-gray-800"
        >
          Download CV
        </a>
      </div>
    </motion.section>
  )
}
