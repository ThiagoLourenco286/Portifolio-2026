'use client'

import { motion } from "motion/react"

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ ease: 'backInOut', duration: 0.7 }}
        >
            {children}
        </motion.div>
    )
}
