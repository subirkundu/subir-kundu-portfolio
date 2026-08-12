"use client";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const reduce = useReducedMotion();
  return <motion.div initial={reduce ? false : { opacity: 0, y: 14 }} whileInView={reduce ? {} : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: .38, delay }}>{children}</motion.div>;
}
