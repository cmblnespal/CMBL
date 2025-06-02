import { useState } from 'react'
import { Linkedin, ExternalLink } from 'lucide-react'
import peopleData from '../data/people.json'

const roles = [
  'Principal Investigator',
  'Post-doctoral Fellow',
  'Ph.D. Candidate',
  'M.S. Student',
  'Research Technician',
]

export default function People() {
  const [selectedRole, setSelectedRole] = useState('all')

  const filteredPeople = selectedRole === 'all'
    ? peopleData
    : peopleData.filter(person => person.role === selectedRole)

  return (
    <div className="pt-24 pb-16">
      <div className="container">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-neutral-dark sm:text-4xl">
            Our Team
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Meet the researchers and students who make up the Cotton Molecular Biology Lab.
          </p>
        </div>

        {/* Role Filter */}
        <div className="mt-12 flex justify-center gap-4">
          <button
            onClick={() => setSelectedRole('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedRole === 'all'
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            All
          </button>
          {roles.map((role) => (
            <button
              key={role}
              onClick={() => setSelectedRole(role)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedRole === role
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {role}
            </button>
          ))}
        </div>

        {/* People Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPeople.map((person) => (
            <div
              key={person.name}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
            >
              <div className="aspect-h-3 aspect-w-2 bg-gray-200 sm:aspect-none sm:h-96">
                <img
                  src={person.headshot}
                  alt={person.name}
                  className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col space-y-2 p-6">
                <h3 className="text-xl font-semibold text-neutral-dark">
                  {person.name}
                </h3>
                <p className="text-sm font-medium text-primary">{person.role}</p>
                <p className="text-sm text-gray-500">{person.degree}</p>
                <p className="flex-1 text-sm text-gray-600">{person.focus}</p>
                <div className="flex space-x-4">
                  {person.links.orcid && (
                    <a
                      href={`https://orcid.org/${person.links.orcid}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary"
                    >
                      <span className="sr-only">ORCID</span>
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                  {person.links.linkedin && (
                    <a
                      href={person.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 