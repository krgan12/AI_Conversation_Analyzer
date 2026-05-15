import React from 'react'
import Container from './Container'
import SocialMedia from './SocialMedia'
import LogoBackground from './LogoBackground'
import LogoFile from './LogoFile'
import LogoText from './LogoText'
import Link from 'next/link'
import { Sparkles } from 'lucide-react'

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-16">
            <div className="grid gap-8 md:grid-cols-4">
              <div className="md:col-span-2">
                <div className="mb-4 flex items-center gap-2">
                  <div className="relative right-10">
                    <LogoFile />
                  </div>
                  <span className="relative bottom-0.5 right-9.5 bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-xl font-bold text-transparent">
                   <LogoText />
                  </span>
                </div>
                <p className="relative bottom-9 max-w-md text-slate-600">
                  {/* Professional voice analysis powered by artificial
                  intelligence. Transform your text into natural-sounding speech
                  with cutting-edge AI technology. */}
                  Real-time AI conversation intelligence that breaks down speech, tone, and behavior. Identify how people communicate, respond, and react—turning every conversation into structured insight.
                  {/* Advanced AI conversational intelligence that analyzes speech, tone, and dialogue patterns in real time. Detect speaker behavior, understand communication dynamics, and turn conversations into actionable insights. */}
                  {/* AI-powered conversational analysis that helps you understand speech, tone, and communication patterns in real time. Identify speaker behavior, interpret responses, and gain insights from conversations using advanced machine learning. */}
                </p>
              </div>
              <div>
                <h3 className="mb-4 font-semibold text-slate-800">Product</h3>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li>
                    <Link
                      href="#features"
                      className="transition-colors hover:text-[#327b8c]"
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#pricing"
                      className="transition-colors hover:text-[#327b8c]"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard"
                      className="transition-colors hover:text-[#327b8c]"
                    >
                      Dashboard
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 font-semibold text-slate-800">Support</h3>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li>
                    <Link
                      href="mailto:support@aivoicestudio.com"
                      className="transition-colors hover:text-[#327b8c]"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/settings"
                      className="transition-colors hover:text-[#327b8c]"
                    >
                      Account Settings
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-16 border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
              <p>&copy; 2026 AI Conversational Analyzer. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer