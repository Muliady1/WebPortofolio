export interface NavLink {
  name: string
  label: string
}

export const useLinks = (): NavLink[] => {
  return [
    { name: 'index', label: 'nav.home' },
    { name: 'about', label: 'nav.about' },
    { name: 'portfolio', label: 'nav.portfolio' },
    { name: 'skills', label: 'nav.skills' },
    { name: 'contact', label: 'nav.contact' },
  ]
}
export const useSocialLinks = () => {
  const config = useRuntimeConfig()
  const socialLinks = {
    phone: config.public.phone ?? "082241110674",
    instagram: config.public.instagram ?? "https://instagram.com",
    telegram: config.public.telegram ?? "https://t.me",
    email: "https://mail.google.com/mail/?view=cm&fs=1&to=muliadyputra20@gmail.com",
    github: config.public.github ?? "https://github.com",
  }
  return [
    { id: 1, name: "WhatsApp", url: socialLinks.phone },
    { id: 2, name: "Instagram", url: socialLinks.instagram },
    { id: 3, name: "Telegram", url: socialLinks.telegram },
    { id: 4, name: "Email", url: socialLinks.email },
    { id: 5, name: "GitHub", url: socialLinks.github },
  ]
}