import { motion } from 'framer-motion'

const Card = ({ children, className = '', delay = 0, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Card

