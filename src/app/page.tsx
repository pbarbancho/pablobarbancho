"use client";
import { SkillCard } from "./components/SkillCard";
import { SkillHorizontalScroll } from "./components/SkillsHorizontalScroll";
import { ExperienceCard } from "./components/ExperienceCard";
import { ExperienceContainer } from "./components/ExperienceContainer";
import { Navbar } from "./components/NavBar";
import Image from 'next/image'

import { useState, useEffect } from "react";

export default function Home() {

  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    fetch('/api/skills')
      .then(response => response.json())
      .then(data => {setSkills(data); setSelectedCategory('')});
  }, []);

  useEffect(() => {
    fetch('/api/experience')
      .then(response => response.json())
      .then(data => setExperience(data));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.fixed');
      if (navbar) {
        if (window.scrollY > 0) {
          navbar.classList.add('bg-background');
        } else {
          navbar.classList.remove('bg-background');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="h-screen w-screen font-inter">
      <div className="fixed inset-0 bg-custom-radial z-[-1]"></div>
      <main className="relative flex flex-col gap-12 z-10">
        <Navbar />
        <section className="h-screen text-white flex items-center" id="home">
          <div className="absolute right-0 h-screen w-1/2 z-0"> {/* Contenedor de la imagen y el degradado */}
            <div className="relative w-full h-full">
              <Image
              src="/hero.png" // Reemplaza con la ruta de tu imagen
              alt="Descripción de la imagen"
              fill // Utiliza la propiedad 'fill' en lugar de 'layout="fill"'
              style={{ objectFit: 'cover' }} // Usa estilos en línea para objectFit si estás usando Next.js 13+
              quality={100} // Opcional: ajusta la calidad de la imagen
              className="rounded" // Opcional: añade clases adicionales según tus necesidades
              />
            </div>

            {/* Degradado superpuesto */}
            <div className="absolute inset-0 bg-hero z-1"></div>
          </div>

          <div className="text-left px-32 z-10">
            <h1 className="text-[170px] font-bold m-0 leading-[170px] ml-[-5px]">PABLO</h1>
            <h2 className="text-[70px] font-bold m-0 leading-[70px] font-light">Barbancho Martín</h2>
            <h3 className="text-[36px] leading-[36px] my-12 font-extralight">
              Data Scientist | Innovative | Analytical thinking
            </h3>
            <p className="text-[28px] leading-[28px] font-thin">
              Tackling complex problems through original strategies and a logical approach
            </p>
          </div>
        </section>
        <section className="overflow-hidden" id="skills">
          <div className="flex gap-4 flex-nowrap flex-col">
            <h2 className="pl-32 text-[64px] font-bold my-4"><span className="text-gray-500">/</span> Skills</h2>
            <div className="flex items-center gap-4 overflow-x-auto no-scrollbar flex-nowrap pl-32 mb-8 mr-8">
              <button className={`${selectedCategory == '' ? 'bg-foreground text-background' : 'bg-transparent'} font-thin text-[14px] rounded-full py-1 px-3 border border-foreground w-fit whitespace-nowrap`} onClick={() => setSelectedCategory('')}>All</button>
              <button className={`${selectedCategory == 'Data Analysis' ? 'bg-foreground text-background' : 'bg-transparent'} font-thin text-[14px] rounded-full py-1 px-3 border border-foreground w-fit whitespace-nowrap`} onClick={() => setSelectedCategory('Data Analysis')}>Data Analysis</button>
              <button className={`${selectedCategory == 'AI/ML' ? 'bg-foreground text-background' : 'bg-transparent'} font-thin text-[14px] rounded-full py-1 px-3 border border-foreground w-fit whitespace-nowrap`} onClick={() => setSelectedCategory('AI/ML')}>AI/ML</button>
              <button className={`${selectedCategory == 'DevOps' ? 'bg-foreground text-background' : 'bg-transparent'} font-thin text-[14px] rounded-full py-1 px-3 border border-foreground w-fit whitespace-nowrap`} onClick={() => setSelectedCategory('DevOps')}>DevOps</button>
              <button className={`${selectedCategory == 'Web Development' ? 'bg-foreground text-background' : 'bg-transparent'} font-thin text-[14px] rounded-full py-1 px-3 border border-foreground w-fit whitespace-nowrap`} onClick={() => setSelectedCategory('Web Development')}>Web Development</button>
              <button className={`${selectedCategory == 'Data Visualization' ? 'bg-foreground text-background' : 'bg-transparent'} font-thin text-[14px] rounded-full py-1 px-3 border border-foreground w-fit whitespace-nowrap`} onClick={() => setSelectedCategory('Data Visualization')}>Data Visualization</button>
              <button className={`${selectedCategory == 'Computer Vision' ? 'bg-foreground text-background' : 'bg-transparent'} font-thin text-[14px] rounded-full py-1 px-3 border border-foreground w-fit whitespace-nowrap`} onClick={() => setSelectedCategory('Computer Vision')}>Computer Vision</button>
              <button className={`${selectedCategory == 'Languajes' ? 'bg-foreground text-background' : 'bg-transparent'} font-thin text-[14px] rounded-full py-1 px-3 border border-foreground w-fit whitespace-nowrap`} onClick={() => setSelectedCategory('Languajes')}>Languajes</button>
              <button className={`${selectedCategory == 'Databases' ? 'bg-foreground text-background' : 'bg-transparent'} font-thin text-[14px] rounded-full py-1 px-3 border border-foreground w-fit whitespace-nowrap`} onClick={() => setSelectedCategory('Databases')}>Databases</button>
            </div>
          </div>
          
          <SkillHorizontalScroll>
            {selectedCategory !== '' ? skills.filter((skill: any) => skill.categories.includes(selectedCategory)).map((skill: any) => (
              <SkillCard key={skill.id} title={skill.title} bgColor={skill.bgColor} image={skill.image} />
            )) : skills.map((skill: any) => (
              <SkillCard key={skill.id} title={skill.title} bgColor={skill.bgColor} image={skill.image} />
            ))}
          </SkillHorizontalScroll>
        </section>
        <section className="text-white px-32" id="experience">
          <h2 className="text-[64px] font-bold my-8"><span className="text-gray-500">/</span> Experience</h2>
          <ExperienceContainer>
            {experience.map((job: any) => (
              <ExperienceCard 
                key={job.id} 
                jobTitle={job.title} 
                companyName={job.company} 
                description={
                  <>
                    {job.description.split('\n').map(((paragraph: string) => (
                      <p>{paragraph}</p>
                    )))}
                  </>
                }/>
            ))}
          </ExperienceContainer>
        </section>
        <section className="px-32" id="projects">
          <h2 className="text-[64px] font-bold my-8"><span className="text-gray-500">/</span> Projects</h2>
          <h3 className="text-[32px] italic px-32">Coming soon...</h3>
        </section>
        <section className="px-32 my-8" id="contact">
          <div className="flex flex-col items-center justify-center rounded-lg p-16 bg-card shadow-bl-custom w-fit mx-auto">
            <h2 className="text-[32px] font-bold mb-4"><span className="text-gray-500">/</span> Contact</h2>
            <p>Thank you for visiting my personal website. I am eager to bring my expertise in Machine Learning and technical consulting to new challenges. If you are looking for a dedicated professional to join your team, please feel free to contact me at <a className="text-gray-400 underline" href="mailto:pbarbanchom@gmail.com">pbarbanchom@gmail.com</a>. I look forward to discussing how my skills can contribute to your projects.</p>
          </div>
        </section>
        <section className="text-white flex items-center justify-center my-8">
          <p className="text-[14px] my-auto">© 2024 Pablo Barbancho Martín</p>
        </section>
      </main>
    </div>
  );
}

