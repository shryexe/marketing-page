import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import Container from '../components/Container'
import aboutIllustration from '../assets/about-illustration.svg'

const benefits = [
  'Proven track record of success',
  'Expert team of professionals',
  'Cutting-edge technology',
  'Customer-first approach',
  'Scalable solutions',
  'Competitive pricing',
]

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full h-[400px] sm:h-[500px]">
              <motion.div
                whileInView={{ scale: [1, 1.05, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <img
                  src={aboutIllustration}
                  alt="Team collaboration illustration"
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Why Choose <span className="gradient-text">Us?</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We're not just another company. We're your partners in success,
              dedicated to helping you achieve your goals with innovative
              solutions and exceptional service.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our team combines years of industry experience with a passion for
              excellence, ensuring that every project we undertake delivers
              outstanding results.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default About



