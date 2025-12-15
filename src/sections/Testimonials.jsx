import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import Container from '../components/Container'
import Card from '../components/Card'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    content:
      "This platform transformed our business operations. The results exceeded our expectations, and the support team is outstanding.",
    rating: 5,
    avatar: '👩‍💼',
  },
  {
    name: 'Michael Chen',
    role: 'Founder, DesignCo',
    content:
      "Best investment we've made this year. The ease of use and powerful features make it a game-changer for our team.",
    rating: 5,
    avatar: '👨‍💻',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director, Growth Labs',
    content:
      "Incredible platform with exceptional customer service. Our productivity has increased significantly since switching.",
    rating: 5,
    avatar: '👩‍🎨',
  },
]

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} delay={index * 0.1} className="p-6 relative">
              <Quote className="w-8 h-8 text-blue-200 absolute top-6 right-6" />
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 relative z-10">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Testimonials



