import { motion, useReducedMotion } from 'framer-motion'

export default function Reveal({ children, className = '', delay = 0, variant = 'up', ...props }) {
  const reduceMotion = useReducedMotion()
  const initialState = {
    up: { opacity: 0, y: 26 },
    left: { opacity: 0, x: -28 },
    scale: { opacity: 0, y: 18, scale: 0.96 },
  }[variant]

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : initialState}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: reduceMotion ? 0 : 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
