import { motion } from 'framer-motion'
import { Zap, Shield, Globe, Smartphone, Rocket, Heart } from 'lucide-react'
import Container from '../components/Container'
import Card from '../components/Card'

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Experience blazing-fast performance with our optimized infrastructure.',
    color: 'text-yellow-500',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Your data is protected with enterprise-grade security measures.',
    color: 'text-green-500',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Scale your business worldwide with our global infrastructure.',
    color: 'text-blue-500',
  },
  {
    icon: Smartphone,
    title: 'Mobile First',
    description: 'Perfect experience on all devices with our responsive design.',
    color: 'text-purple-500',
  },
  {
    icon: Rocket,
    title: 'Easy Integration',
    description: 'Seamlessly integrate with your existing tools and workflows.',
    color: 'text-pink-500',
  },
  {
    icon: Heart,
    title: '24/7 Support',
    description: 'Get help whenever you need it with our dedicated support team.',
    color: 'text-red-500',
  },
]

const Features = () => {
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
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to succeed, all in one place
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} delay={index * 0.1} className="p-6">
                <div className={`${feature.color} mb-4`}>
                  <Icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default Features



