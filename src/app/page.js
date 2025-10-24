"use client";
import WorkExperience from "../components/WorkExperience"
import ProgrammingLanguages from "../components/ProgrammingLanguages"
import DatabaseSystems from "../components/DatabaseSystems"
import Frameworks from "../components/Frameworks"
import Education from "../components/Education"
import ContactCard from "../components/ContactCard"
import React, { useEffect } from 'react';
import anime from 'animejs';

export default function Home() {
  useEffect(() => {
    anime({
      targets: '#page-wrap > *', // Target children of the `page-wrap` div
      translateY: [100, 0], // Slide from 100px below to original position
      opacity: [0, 1], // Fade from 0 to 1 opacity
      easing: 'easeOutExpo',
      duration: 1000,
      delay: anime.stagger(100) // Delay each child's animation by 100ms
    });
  }, []);
  return (
    <main className="flex min-h-screen flex-col px-4 sm:px-0">
        <div id="page-wrap">
            
            <ContactCard />

            <ProgrammingLanguages />

            <Frameworks />
            
            <DatabaseSystems />
            
            <WorkExperience />

            <Education />
        </div>
    </main>
  )
}
