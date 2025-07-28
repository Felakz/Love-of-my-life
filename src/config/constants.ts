// Configuración centralizada para J&C Studios
export const COMPANY_INFO = {
  name: 'J&C Studios',
  email: 'dczl0603@gmail.com',
  phone: '+51 926 206 841',
  description: 'Creamos experiencias digitales excepcionales que impulsan el crecimiento de tu negocio. Especialistas en diseño, desarrollo y estrategia digital.',
  year: new Date().getFullYear()
} as const

export const SOCIAL_LINKS = {
  whatsapp: 'https://wa.me/51926206841', // Número actualizado para Perú
  instagram: 'https://instagram.com/jcstudios',
  linkedin: 'https://linkedin.com/company/jcstudios',
  twitter: 'https://twitter.com/jcstudios'
} as const

export const FOOTER_LINKS = {
  servicios: [
    { name: 'Desarrollo Web', href: '#services' },
    { name: 'Diseño de Logos', href: '#services' },
    { name: 'Edición de Video', href: '#services' },
    { name: 'Identidad Visual', href: '#services' },
    { name: 'Consultoría Tech', href: '#services' }
  ],
  empresa: [
    { name: 'Nosotros', href: '#' },
    { name: 'Portafolio', href: '#portfolio' },
    { name: 'Blog', href: '#' },
    { name: 'Contacto', href: '#contact' },
    { name: 'Testimonios', href: '#' }
  ],
  legal: [
    { name: 'Términos de Servicio', href: '#' },
    { name: 'Política de Privacidad', href: '#' },
    { name: 'Cookies', href: '#' },
    { name: 'GDPR', href: '#' }
  ]
} as const

// Configuración de animaciones para mejor rendimiento
export const ANIMATION_CONFIG = {
  rainDrops: 12, // Reducido de 50 para mejor rendimiento
  floatingElements: 6,
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 1.2
  }
} as const
