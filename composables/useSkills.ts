import {
  FileText, FileSpreadsheet, Globe, Book, ClipboardList, CheckSquare, MessageCircle, Video, GitBranch, Github, Timer, PenTool, Palette, UserSearch, 
  Layout, Code, Braces, Server, Monitor, Gauge, Network, Shield, Boxes, Smartphone, UploadCloud, Database, BarChart3, Pencil, Search, Mail,
  Megaphone, BadgeCheck, Calendar, Users, Headphones, Clock, Lightbulb, Brain, UserCheck, Eye, Shuffle, Zap, Code2, Gavel, ListChecks, ClipboardCheck,
  SearchCheck, Scissors, Type, Navigation, Wrench, User, MessageSquare, CheckCircle, Briefcase, Laptop,
  Layers,
  AlignLeft,
  BookOpen,
  Film,
  Filter,
  Folder,
  Keyboard,
  PieChart
} from "lucide-vue-next"
import type { Component } from "vue"

type SkillGroup =
  | "administration"
  | "business"
  | "design"
  | "frontend"
  | "backend"
  | "data"
  | "marketing"
  | "softskills"
  | "web3"
  | "mobile"
  | "development"

export interface Skill {
  id: number
  name: string
  category: string       
  group: SkillGroup      
  role?: string          
  tools?: string[]
  icon: Component
  color: string
  featured?: boolean
}

