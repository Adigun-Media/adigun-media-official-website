'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { PORTFOLIO_ITEMS } from '@/lib/constants'
import { PortfolioItem } from '@/lib/types'

type Category = 'All' | 'Print' | 'Web' | 'Media' | 'Photography' | 'Video'

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>('All')

  const categories: Category[] = ['All', 'Print', 'Web', 'Media', 'Photography', 'Video']

  const filteredItems = activeCategory === 'All' ? PORTFOLIO_ITEMS : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory)

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance"
          >
            Our Recent Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance"
          >
            Explore our portfolio showcasing diverse projects across creative disciplines
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-secondary text-foreground hover:border-accent border border-transparent'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg aspect-square bg-secondary">
                {/* Placeholder - in production, use actual images */}
                <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">
                      {item.category === 'Print' && '📋'}
                      {item.category === 'Web' && '🌐'}
                      {item.category === 'Media' && '✨'}
                      {item.category === 'Photography' && '📸'}
                      {item.category === 'Video' && '🎬'}
                    </div>
                    <p className="text-muted-foreground">{item.category}</p>
                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                  <h3 className="text-xl font-semibold text-accent mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                  {item.tools && (
                    <div className="flex flex-wrap gap-2 justify-center">
                      {item.tools.map((tool) => (
                        <span key={tool} className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">
                          {tool}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
