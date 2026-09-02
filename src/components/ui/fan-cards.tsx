import * as React from "react"
import { motion, type Variants } from "framer-motion"

import { cn } from "@/lib/utils"

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const card: Variants = {
  hidden: { opacity: 0, x: -16, rotate: -4, scale: 0.98 },
  show: {
    opacity: 1,
    x: 0,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
}

interface FanCardsProps {
  className?: string
  children: React.ReactNode
}

function FanCards({ className, children }: FanCardsProps) {
  return (
    <motion.div
      className={cn("p-cards", className)}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  )
}

interface FanCardProps {
  className?: string
  children: React.ReactNode
}

function FanCard({ className, children }: FanCardProps) {
  return (
    <motion.div className={cn("p-card", className)} variants={card}>
      {children}
    </motion.div>
  )
}

export { FanCards, FanCard }