export const useSkill = () => {
  const skills = ref<Skill[]>([
    // ===== ADMINISTRATION =====
    { id: 1, name: "MS Word", category: "Office Work", group: "administration", role: "Virtual Assistant", tools: ["MS Word"], icon: FileText, color: "#4F8CFF", featured: true },
    { id: 2, name: "Microsoft Excel", category: "Data Entry", group: "data", role: "Data Specialist", tools: ["Microsoft Excel"], icon: FileSpreadsheet, color: "#34D399", featured: true },
    { id: 3, name: "Google Docs", category: "Office Work", group: "administration", role: "Virtual Assistant", tools: ["Google Docs"], icon: FileText, color: "#60A5FA" },
    { id: 4, name: "Google Sheets", category: "Data Entry", group: "data", role: "Data Specialist", tools: ["Google Sheets"], icon: FileSpreadsheet, color: "#22C55E" },
    { id: 5, name: "Google Drive", category: "File Management", group: "administration", role: "Virtual Assistant", tools: ["Google Drive"], icon: Globe, color: "#4ADE80" },
    { id: 6, name: "Notion", category: "Documentation", group: "business", role: "Virtual Assistant", tools: ["Notion"], icon: Book, color: "#E5E7EB", featured: true },
    { id: 7, name: "Trello", category: "Project Management", group: "business", role: "Project Manager", tools: ["Trello"], icon: ClipboardList, color: "#60A5FA" },
    { id: 8, name: "Asana", category: "Project Management", group: "business", role: "Project Manager", tools: ["Asana"], icon: CheckSquare, color: "#FB7185" },
    { id: 9, name: "ClickUp", category: "Project Management", group: "business", role: "Project Manager", tools: ["ClickUp"], icon: CheckSquare, color: "#A78BFA" },
    { id: 10, name: "Slack", category: "Communication", group: "business", role: "Virtual Assistant", tools: ["Slack"], icon: MessageCircle, color: "#F472B6" },
    { id: 11, name: "Zoom", category: "Communication", group: "business", role: "Virtual Assistant", tools: ["Zoom"], icon: Video, color: "#60A5FA", featured: true },

    // ===== DEVELOPMENT =====
    { id: 12, name: "Git", category: "Development Tools", group: "development", role: "Developer", tools: ["Git"], icon: GitBranch, color: "#FB923C" },
    { id: 13, name: "GitHub", category: "Development Tools", group: "development", role: "Developer", tools: ["GitHub"], icon: Github, color: "#C084FC", featured: true },

    // ===== PRODUCTIVITY =====
    { id: 14, name: "Time Tracking", category: "Productivity", group: "business", role: "Professional", tools: ["Timer Apps"], icon: Timer, color: "#4ADE80" },
    { id: 15, name: "Documentation", category: "Documentation", group: "administration", role: "Virtual Assistant", tools: ["Notion"], icon: BookOpen, color: "#CBD5E1" },


    // ===== DESIGN =====
    { id: 16, name: "Figma", category: "Product Design", group: "design", role: "Designer", tools: ["Figma"], icon: PenTool, color: "#F97316", featured: true },
    { id: 17, name: "Canva", category: "Visual Design", group: "design", role: "Designer", tools: ["Canva"], icon: Palette, color: "#22D3EE", featured: true },
    { id: 18, name: "Adobe Photoshop", category: "Visual Design", group: "design", role: "Designer", tools: ["Photoshop"], icon: Palette, color: "#60A5FA" },
    { id: 19, name: "Adobe After Effects", category: "Animation", group: "design", role: "Content Creator", tools: ["After Effects"], icon: Video, color: "#A5B4FC" },
    { id: 22, name: "Wireframing", category: "Product Design", group: "design", role: "Designer", tools: ["Figma"], icon: Layers, color: "#FB7185" },
    { id: 23, name: "Presentation Design", category: "Visual Design", group: "design", role: "Designer", tools: ["Canva"], icon: Layout, color: "#818CF8", featured: true },
    { id: 20, name: "UI Design Implementation", category: "Product Design", group: "design", role: "Designer", icon: PenTool, color: "#F472B6", featured: true },
    { id: 21, name: "UX Research", category: "User Experience", group: "design", role: "Designer", icon: UserSearch, color: "#C084FC" },


    { id: 24, name: "Basic Motion Design", category: "Animation", group: "design", role: "Content Creator", icon: Video, color: "#A5B4FC" },

    // ===== FRONTEND =====
    { id: 25, name: "HTML5", category: "Web Development", group: "frontend", role: "Developer", icon: Code, color: "#FB923C" },
    { id: 26, name: "CSS3", category: "Web Development", group: "frontend", role: "Developer", icon: Palette, color: "#60A5FA" },
    { id: 27, name: "JavaScript", category: "Web Development", group: "frontend", role: "Developer", icon: Braces, color: "#FACC15" },
    { id: 28, name: "TypeScript", category: "Web Development", group: "frontend", role: "Developer", icon: Code, color: "#38BDF8" },
    { id: 29, name: "React", category: "Frontend Framework", group: "frontend", role: "Developer", icon: Code, color: "#22D3EE" },
    { id: 30, name: "Next.js", category: "Frontend Framework", group: "frontend", role: "Developer", icon: Server, color: "#E5E7EB", featured: true },
    { id: 31, name: "Tailwind CSS", category: "Styling", group: "frontend", role: "Developer", icon: Layout, color: "#38BDF8", featured: true },
    { id: 32, name: "Responsive Design", category: "UI Development", group: "frontend", role: "Developer", icon: Monitor, color: "#818CF8" },
    { id: 33, name: "Web Performance Optimization", category: "Performance", group: "frontend", role: "Developer", icon: Gauge, color: "#FBBF24" },

    // ===== BACKEND =====
    { id: 34, name: "Python", category: "Programming", group: "backend", role: "Developer", icon: Code, color: "#60A5FA" },
    { id: 35, name: "REST API Development", category: "API", group: "backend", role: "Developer", icon: Network, color: "#38BDF8" },
    { id: 36, name: "Authentication System", category: "Security", group: "backend", role: "Developer", icon: Shield, color: "#F87171" },
    { id: 37, name: "Database Design", category: "Database", group: "backend", role: "Developer", icon: Boxes, color: "#818CF8" },

    // ===== MOBILE =====
    { id: 38, name: "Flutter Development", category: "Mobile Development", group: "mobile", role: "Developer", icon: Smartphone, color: "#38BDF8", featured: true },
    { id: 39, name: "Kotlin Development", category: "Mobile Development", group: "mobile", role: "Developer", icon: Smartphone, color: "#A78BFA" },
    { id: 40, name: "Mobile UI Design", category: "UI Design", group: "mobile", role: "Developer", icon: Smartphone, color: "#22D3EE", featured: true },
    { id: 41, name: "App Deployment", category: "Deployment", group: "mobile", role: "Developer", icon: UploadCloud, color: "#60A5FA" },

    // ===== DATA =====
    { id: 42, name: "SQL", category: "Database", group: "data", role: "Data Specialist", icon: Database, color: "#38BDF8" },
    { id: 43, name: "SPSS", category: "Analytics", group: "data", role: "Data Specialist", tools: ["SPSS"], icon: Server, color: "#22D3EE", featured: true },
    { id: 44, name: "Data Analysis", category: "Analytics", group: "data", role: "Data Specialist", tools: ["Excel"], icon: BarChart3, color: "#4ADE80", featured: true },
    { id: 45, name: "Data Visualization", category: "Analytics", group: "data", role: "Data Specialist", tools: ["Excel"], icon: PieChart, color: "#FBBF24" },
    { id: 46, name: "Data Entry", category: "Data Processing", group: "administration", role: "Data Specialist", tools: ["Excel"], icon: Keyboard, color: "#CBD5E1", featured: true },
    { id: 47, name: "Data Cleaning", category: "Data Processing", group: "data", role: "Data Specialist", tools: ["Excel"], icon: Filter, color: "#22C55E" },



    // ===== MARKETING =====
    { id: 48, name: "Copywriting", category: "Content Marketing", group: "marketing", role: "Marketer", icon: Pencil, color: "#FBBF24", featured: true },
    { id: 49, name: "Content Writing", category: "Content Marketing", group: "marketing", role: "Marketer", icon: Pencil, color: "#FACC15" },
    { id: 50, name: "SEO", category: "Digital Marketing", group: "marketing", role: "Marketer", icon: Search, color: "#F59E0B", featured: true },
    { id: 51, name: "Email Marketing", category: "Digital Marketing", group: "marketing", role: "Marketer", tools: ["Mailchimp"], icon: Mail, color: "#FCD34D" },
    { id: 52, name: "Social Media Management", category: "Digital Marketing", group: "marketing", role: "Marketer", tools: ["Meta Ads"], icon: Megaphone, color: "#38BDF8", featured: true },
    { id: 53, name: "Meta Ads", category: "Digital Marketing", group: "marketing", role: "Marketer", tools: ["Meta Ads"], icon: Megaphone, color: "#60A5FA" },

    { id: 54, name: "Brand Management", category: "Marketing Strategy", group: "marketing", role: "Marketer", icon: BadgeCheck, color: "#34D399" },

    // ===== BUSINESS / ADMIN =====
    { id: 55, name: "Gmail", category: "Communication", group: "administration", role: "Virtual Assistant", tools: ["Gmail"], icon: Mail, color: "#F87171", featured: true },
    { id: 56, name: "Google Calendar", category: "Scheduling", group: "administration", role: "Virtual Assistant", tools: ["Google Calendar"], icon: Calendar, color: "#60A5FA" },
    { id: 57, name: "Online Research", category: "Research", group: "business", role: "Researcher", tools: ["Google"], icon: Search, color: "#CBD5E1", featured: true },
    { id: 58, name: "CRM (HubSpot)", category: "Customer Management", group: "business", role: "Support", tools: ["HubSpot"], icon: Users, color: "#FB923C" },
    { id: 59, name: "Zendesk", category: "Customer Service", group: "business", role: "Support", tools: ["Zendesk"], icon: Headphones, color: "#22D3EE" },
    { id: 60, name: "Project Management", category: "Operations", group: "business", role: "Project Manager", tools: ["Notion", "Trello"], icon: ClipboardList, color: "#818CF8", featured: true },

    // ===== SOFT SKILLS =====
    { id: 61, name: "Time Management", category: "Productivity", group: "softskills", role: "Professional", icon: Clock, color: "#4ADE80" },
    { id: 62, name: "Problem Solving", category: "Thinking Skills", group: "softskills", role: "Professional", icon: Lightbulb, color: "#FACC15" },
    { id: 63, name: "Critical Thinking", category: "Thinking Skills", group: "softskills", role: "Professional", icon: Brain, color: "#C084FC" },
    { id: 64, name: "Team Collaboration", category: "Collaboration", group: "softskills", role: "Professional", icon: UserCheck, color: "#38BDF8" },
    { id: 65, name: "Remote Communication", category: "Communication", group: "softskills", role: "Professional", icon: MessageCircle, color: "#22D3EE" },
    { id: 66, name: "Attention to Detail", category: "Work Quality", group: "softskills", role: "Professional", icon: Eye, color: "#CBD5E1" },
    { id: 67, name: "Adaptability", category: "Work Ethic", group: "softskills", role: "Professional", icon: Shuffle, color: "#818CF8" },
    { id: 68, name: "Fast Learner", category: "Learning Ability", group: "softskills", role: "Professional", icon: Zap, color: "#FB923C" },

    // ===== WEB3 =====
    { id: 69, name: "Blockchain Fundamentals", category: "Web3", group: "web3", role: "Developer", icon: Boxes, color: "#A78BFA" },
    { id: 70, name: "Solidity", category: "Web3 Development", group: "web3", role: "Developer", tools: ["Solidity"], icon: Code2, color: "#C084FC" },
    { id: 71, name: "Web3 Research", category: "Research", group: "web3", role: "Researcher", icon: Search, color: "#38BDF8" },
    { id: 72, name: "DAO Governance", category: "Web3 Operations", group: "web3", role: "Developer", icon: Gavel, color: "#818CF8" },
    { id: 73, name: "Discord", category: "Community", group: "web3", role: "Support", tools: ["Discord"], icon: Users, color: "#C084FC", featured: true },

    // ===== EXTRA / ADMIN =====
    { id: 74, name: "Task Prioritization", category: "Productivity", group: "business", role: "Project Manager", icon: ListChecks, color: "#FB923C" },
    { id: 75, name: "Daily Reporting", category: "Reporting", group: "administration", role: "Virtual Assistant", tools: ["Excel"], icon: FileText, color: "#CBD5E1" },
    { id: 76, name: "Weekly Reporting", category: "Reporting", group: "administration", role: "Virtual Assistant", tools: ["Excel"], icon: FileText, color: "#CBD5E1" },
    { id: 77, name: "File Organization", category: "File Management", group: "administration", role: "Virtual Assistant", tools: ["Google Drive"], icon: Folder, color: "#38BDF8" },
    { id: 78, name: "Document Formatting", category: "Office Work", group: "administration", role: "Virtual Assistant", tools: ["MS Word"], icon: AlignLeft, color: "#60A5FA" },

    { id: 79, name: "Google Forms", category: "Data Processing", group: "data", role: "Data Specialist", tools: ["Google Forms"], icon: ClipboardCheck, color: "#22C55E" },
    { id: 80, name: "Literature Review", category: "Research", group: "business", role: "Researcher", icon: Book, color: "#818CF8" },
    { id: 81, name: "Journal Screening", category: "Research", group: "business", role: "Researcher", icon: SearchCheck, color: "#C084FC" },
    { id: 82, name: "Report Writing", category: "Writing", group: "administration", role: "Virtual Assistant", icon: FileText, color: "#E5E7EB" },

    // ===== CONTENT =====
    { id: 83, name: "Content Clipping", category: "Content Production", group: "marketing", role: "Content Creator", icon: Scissors, color: "#FB7185" },
    { id: 84, name: "Video Trimming", category: "Content Production", group: "marketing", role: "Content Creator", tools: ["CapCut"], icon: Video, color: "#A5B4FC" },
    { id: 85, name: "Shorts & Reels", category: "Content Production", group: "marketing", role: "Content Creator", tools: ["CapCut"], icon: Film, color: "#F472B6" },

    { id: 86, name: "Caption Writing", category: "Content Writing", group: "marketing", role: "Marketer", icon: Type, color: "#FACC15" },

    // ===== SYSTEM =====
    { id: 87, name: "System Navigation", category: "Technical Skills", group: "business", role: "Support", icon: Navigation, color: "#38BDF8" },
    { id: 88, name: "Troubleshooting", category: "Technical Skills", group: "business", role: "Support", icon: Wrench, color: "#FBBF24" },
    { id: 89, name: "Digital Literacy", category: "Technical Skills", group: "business", role: "Professional", icon: Globe, color: "#60A5FA", featured: true },

    // ===== MORE SOFT SKILLS =====
    { id: 90, name: "Independent Work", category: "Work Style", group: "softskills", role: "Professional", icon: User, color: "#CBD5E1" },
    { id: 91, name: "Asynchronous Communication", category: "Communication", group: "softskills", role: "Professional", icon: MessageSquare, color: "#818CF8" },
    { id: 92, name: "Remote Collaboration", category: "Collaboration", group: "softskills", role: "Professional", icon: Users, color: "#38BDF8" },
    { id: 93, name: "Accuracy & Validation", category: "Data Quality", group: "data", role: "Data Specialist", icon: CheckCircle, color: "#22C55E" },

    // ===== TOOLS AS KNOWLEDGE (NOT PURE TOOLS) =====
    { id: 94, name: "Google Workspace", category: "Office Tools", group: "administration", role: "Virtual Assistant", tools: ["Google Workspace"], icon: Globe, color: "#4ADE80" },
    { id: 95, name: "Microsoft Office", category: "Office Tools", group: "administration", role: "Virtual Assistant", tools: ["Microsoft Office"], icon: Briefcase, color: "#60A5FA", featured: true },

    // ===== FINAL =====
    { id: 96, name: "Virtual Assistance", category: "Remote Support", group: "business", role: "Virtual Assistant", tools: ["Notion", "Slack"], icon: Headphones, color: "#22D3EE", featured: true },
    { id: 97, name: "Administrative Support", category: "Office Work", group: "administration", role: "Virtual Assistant", tools: ["Google Docs"], icon: ClipboardList, color: "#818CF8" },

    { id: 98, name: "Remote Work Tools", category: "Work Systems", group: "business", role: "Professional", tools: ["Zoom", "Slack"], icon: Laptop, color: "#CBD5E1" },
    { id: 99, name: "Basic Web Development", category: "Web Development", group: "frontend", role: "Developer", icon: Code, color: "#38BDF8" },
    { id: 100, name: "UI / UX Awareness", category: "Product Design", group: "design", role: "Designer", icon: Eye, color: "#C084FC" }
  ])

   const skillCategories = computed(() => {
    const groups = skills.value.reduce((acc, skill) => {
      const group = skill.group

      const representativeSkill =
        skills.value.find(s => s.group === group && s.featured) ||
        skills.value.find(s => s.group === group) ||
        skill

      acc[group] ??= {
        key: group,
        label: group.charAt(0).toUpperCase() + group.slice(1),
        category: representativeSkill.category,
        icon: representativeSkill.icon,
        color: representativeSkill.color,
        skills: [] as Skill[]
      }

      acc[group].skills.push(skill)
      return acc
    }, {} as Record<string, {
      key: string
      label: string
      category: string
      icon: Component
      color: string
      skills: Skill[]
    }>)

    return Object.values(groups)
  })

  // ===== ROLE ICONS =====
  const roleIcons: Record<string, { icon: Component; color: string }> = {
    "Virtual Assistant": { icon: Briefcase, color: "#60A5FA" },
    "Developer": { icon: Code, color: "#FB923C" },
    "Designer": { icon: PenTool, color: "#F97316" },
    "Data Specialist": { icon: Database, color: "#22D3EE" },
    "Marketer": { icon: Megaphone, color: "#FBBF24" },
    "Project Manager": { icon: ClipboardList, color: "#818CF8" },
    "Researcher": { icon: Search, color: "#F59E0B" },
    "Support": { icon: Headphones, color: "#22D3EE" },
    "Content Creator": { icon: Video, color: "#A5B4FC" },
    "Professional": { icon: User, color: "#4ADE80" }
  }

  // ===== GROUP BY ROLE → CATEGORY =====
  const skillsByRole = computed(() => {
    const roles = skills.value.reduce((acc, skill) => {
      const role = skill.role ?? "Other"
      const category = skill.category

      acc[role] ??= {
        role,
        categories: {} as Record<string, { category: string; skills: Skill[] }>
      }

      acc[role].categories[category] ??= {
        category,
        skills: []
      }

      acc[role].categories[category].skills.push(skill)

      return acc
    }, {} as Record<string, {
      role: string
      categories: Record<string, { category: string; skills: Skill[] }>
    }>)

    return Object.values(roles)
      .map(r => {
        // Use dedicated icon for each role
        const roleIcon = roleIcons[r.role] || { icon: Briefcase, color: '#8b5cf6' }
        return {
          role: r.role,
          icon: roleIcon.icon,
          color: roleIcon.color,
          categories: Object.values(r.categories)
        }
      })
      .sort((a, b) => a.role.localeCompare(b.role))
  })

  return {
    skills,
    skillCategories,
    skillsByRole,
    roleIcons
  }
}