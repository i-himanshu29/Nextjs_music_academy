import FeaturedCourse from '@/components/FeaturedCourse'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Instructors from '@/components/Instructors'
import MusicSchoolTestimonials from '@/components/TestimonialCards'
import UpcomingWebinars from '@/components/UpcomingWebinars'
import WhyChooseUs from '@/components/WhyChooseUs'
import React from 'react'

function page() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {/* <h1 className="text-2xl text-center">Chaicode - page</h1> */}
      <HeroSection/>
      <FeaturedCourse/>
      <WhyChooseUs/>
      <MusicSchoolTestimonials/>
      <UpcomingWebinars/>
      <Instructors/>
      <Footer/>
    </main>
  )
}

export default page