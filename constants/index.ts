// App routes for re-direction

import { FolderClosed, LayoutDashboard, Settings, WandSparkles } from "lucide-react";

const headerData = [
    {title: 'Features', href: '/#features'},
    {title: 'Steps', href: '/#steps'},
    {title: 'Pricing', href: '/#pricing'},
    {title: 'Reviews', href: '/#reviews'},
]

export default headerData;

export const sidebarLinks = [
    {title: 'Dashboard', href: '/dashboard', icon: LayoutDashboard},
    {title: 'Analyze', href: '/dashboard/analyze', icon: WandSparkles},
    {title: 'Projects', href: '/dashboard/projects', icon: FolderClosed},
    {title: 'Settings', href: '/dashboard/settings', icon: Settings},
]

export const communicationExamples = [
  {
    text: 'I understand where you are coming from. Let us work through this together.',
    speaker: 'Sarah Chen',
    question: 'How would you respond to an upset client?',
    answer: 'I would remain calm, acknowledge their frustration, and focus on solving the issue collaboratively.',
  },
  {
    text: 'I think we should slow down and evaluate every possible outcome first.',
    speaker: 'Michael Torres',
    question: 'How do you handle high-pressure decisions?',
    answer:
      'I analyze the risks carefully before acting to ensure the best long-term outcome.',
  },
  {
    text: 'That is an incredible idea. Let us push it even further.',
    speaker: 'Emily Carter',
    question: 'How do you motivate a creative team?',
    answer:
      'I encourage experimentation, positivity, and open collaboration to inspire innovation.',
  },
]

export const tonalityExamoles = [
  {
    speaker: 'James Wilson',
    question: 'Tell me about yourself',
    pitch: 'Low',
    audio: '/audio/deep-voice.mp3'
  },
  {
    speaker: 'Sophia Lee',
    question: 'Why should we hire you?',
    pitch: 'Medium',
    audio: '/audio/medium-voice.mp3'
  },
  {
    speaker: 'James Wilson',
    question: 'Can you lead this project?',
    pitch: 'High / Confident',
    audio: '/audio/confident-voice.mp3'
  },
]

export const plans = [
  {
    name: "Free Plan",
    price: "$0",
    subtitle: "to start",
    description: "Try all features with free credits",
    border: "border-blue-500/40",
    button: "Try It Free Now",
    popular: false,
    features: [
      'Voice Cloning',
      "Natural Speech Synthesis",
      "Multiple Languages & Voices",
      "High-Quality Audio Downloads",
      "Fast Processing",
      "Cloud Storage"
    ]
  },
  {
    name: "Pro Plan",
    price: "$19",
    subtitle: "/month",
    description: "Perfect for creators & professionals",
    border: "border-purple-500/40",
    button: "Upgrade to Pro",
    popular: true,
    features: [
      'Everything in Free Tier',
      'Unlimited Voice Generations',
      "Advanced Communication Cloning",
      "Premium Voices",
      "Priority Processing",
      "API Acccess",
      "Commercial License"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    subtitle: "pricing",
    description: "Advanced solutions for teams & companies",
    border: "border-pink-500/40",
    button: "Contact Sales",
    popular: false,
    features: [
      'Everything in Free + Pro Tier',
      'Team Colloboration',
      "Dedicated Infrastructure",
      "Custom AI Models",
      "Enterprise Security",
      "Dedicated Support",
      "Scalable Usage"
    ]
  },
]
