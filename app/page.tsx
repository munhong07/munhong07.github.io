"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";


import Marquee from "react-fast-marquee";



export default function Home() {

  return (
      <main className="flex flex-col relative w-full flex flex-col bg-white dark:bg-black gap-20 md:gap-0">
        <section className="flex flex-col justify-center items-center md:flex-row h-auto lg:py-0 lg:h-screen  dark:bg-zinc-900 text-black dark:text-white w-full">
          <div className="flex flex-col md:flex-row lg:justify-evenly items-center w-[95%] md:w-[90%] lg:w-[85%] xl:w-[75%] bg-zinc-100">
            <div className="flex flex-col justify-center items-center md:items-start bg-red-100 w-full lg:w-[50%] ">
              <p className="font-bold text-2xl md:text-3xl">Hello!</p>
              <p className="font-bold text-4xl md:text-5xl">I'm <span className="text-black dark:text-white">Mun Hong</span></p>
              <p className="text-gray-500">Software Engineer Graduate</p>

              <div className="mt-10">
                <button className="font-bold text-black dark:text-white lg:text-2xl">About <span className="text-zinc-600">me</span></button>
                <p className="text-justify text-zinc-500 lg:text-lg">A software engineering graduate with a foundation in HTML, CSS,
                  JavaScript, and experience in React and Tailwind. Seeking an entry-level
                  software developer position to apply
                  and further develop technical skills and contribute to dynamic IT projects.</p>
              </div>
            </div>
            <div className="flex justify-center items-center mt-10 md:mt-0 bg-yellow-100 w-full lg:w-[30%]">
              <Image src="/cryingcat.jpg" alt="image" width={150} height={150} className="rounded-[50%] sm:w-[150px] md:w-[200px] lg:w-[250px] h-auto" />
            </div>
          </div>
        </section>

        {/* <section className="flex flex-col justify-center items-center bg-white h-auto lg:h-screen py-12 dark:bg-gray-900 dark:text-white w-full">
        <div className="flex justify-between items-center w-[95%] md:w-[90%] lg:w-[75%]">
          <h1 className="font-bold text-2xl lg:text-5xl">About <span className="text-gray-400">me</span></h1>
          <p>01 </p>
        </div>
        <div className="w-[95%] md:w-[90%] lg:w-[75%] pt-4">
          <p className="text-justify lg:text-2xl">A software engineering graduate with a foundation in HTML, CSS,
            JavaScript, and experience in React and Tailwind. Seeking an entry-level
            software developer position to apply
            and further develop technical skills and contribute to dynamic IT projects.</p>
        </div>
      </section> */}

        <section className="flex flex-col justify-center items-center  dark:bg-gray-900 h-auto lg:h-screen w-full">
          <div className="flex flex-row justify-between items-center w-[95%] md:w-[90%] lg:w-[85%] xl:w-[75%] mx-auto mb-15">
            <h1 className="text-2xl lg:text-base  font-medium dark:text-white"><span className="font-bold">/</span> Education</h1>
            <p className="">02</p>
          </div>
          <div className="flex flex-col justify-center items-start lg:justify-between lg:items-start lg:flex-row gap-1 h-auto w-[95%] md:w-[90%] lg:w-[85%] xl:w-[75%]">
            <div className="flex flex-col items-start">
              <p className="text-2xl lg:text-6xl font-bold pb-5 dark:text-white">My Education</p>
              <p className="text-gray-500">A brief look at where I studied and what I focused on.</p>
            </div>

            <div className="flex flex-col bg-zinc-200 py-2 px-2 rounded-2xl gap-2 w-full lg:w-[50%] mt-10 md:mt-0">
              <div className="flex justify-between items-start py-5 px-5 bg-white rounded-lg">
                <ul className="flex flex-col">
                  <li className="lg:text-xl font-bold">Asia Pacific University</li>
                  <li className="text-lg text-gray-500 pt-5">2018 - 2019</li>
                  <li className="font-medium">Certificate in Information Technology and Communication</li>
                </ul>
                <p>1</p>
              </div>
              <div className="flex justify-between items-start py-5 px-5 bg-white rounded-lg">
                <ul className="flex flex-col">
                  <li className="lg:text-xl font-bold">Asia Pacific University</li>
                  <li className="text-lg text-gray-500 pt-5">2019 - 2022</li>
                  <li>Diploma in Information Technology and Communication</li>
                </ul>
                <p>2</p>
              </div>
              <div className="flex justify-between items-start py-5 px-5 bg-white rounded-lg">
                <ul>
                  <li className="lg:text-xl font-bold">Asia Pacific University</li>
                  <li className="text-lg text-gray-500 pt-5 font-medium">2022 - 2024</li>
                  <li className="font-medium">Bachelor in Software Engineering</li>
                </ul>
                <p>3</p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col justify-center items-center  dark:bg-gray-900 h-auto lg:h-screen w-full">
          <div className="flex flex-row justify-between items-center w-[95%] md:w-[90%] lg:w-[85%] xl:w-[75%] mx-auto mb-15">
            <h1 className="text-2xl lg:text-base  font-medium dark:text-white"><span className="font-bold">/</span> Skill</h1>
            <p className="">03</p>
          </div>

          <div className="flex flex-col justify-center items-start lg:justify-between lg:items-start lg:flex-row gap-1 h-auto w-[95%] md:w-[90%] lg:w-[85%] xl:w-[75%] h-auto mb-15">
            <div className="flex flex-col items-start">
              <p className="text-2xl lg:text-6xl font-bold pb-5 dark:text-white">My Skills</p>
              <p className="text-gray-500">Languages, frameworks, and tools that I'm familiar with.</p>
            </div>
          </div>
          <div className="flex flex-col w-[95%] md:w-[90%] lg:w-[85%] xl:w-[75%] bg-zinc-900 rounded-2xl p-3 gap-5">
            <div className="justify-items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 w-full h-auto">
              {/* <div className="flex flex-col justify-center items-center text-black bg-white rounded-lg w-24 h-24"><FontAwesomeIcon icon={faHtml5} className="text-5xl " /></div>
              <div className="flex flex-col justify-center items-center text-black bg-white rounded-lg w-24 h-24"><FontAwesomeIcon icon={faCss3Alt} className="text-5xl " /></div>
              <div className="flex flex-col justify-center items-center text-black bg-white rounded-lg w-24 h-24"><FontAwesomeIcon icon={faJs} className="text-5xl " /></div> */}
              <div className="text-black bg-white rounded-lg w-24 h-24">React</div>
              <div className="text-black bg-white rounded-lg w-24 h-24">Tailwind</div>
              <div className="text-black bg-white rounded-lg w-24 h-24">Bootstrap</div>
              <div className="text-black bg-white rounded-lg w-24 h-24">MySQL</div>
              <div className="text-black bg-white rounded-lg w-24 h-24">Git</div>
              <div className="text-black bg-white rounded-lg w-24 h-24"></div>


            </div>
          </div>

          <div className="relative overflow-hidden w-[80%]">
            {/* Fade overlay - left */}
            <div className="absolute left-0 top-0 w-20 h-full z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />

            {/* Fade overlay - right */}
            <div className="absolute right-0 top-0 w-20 h-full z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />

            <Marquee className="text-zinc-600 p-5">
              <div className="flex flex-row gap-20 text-lg">
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
                <p>React</p>
                <p>Tailwind</p>
                <p>MySQL</p>
                <p>Java</p>
                <p>Git</p>
                <p></p>
              </div>
            </Marquee>
          </div>
        </section>

        <section className="flex flex-col justify-center items-center  dark:bg-gray-900 h-auto lg:h-screen w-full">
          <div className="flex flex-row justify-between items-center w-[95%] md:w-[90%] lg:w-[85%] xl:w-[75%] mx-auto mb-15">
            <h1 className="text-2xl lg:text-base  font-medium dark:text-white"><span className="font-bold">/</span> Experience</h1>
            <p className="">04</p>
          </div>
          <div className="flex flex-col justify-center items-start lg:justify-between lg:items-start lg:flex-row gap-1 h-auto w-[95%] md:w-[90%] lg:w-[85%] xl:w-[75%] h-auto mb-15">
            <div className="flex flex-col items-start">
              <p className="text-2xl lg:text-6xl font-bold pb-5 dark:text-white">My Working Experience</p>
              <p className="text-gray-500">Practical experience built through part-time and internship roles.</p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-evenly items-center w-[95%] md:w-[90%] lg:w-[85%] xl:w-[75%] h-auto bg-zinc-900 rounded-2xl">
            <div className=" flex flex-col w-full lg:w-[50%] px-1.5 pt-1.5 pb-1.5 h-auto">
              <div className="flex flex-col p-5 bg-white rounded-xl h-auto  md:h-[320px] lg:h-[420px] gap-3">

                <h1 className="text-black font-bold text-xl">TigaKy Sdn Bhd</h1>
                <div className="flex flex-row justify-between w-full">
                  <p className="text-zinc-500">2023 - 2024</p>
                  <p className=""><span className="bg-zinc-300 p-1 px-2 rounded-2xl text-black">IT Intern</span></p>
                </div>
                <ul className="list-disc list-inside text-justify ">
                  <li>Developed responsive web pages using React and Bootstrap for a
                    management system, including user input forms and OTP
                    verification, and integrated API for data fetching and submission.
                  </li>
                  <li>Integrated Leaflet.js for interactive maps with geographic
                    coordinate markers to enhance user experience.
                  </li>
                  <li>Deployed virtual machines, installed various operating systems
                    including Windows, Ubuntu, and Debian on Proxmox.
                  </li>
                  <li>
                    Configured Shinobi CCTV systems for surveillance camera and
                    stream management.
                  </li>
                </ul>
              </div>

            </div>
            <div className="flex flex-col w-full lg:w-[50%] pr-1.5 pt-1.5 pb-1.5 h-auto">
              <div className="flex flex-col p-5  rounded-r-xl h-auto md:h-[320px] lg:h-[420px] gap-3">

                <h1 className="text-zinc-100 font-bold text-xl">Medical Awareness Camp Outreach (MACO)</h1>
                <div className="flex flex-row justify-between w-full my-2">

                  <p className="text-zinc-400"> 2023 - Present</p>
                  <p><span className="bg-zinc-300 p-1 px-2 rounded-2xl text-black">IT Technician</span></p>
                </div>
                <ul className="list-disc list-inside text-justify text-zinc-300 ">
                  <li>Refurbished donated computers and peripherals for distribution
                    to schools in need.
                  </li>
                  <li>Maintained inventory to meet weekly and monthly distribution
                    schedules.
                  </li>
                  <li>Implemented a multi-seat Ubuntu system enabling multiple users
                    to share one PC.
                  </li>
                  <li>
                    Provided IT support and troubleshooting to maintain hardware
                    and software functionality.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="static lg:sticky lg:top-0 flex flex-col justify-center items-center  dark:bg-gray-900 h-auto lg:h-screen w-full ">
          <div className="flex flex-row justify-between items-center w-[95%] md:w-[90%] lg:w-[85%] xl:w-[75%] mx-auto mb-15">
            <h1 className="text-2xl lg:text-base  font-medium dark:text-white"><span className="font-bold">/</span> Project</h1>
            <p className="">05</p>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-start lg:justify-between lg:items-start lg:flex-row gap-1 h-auto w-[95%] md:w-[90%] lg:w-[85%] xl:w-[75%] h-full mb-15">
            <div className="flex flex-col items-start lg:w-[40%]">
              <p className="text-2xl lg:text-6xl font-bold pb-5 dark:text-white">Academic Projects</p>
              <p className="text-gray-500">Hands-on experience through technical projects during my studies.</p>
            </div>

            <div className="flex flex-col justify-start items-start lg:w-[50%] gap-2 h-[650px] mt-10 md:mt-0">
              <div className="w-full p-2 bg-zinc-100 h-[50%] rounded-2xl">
                <div className="flex flex-col p-4 bg-white h-full rounded-xl gap-5">
                  <div className="flex justify-between items-center">
                    <h1 className="font-bold">Hand Gesture Recognition System</h1>
                    <p className="flex justify-center items-center p-1 bg-zinc-200 rounded-xl px-2 text-sm">Final Year Project</p>
                  </div>
                  <ul className="list-decimal list-inside text-justify text-zinc-600">
                    <li>
                      Developed a hand gesture recognition system using Python,
                      OpenCV, MediaPipe, and a Random Forest Classifier.

                    </li>
                    <li>
                      Captured and processed hand gestures with OpenCV, extracted
                      key landmarks using MediaPipe for gesture analysis.

                    </li>
                    <li>
                      Implemented a Random Forest Classifier, achieving 89% accuracy
                      in real-time gesture recognition.
                    </li>
                    <li>
                      Designed as a prototype to demonstrate potential use in sign
                      language interpretation systems.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full p-2 bg-gray-100 h-[50%] rounded-2xl">
                <div className="flex flex-col bg-white w-full px-5 py-5 h-full rounded-xl gap-5">
                  <div className="flex justify-between items-center">
                    <h1 className="font-bold">Quiz Learning System</h1>
                    <p className="flex justify-center items-center p-1 bg-zinc-200 rounded-xl px-2 text-sm">Coursework</p>
                  </div>
                  <ul className="list-decimal list-inside text-justify font-medium text-zinc-600">
                    <li>
                      Developed a simple web application using a full-stack approach, incorporating PHP for server-side scripting, HTML for content structure, CSS for styling, and JavaScript for interactive functionality.
                    </li>
                    <li>
                      Implemented MySQL for database management, integrating CRUD operations to effectively manage data.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </section>

        <footer className="static lg:sticky lg:top-0 flex flex-col justify-center items-center h-screen w-full bg-zinc-900 ">
          <div className="flex flex-row justify-between items-center w-[95%] md:w-[90%] lg:w-[85%] xl:w-[75%] mx-auto mb-15">
            <h1 className="text-2xl lg:text-base  font-medium dark:text-white text-white"><span className="font-bold">/</span> TESTING</h1>
            <p className=" text-white">05</p>
          </div>
        </footer>

      </main>

      );
}
