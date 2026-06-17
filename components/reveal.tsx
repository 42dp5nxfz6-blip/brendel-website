"use client"

import { motion, type Variants } from "framer-motion"
import type { PropsWithChildren } from "react"

type RevealProps = PropsWithChildren<{
  className?: string
  delay?: number
}>

const variants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut", delay },
  }),
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport= once: true, amount: 0.25 
      custom={delay}
    >
      {children}
    </motion.div>
  )
}
