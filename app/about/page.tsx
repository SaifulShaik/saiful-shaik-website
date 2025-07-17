'use client';

import Link from 'next/link';
import { useState } from 'react';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  highlights: string[];
  achievements: string[];
}

export default function AboutPage() {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const skills = [
    { name: 'UX Analysis', level: 90, category: 'UX/UI' },
    { name: 'Digital Marketing', level: 95, category: 'Marketing' },
    { name: 'Game Development', level: 90, category: 'Development' },
    { name: 'Financial Management', level: 85, category: 'Finance' },
    { name: 'Brand Strategy', level: 90, category: 'Marketing' },
    { name: 'Unity/C#', level: 85, category: 'Development' },
    { name: 'Social Media Strategy', level: 95, category: 'Marketing' },
    { name: 'User Research', level: 85, category: 'UX/UI' },
  ];

  const experiences = [
    {
      title: 'Chief Marketing Officer (CMO) @ SocialHunt',
      company: 'Saragadam Solutions Inc.',
      period: '2025 - Present',
      description: 'Lead marketing strategy and brand development for a rapidly growing social platform, overseeing user acquisition, content strategy, and digital marketing campaigns that drive engagement and growth. Collaborated closely with the CEO to help design and launch the company website.',
      technologies: ['Digital Marketing', 'Analytics', 'Content Strategy', 'Social Media', 'Brand Development', 'Web Design'],
      highlights: [
        'Increased user acquisition by 150% through strategic digital campaigns',
        'Developed comprehensive brand identity and messaging strategy',
        'Collaborated with CEO to design and launch company website',
        'Implemented data-driven content strategy resulting in 200% engagement boost',
        'Led cross-functional team of 5 marketing professionals',
      ],
      achievements: [
        'Launched successful social media campaigns reaching 5k+ users',
        'Reduced customer acquisition cost by 40%',
        'Established strategic partnerships with 3 companies'
      ]
    },
    {
      title: 'Website Consultant',
      company: 'UserTesting',
      period: '2023 - Present',
      description: 'Provide detailed UX analysis and comprehensive reports to businesses for improved user experience. Conduct thorough website evaluations, identify usability issues, and deliver actionable insights to enhance user engagement and conversion rates.',
      technologies: ['UX Analysis', 'Usability Testing', 'User Research', 'Website Optimization', 'Report Writing', 'Data Analysis'],
      highlights: [
        'Conducted 100+ comprehensive UX audits for diverse businesses',
        'Provided expert insights on user behavior and engagement patterns to Canva',
        'Delivered detailed reports with actionable improvement recommendations',
        'Identified critical usability issues affecting conversion rates',
        'Collaborated with development teams to implement UX improvements',
        'Specialized in e-commerce and SaaS platform optimization'
      ],
      achievements: [
        'Helped clients achieve average 35% increase in conversion rates',
        'Maintained 98% client satisfaction rate',
        'Reduced average website bounce rate by 25% for clients'
      ]
    },
    {
      title: 'Freelance Game Developer and web developer',
      company: 'Independent',
      period: '2022 - Present',
      description: 'Creating engaging games and interactive experiences for various clients. Specializing in game mechanics, user experience design, and performance optimization for web and mobile platforms.',
      technologies: ['Game Development', 'Unity', 'C#', 'JavaScript', 'Python', 'Java', 'Web Development', 'HTML', 'CSS', 'React', 'Node.js', 'Express.js', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Web Design'],
      highlights: [
        'Developed 15+ custom games across different genres',
        'Built responsive web applications using modern frameworks',
        'Specialized in interactive user experiences and game mechanics',
        'Optimized performance for web and mobile platforms',
        'Collaborated with designers and clients to bring creative visions to life',
        'Maintained long-term client relationships with 90% retention rate'
      ],
      achievements: [
        'Developed web applications serving 5K+ users',
        'Completed 50+ projects'
      ]
    },
    {
      title: 'Fundraising Director',
      company: 'Soles4Souls',
      period: '2023',
      description: 'Directed fundraising operations and managed volunteers for a nonprofit shoe donation event. Oversaw event planning, volunteer coordination, and financial operations to ensure successful fundraising outcomes for the organization.',
      technologies: ['Event Management', 'Volunteer Management', 'Financial Management', 'Budget Planning', 'Nonprofit Operations', 'Team Leadership'],
      highlights: [
        'Managed and coordinated team of 12 volunteers and staff members',
        'Directed multiple fundraising events and donation drives',
        'Oversaw comprehensive event planning and execution',
        'Coordinated volunteer schedules and managed daily shoe transfers to orthopaedic shop',
        'Partnered with Soles4Souls nonprofit organization for donation distribution',
        'Implemented efficient volunteer management systems and processes'
      ],
      achievements: [
        'Succesfully collected and donated 1000+ pairs of quality shoes to individuals in need within 3 days',
        'Coordinated community outreach and donation drives to maximize participation',
        'Achieved seamless coordination with 0 volunteer scheduling conflicts'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-white to-secondary bg-clip-text text-transparent">
                About Me
              </span>
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Passionate full-stack developer with a love for creating innovative digital experiences 
              that solve real-world problems.
            </p>
          </div>

          {/* Story Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">My Journey</h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  My journey spans across multiple industries, from marketing and brand development 
                  to game development and nonprofit financial management. This diverse background 
                  has given me a unique perspective on problem-solving and creative thinking.
                </p>
                <p>
                  As CMO at SocialHunt, I've learned to blend creativity with data-driven strategies 
                  to build engaging digital experiences. My freelance game development work has taught 
                  me the importance of user engagement and interactive design principles.
                </p>
                <p>
                  Leading financial operations for the Soles4Souls fundraising event showed me the 
                  impact of combining business acumen with social responsibility. Each role has 
                  contributed to my holistic approach to business and technology.
                </p>
              </div>
            </div>
            
            {/* Animated Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center hover:bg-card/70 transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl font-bold text-primary mb-2">3+</div>
                <div className="text-text-secondary">Years Experience</div>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center hover:bg-card/70 transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-text-secondary">Projects Completed</div>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center hover:bg-card/70 transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-text-secondary">Technologies</div>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center hover:bg-card/70 transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-text-secondary">Learning Mode</div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">Technical Skills</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div 
                  key={skill.name} 
                  className="bg-card/30 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-card/50 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-medium text-text-primary">{skill.name}</span>
                    <span className="text-sm text-primary bg-primary/10 px-2 py-1 rounded">
                      {skill.category}
                    </span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="text-right text-sm text-text-secondary mt-1">
                    {skill.level}%
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">Work Experience</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className="bg-card/30 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:bg-card/50 transition-all duration-300 transform hover:scale-[1.02] cursor-pointer"
                  onClick={() => setSelectedExperience(exp)}
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-1">{exp.title}</h3>
                      <p className="text-text-secondary font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-primary bg-primary/10 px-3 py-1 rounded-full mt-2 md:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-text-secondary mb-4 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="text-xs text-secondary bg-secondary/10 px-2 py-1 rounded border border-secondary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-primary text-sm font-medium">
                    <span>Click for more details</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">Let's Work Together</h2>
              <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
                I'm always excited to take on new challenges and collaborate on innovative projects. 
                Let's create something amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/projects"
                  className="px-6 py-3 bg-primary text-black font-semibold rounded-lg hover:bg-white transition-all duration-300 transform hover:scale-105"
                >
                  View My Work
                </Link>
                <Link 
                  href="/contact"
                  className="px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Experience Modal */}
      {selectedExperience && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card/95 backdrop-blur-md border border-white/20 rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-card/95 backdrop-blur-md border-b border-white/10 p-6 flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-2">{selectedExperience.title}</h2>
                <p className="text-text-secondary font-medium">{selectedExperience.company}</p>
                <span className="text-sm text-primary bg-primary/10 px-3 py-1 rounded-full mt-2 inline-block">
                  {selectedExperience.period}
                </span>
              </div>
              <button
                onClick={() => setSelectedExperience(null)}
                className="text-text-secondary hover:text-primary transition-colors p-2 rounded-lg hover:bg-white/10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold text-primary mb-3">Role Overview</h3>
                <p className="text-text-secondary leading-relaxed">{selectedExperience.description}</p>
              </div>

              {/* Key Highlights */}
              <div>
                <h3 className="text-lg font-semibold text-primary mb-3">Key Highlights</h3>
                <ul className="space-y-2">
                  {selectedExperience.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-secondary">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Achievements */}
              <div>
                <h3 className="text-lg font-semibold text-primary mb-3">Key Achievements</h3>
                <div className="grid gap-3">
                  {selectedExperience.achievements.map((achievement, index) => (
                    <div key={index} className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-text-primary font-medium">{achievement}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-lg font-semibold text-primary mb-3">Technologies & Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedExperience.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="text-sm text-secondary bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-card/95 backdrop-blur-md border-t border-white/10 p-6 text-center">
              <button
                onClick={() => setSelectedExperience(null)}
                className="px-6 py-3 bg-primary text-black font-semibold rounded-lg hover:bg-white transition-all duration-300 transform hover:scale-105"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 