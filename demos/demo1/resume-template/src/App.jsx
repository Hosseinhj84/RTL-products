import { useState } from 'react'
import AboutMe from './components/About_me'
import Intro from './components/Intro'

export default function App() {

  return (
        <div className="w-full min-h-screen bg-gray-50 text-right direction-rtl">
      <Intro role="front-end Developer" img="#"/>
      <AboutMe
        age="21"
        university="دانشگاه XYZ"
        careerGoal="Front-end Developer"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ullam fugit error inventore expedita illum accusantium perferendis, a consectetur dolore corporis possimus, nulla, obcaecati quaerat."
      />
    </div>
  )
}