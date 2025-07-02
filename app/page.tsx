'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

const services = [
  {
    title: 'Executive Coaching',
    description: 'Transform your leadership approach with personalized coaching designed to unlock your full potential.',
    icon: '🎯',
    features: ['1-on-1 Sessions', 'Leadership Assessment', 'Goal Setting & Accountability', '360-Degree Feedback']
  },
  {
    title: 'Keynote Speaking',
    description: 'Inspiring presentations that motivate teams and drive organizational change.',
    icon: '🎤',
    features: ['Custom Content', 'Audience Engagement', 'Actionable Insights', 'Follow-up Resources']
  },
  {
    title: 'Strategic Consulting',
    description: 'Partner with organizations to develop strategies that create lasting impact.',
    icon: '📊',
    features: ['Organizational Assessment', 'Strategic Planning', 'Change Management', 'Performance Optimization']
  }
]

const testimonials = [
  {
    quote: "Jeremy's insights transformed our leadership team's approach to collaboration and innovation.",
    author: "Sarah Mitchell",
    title: "CEO, Tech Innovations Inc.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b2c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: "The strategic framework Jeremy provided became the foundation of our company's growth strategy.",
    author: "Michael Rodriguez",
    title: "VP of Operations, Global Solutions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: "Jeremy's coaching helped me navigate complex leadership challenges with confidence and clarity.",
    author: "Dr. Lisa Chen",
    title: "Chief Medical Officer, Healthcare Partners",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  }
]

export default function JeremyGodwin() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="https://godwinsolutions.cc" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-godwin-blue to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">JG</span>
              </div>
              <span className="text-2xl font-serif font-bold text-godwin-blue tracking-tight">
                Jeremy Godwin
              </span>
            </a>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-godwin-gray hover:text-godwin-blue transition-colors font-medium">About</a>
              <a href="#services" className="text-godwin-gray hover:text-godwin-blue transition-colors font-medium">Services</a>
              <a href="#testimonials" className="text-godwin-gray hover:text-godwin-blue transition-colors font-medium">Testimonials</a>
              <a href="#contact" className="bg-godwin-blue text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-28 pb-20 bg-gradient-to-br from-godwin-blue to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-max section-padding relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                Transforming Leaders,
                <span className="text-godwin-gold block">Elevating Organizations</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Professional speaker, executive coach, and strategic consultant helping leaders and organizations achieve breakthrough results through proven methodologies and personalized approaches.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="btn-primary bg-godwin-gold text-godwin-blue hover:bg-yellow-500">
                  Book a Consultation
                </a>
                <a href="#services" className="inline-flex items-center bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-godwin-blue transition-all duration-300">
                  Explore Services
                </a>
              </div>
            </div>
            <div className="animate-fade-in relative">
              <div className="relative w-full max-w-md mx-auto h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://i.imgur.com/Q8xi5nb.jpeg"
                  alt="Jeremy Godwin - Professional Speaker and Coach"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-godwin-blue mb-8 animate-fade-in-up">
              About Jeremy Godwin
            </h2>
            <p className="text-lg text-godwin-gray leading-relaxed mb-8 animate-fade-in-up">
              With over 15 years of experience in leadership development and organizational transformation, 
              Jeremy Godwin has helped hundreds of executives and organizations unlock their potential. 
              His unique approach combines proven business strategies with deep psychological insights, 
              creating sustainable change that drives measurable results.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center animate-fade-in-up">
                <div className="text-4xl font-bold text-godwin-blue mb-2">500+</div>
                <div className="text-godwin-gray">Leaders Coached</div>
              </div>
              <div className="text-center animate-fade-in-up">
                <div className="text-4xl font-bold text-godwin-blue mb-2">150+</div>
                <div className="text-godwin-gray">Organizations Served</div>
              </div>
              <div className="text-center animate-fade-in-up">
                <div className="text-4xl font-bold text-godwin-blue mb-2">15+</div>
                <div className="text-godwin-gray">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section-padding bg-godwin-light">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-godwin-blue mb-6 animate-fade-in-up">
              Services
            </h2>
            <p className="text-xl text-godwin-gray max-w-3xl mx-auto animate-fade-in-up">
              Comprehensive solutions designed to accelerate your leadership journey and organizational success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`bg-white rounded-2xl p-8 shadow-lg card-hover animate-fade-in-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-godwin-blue mb-4">{service.title}</h3>
                <p className="text-godwin-gray mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-godwin-gray">
                      <svg className="w-4 h-4 text-godwin-gold mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-godwin-blue mb-6">
              What Leaders Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-godwin-light rounded-2xl p-8 animate-fade-in-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-6">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-godwin-blue">{testimonial.author}</div>
                    <div className="text-sm text-godwin-gray">{testimonial.title}</div>
                  </div>
                </div>
                <p className="text-godwin-gray italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-padding bg-godwin-blue text-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Leadership?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Take the first step towards breakthrough results. Schedule a consultation to discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:Jeremy@GodwinSolutions.cc"
                className="inline-flex items-center bg-godwin-gold text-godwin-blue px-8 py-4 rounded-lg font-medium hover:bg-yellow-500 transition-all duration-300 text-lg"
              >
                <svg className="mr-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get In Touch
              </a>
              <a
                href="https://godwinsolutions.cc"
                className="btn-secondary border-white text-white hover:bg-white hover:text-godwin-blue text-lg px-8 py-4"
              >
                Back to Main Site
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}