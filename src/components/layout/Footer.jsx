import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone, Facebook, Linkedin } from 'lucide-react'

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Research', href: '/research' },
    { name: 'People', href: '/people' },
    { name: 'Publications', href: '/publications' },
    { name: 'News', href: '/news' },
    { name: 'Join Us', href: '/join' },
    { name: 'Contact', href: '/contact' },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://facebook.com/CottonMolecularBreedingLab',
      icon: Facebook,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/cotton-molecular-breeding-lab',
      icon: Linkedin,
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-neutral-dark text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Lab Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Cotton Molecular Biology Lab</h3>
            <p className="text-gray-300 mb-4">
              Advancing cotton breeding through cutting-edge molecular techniques and genomics research.
            </p>
            <div className="space-y-2">
              <a href="mailto:pwchee@uga.edu" className="flex items-center text-gray-300 hover:text-white">
                <Mail className="h-5 w-5 mr-2" />
                pwchee@uga.edu
              </a>
              <a href="tel:+12293867274" className="flex items-center text-gray-300 hover:text-white">
                <Phone className="h-5 w-5 mr-2" />
                +1 (229) 386-7274
              </a>
              <address className="flex items-start text-gray-300 not-italic">
                <MapPin className="h-5 w-5 mr-2 mt-1" />
                <span>
                  2360 Rainwater Road<br />
                  Tifton, GA 31793
                </span>
              </address>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-gray-300 hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* University Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">University Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://cropsoil.uga.edu"
                  className="text-gray-300 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Department of Crop & Soil Sciences
                </a>
              </li>
              <li>
                <a
                  href="https://caes.uga.edu"
                  className="text-gray-300 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  College of Agricultural & Environmental Sciences
                </a>
              </li>
              <li>
                <a
                  href="https://uga.edu"
                  className="text-gray-300 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  University of Georgia
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Cotton Molecular Biology Lab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 