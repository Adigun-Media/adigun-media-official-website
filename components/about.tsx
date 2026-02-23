'use client'

import { motion } from 'framer-motion'
import { ABOUT_CONTENT } from '@/lib/constants'

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">About ADIGUN MEDIA</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">{ABOUT_CONTENT.intro}</p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-lg bg-background border border-border"
          >
            <h3 className="text-2xl font-bold text-accent mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">{ABOUT_CONTENT.mission}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-lg bg-background border border-border"
          >
            <h3 className="text-2xl font-bold text-accent mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">{ABOUT_CONTENT.vision}</p>
          </motion.div>
        </div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-foreground mb-6">Our Story</h3>
          <div className="prose prose-invert max-w-none">
            {ABOUT_CONTENT.story.split('\n').map((paragraph, idx) => (
              <p key={idx} className="text-muted-foreground leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h3 className="text-2xl font-bold text-foreground mb-8">Leadership Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {ABOUT_CONTENT.team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center text-5xl border-2 border-accent/30">
                  👨‍💼
                </div>
                <h4 className="font-semibold text-foreground mb-1">{member.name}</h4>
                <p className="text-sm text-accent font-medium mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
