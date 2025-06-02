import { Link } from 'react-router-dom'
import { ArrowRight, Microscope, Users, BookOpen } from 'lucide-react'

const highlights = [
  {
    title: 'Research',
    description: 'Cutting-edge molecular techniques and genomics research in cotton breeding.',
    icon: Microscope,
    href: '/research',
  },
  {
    title: 'People',
    description: 'Meet our team of dedicated researchers and students.',
    icon: Users,
    href: '/people',
  },
  {
    title: 'Publications',
    description: 'Explore our latest research findings and publications.',
    icon: BookOpen,
    href: '/publications',
  },
]

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
          <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center mix-blend-overlay" />
        </div>
        
        <div className="container py-24 sm:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Cotton Molecular Biology Lab
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-100">
              Advancing cotton breeding through cutting-edge molecular techniques and genomics research at the University of Georgia.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/join"
                className="btn btn-primary px-6 py-3 text-base"
              >
                Join Our Lab
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/research"
                className="text-base font-semibold leading-6 text-white hover:text-gray-200"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="container py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-dark sm:text-4xl">
            Our Focus Areas
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We combine traditional breeding methods with modern genomic tools to develop superior cotton varieties.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {highlights.map((highlight) => (
              <div key={highlight.title} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-neutral-dark">
                  <highlight.icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                  {highlight.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{highlight.description}</p>
                  <p className="mt-6">
                    <Link
                      to={highlight.href}
                      className="text-sm font-semibold leading-6 text-primary hover:text-primary/80"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary">
        <div className="container py-16 sm:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Join Our Research Team
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-100">
              We're looking for motivated students and post-docs who are passionate about plant breeding and genomics.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/join"
                className="btn bg-white text-primary hover:bg-gray-100 px-6 py-3 text-base"
              >
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 