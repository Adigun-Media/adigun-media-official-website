'use client'

import { motion } from 'framer-motion'
import { TRUSTED_COMPANIES } from '@/lib/constants'

export function TrustedBy() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground font-medium mb-12"
        >
          Trusted by leading brands
        </motion.h3>

        {/* Companies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {TRUSTED_COMPANIES.map((company) => (
            <motion.div
              key={company}
              variants={itemVariants}
              className="flex items-center justify-center p-4 rounded-lg border border-border hover:border-accent hover:bg-secondary/50 transition-all group cursor-pointer"
            >
              <div className="text-center">
                <div className="text-3xl mb-2">🏢</div>
                <p className="text-sm font-medium text-muted-foreground group-hover:text-accent transition-colors text-balance">
                  {company}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
