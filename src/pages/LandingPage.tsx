import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

import Background from '@/components/layout/Background'
import Nav from '@/components/layout/Nav'
import ThemeToggle from '@/components/layout/ThemeToggle'
import Footer from '@/components/layout/Footer'

import Hero from '@/components/sections/Hero'
import FlowConnector from '@/components/sections/FlowConnector'
import Sequence from '@/components/sections/Sequence'
import Quote from '@/components/sections/Quote'
import Topics from '@/components/sections/Topics'
import RotatingSnakes from '@/components/illusions/RotatingSnakes'
import MullerLyer from '@/components/illusions/MullerLyer'
import HermannGrid from '@/components/illusions/HermannGrid'
import Stats from '@/components/sections/Stats'
import FeaturedPost from '@/components/sections/FeaturedPost'
import Library from '@/components/sections/Library'
import Posts from '@/components/sections/Posts'
import Subscribe from '@/components/sections/Subscribe'
import SubscribeInline from '@/components/sections/SubscribeInline'
import { useLanguage } from '@/i18n'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export default function LandingPage() {
  const { t } = useLanguage()
  useEffect(() => {
    // Scroll progress animation
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      const progressBar = document.getElementById('scrollProgress')
      if (progressBar) {
        progressBar.style.width = `${scrollPercent}%`
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null
      if (anchor) {
        e.preventDefault()
        const targetId = anchor.getAttribute('href')
        if (targetId) {
          const element = document.querySelector(targetId)
          if (element) {
            gsap.to(window, {
              duration: 1,
              scrollTo: { y: element, offsetY: 80 },
              ease: 'power3.inOut',
            })
          }
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('click', handleAnchorClick)
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <>
      <Background />
      <ThemeToggle />

      <div className="content">
        <Nav />

        <Hero />

        <FlowConnector />

        <Sequence />

        <Quote words={t.quotes.proust.words} author={t.quotes.proust.author} />

        <FlowConnector />

        <Topics />

        <SubscribeInline source="after-topics" />

        <RotatingSnakes />

        <MullerLyer />

        <Quote words={t.quotes.nin.words} author={t.quotes.nin.author} />

        <HermannGrid />

        <Stats />

        <FeaturedPost />

        <SubscribeInline source="after-featured" />

        <Library />

        <Posts />

        <Subscribe />

        <Footer />
      </div>
    </>
  )
}
