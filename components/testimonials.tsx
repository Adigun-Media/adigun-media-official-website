'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TESTIMONIALS } from '@/lib/constants'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay])

  const next = () => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length)
    setIsAutoPlay(false)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
    setIsAutoPlay(false)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance"
          >
            Hear from brands that have transformed with our creative solutions
          </motion.p>
        </div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-background border border-border rounded-2xl p-8 md:p-12"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Testimonial Content */}
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} className="fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-xl text-foreground mb-6 leading-relaxed">"{TESTIMONIALS[current].message}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{TESTIMONIALS[current].name}</p>
                    <p className="text-muted-foreground text-sm">
                      {TESTIMONIALS[current].role} at {TESTIMONIALS[current].company}
                    </p>
                  </div>
                </div>

                {/* Avatar Placeholder */}
                <div className="hidden md:flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-accent/10 flex items-center justify-center text-6xl border-2 border-accent/30">
                    👤
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="p-2 rounded-lg border border-border hover:border-accent hover:text-accent transition-all"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={next}
                className="p-2 rounded-lg border border-border hover:border-accent hover:text-accent transition-all"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Indicators */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrent(idx)
                    setIsAutoPlay(false)
                  }}
                  className={`h-2 rounded-full transition-all ${
                    idx === current ? 'w-8 bg-accent' : 'w-2 bg-border hover:bg-muted-foreground'
                  }`}
                />
              ))}
            </div>

            {/* Autoplay Toggle */}
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="px-4 py-2 rounded-lg border border-border hover:border-accent text-sm font-medium transition-all"
            >
              {isAutoPlay ? 'Pause' : 'Play'}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
