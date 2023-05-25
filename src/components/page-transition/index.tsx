"use client"

import cn from "clsx"
import { motion } from "framer-motion"

export const PageWrapper = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1, ease: [0.17, 0.67, 0.83, 0.67] }}
    className={cn(className)}
  >
    {children}
  </motion.div>
)
