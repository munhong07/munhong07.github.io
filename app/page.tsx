import Image from 'next/image'
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faHand } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <div>
      <div className="flex flex-col">
        <Navbar />

        {/* Intro Section*/}
        <div className="w-auto h-auto py-36">
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left w-96 h-auto lg:h-96 tracking-wider text-3xl lg:text-5xl rounded-md p-4">
              <h1 className="font-bold leading-snug">
                Hello!
                My name is
                <span className="text-indigo-500"> Mun Hong</span>
              </h1>

              <div className="flex pt-5 gap-5">
                <a href="#" className="flex p-1 hover:text-indigo-600 rounded-lg hover:scale-110 duration-200">
                  <FontAwesomeIcon icon={faGithub} className="text-4xl lg:text-4xl" href="#" />
                </a>
                <a href="#" className="flex p-1 hover:text-indigo-600  rounded-lg hover:scale-110 duration-200">
                  <FontAwesomeIcon icon={faEnvelope} className="text-4xl lg:text-4xl" />
                </a>
                <a href="https://wa.me/0164513767" className="flex p-1 hover:text-indigo-600  rounded-lg hover:scale-110 duration-200">
                  <FontAwesomeIcon icon={faWhatsapp} className="text-4xl lg:text-4xl" />
                </a>
              </div>

              {/* <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Hello!")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("My name is Mun Hong")
                    .start()
                }}
              /> */}
            </div>

            <div className="flex justify-center items-center w-auto h-auto sm:size-96 md:size-1/2 ">
              <Image src="/images/illustration.jpg" quality={100} width={700} height={700} alt="pic" />
            </div>
          </div>
        </div>

        {/* About Me */}
        <div className="w-full h-auto py-12 bg-cloud bg-center bg-fixed" id="about">
          <div className="flex flex-col py-36 md:flex-col lg:flex-row gap-0 justify-evenly items-center">
            <div className="w-96 text-center md:w-2/12 lg:w-auto text-2xl lg:text-4xl font-bold">
              <p className="underline decoration-indigo-500 decoration-4 underline-offset-8 animate-bounce">About Me</p>
            </div>
            <div className="w-full h-auto lg:w-[52%] text-left text-xl sm:text-1xl md:text-2xl lg:w-2/3 p-4 ">
              <p className="text-justify">
                I am a recent <span className="font-bold text-indigo-500">software engineer</span> <span className="font-bold">graduate</span>, and I am passionate about
                learning and developing scalable software solutions. With a solid foundation in <span className="font-bold italic">HTML</span>, <span className="font-bold italic">CSS</span>,
                and <span className="font-bold italic">JavaScript</span>, as well as
                experience with web development frameworks like React and Tailwind, I have further improved my skills through internships.
                I am currently seeking an entry-level software developer position, preferably in front-end development, where I can apply
                my technical skills and contribute to dynamic projects in the IT industry.
              </p>
            </div>
          </div>
        </div>

        {/* Education Section*/}
        <div className="w-auto h-auto py-36">
          <div className="flex flex-col lg:flex-row-reverse justify-center items-center md:justify-evenly">
            <div className="mb-10 lg:mb-10">
              <p className="text-center font-bold underline decoration-4 underline-offset-8 decoration-indigo-500 text-3xl lg:text-4xl p-2">Education</p>
            </div>
            <div className="space-y-24">
              <div className="flex space-x-6">
                <h1 className="text-3xl font-bold">01</h1>
                <span className="h-0.5 bg-black w-20 mt-5"></span>
                <div className="text-left">
                  <h1 className="font-bold text-2xl lg:text-3xl">Asia Pacific University</h1>
                  <p className="lg:text-2xl text-indigo-500">2018 - 2019</p>
                  <p className="lg:text-2xl">Certificate in Information and Communication Technology</p>
                </div>
              </div>
              <div className="flex space-x-6">
                <h1 className="text-3xl font-bold">02</h1>
                <span className="h-0.5 bg-black w-20 mt-5"></span>
                <div className="text-left">
                  <h1 className="font-bold text-2xl lg:text-3xl">Asia Pacific University</h1>
                  <p className="lg:text-2xl text-indigo-500">2019 - 2022</p>
                  <p className="lg:text-2xl">Diploma in Information and Communication Technology</p>
                </div>
              </div>
              <div className="flex space-x-6">
                <h1 className="text-3xl font-bold">03</h1>
                <span className="h-0.5 bg-black w-20 mt-5"></span>
                <div className="text-left">
                  <h1 className="font-bold text-2xl lg:text-3xl">Asia Pacific University</h1>
                  <p className="lg:text-2xl text-indigo-500">2022 - 2024</p>
                  <p className="lg:text-2xl">BSc (Hons) in Software Engineering </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="w-auto h-auto py-12 lg:py-56  bg-gradient-to-tl from-slate-50 to-indigo-400 bg-mountains bg-fixed" id="experience">
          <div className="flex justify-center items-center">
            <h1 className="font-bold text-2xl lg:text-4xl text-black underline decoration-indigo-500 decoration-4 underline-offset-8">Experience</h1>
          </div>
          <div className="flex flex-col lg:flex-row gap-10 mt-10 py-5 justify-center items-center">
            <div className="bg-white xs:w-full sm:w-[520px] lg:w-[600px] h-auto lg:h-[400px] p-4 rounded-lg xl:hover:shadow-lg duration-300 xl:hover:scale-110 border-2 border-inherit">
              <div className="flex flex-col gap-2">
                <div className="flex flex-col-reverse xs:flex-row justify-between items-start">
                  <div>
                    <p className="font-bold text-lg md:text-1xl p-1">TigaKY</p>
                    <p className="font-bold text-indigo-600 p-1">2022 - Present</p>
                    <p className="font-bold p-1">Intern</p>
                  </div>
                  <Image src="/images/tigaky.jpg" quality={100} width={500} height={500} alt="tigaky" className="w-auto h-auto xs:h-20" />
                </div>
                <ul className="flex flex-col gap-4 p-2 text-justify">
                  <li className="flex gap-2"><span><FontAwesomeIcon icon={faCheck} /></span>Deployed and managed virtual machines, installed various operating systems including Windows, Ubuntu, and Debian on Proxmox. Allocated resources for optimal performance.</li>
                  <li className="flex gap-2"><span><FontAwesomeIcon icon={faCheck} /></span>Utilized Leaflet.js to integrate geographical coordinates, enabling pinpoint marker functionality for map interaction.</li>
                  <li className="flex gap-2"><span><FontAwesomeIcon icon={faCheck} /></span>Configured Shinobi CCTV systems, managing cameras and streams for surveillance applications.</li>
                </ul>
              </div>
            </div>
            <div className="bg-white w-full xs:w-full sm:w-[520px] lg:w-[600px] h-auto lg:h-[400px] p-4 rounded-lg xl:hover:shadow-lg duration-300 xl:hover:scale-110 border-2 border-inherit">
              <div className="flex flex-col gap-2">
                <div className="flex flex-col-reverse xs:flex-row justify-between items-start">
                  <div>
                    <p className="font-bold text-lg md:text-1xl p-1">MACO  <span className="text-sm">(Medical Awareness Camp Outreach)</span></p>
                    <p className="font-bold text-indigo-600 p-1">2022 - Present</p>
                    <p className="font-bold p-1">IT Technician</p>
                  </div>
                  <Image src="/images/maco.png" quality={100} width={500} height={500} alt="maco" className="w-24 h-auto" />
                </div>
                <ul className="flex flex-col gap-4 p-3 text-justify">
                  <li className="flex gap-2"><span><FontAwesomeIcon icon={faCheck} /></span>Refurbished donated PCs, laptops, and other additional computers peripherals before distributing them to schools who are in need.</li>
                  <li className="flex gap-2"><span><FontAwesomeIcon icon={faCheck} /></span>Maintained adequate inventory of accessories to fulfill weekly distribution plans.</li>
                  <li className="flex gap-2"><span><FontAwesomeIcon icon={faCheck} /></span>Researched and deployed a multi-seat system using Ubuntu OS to enable multiple users to use one PC. </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Skill section */}
        <div className="w-auto h-auto py-20 lg:py-40 lg:px-10 flex flex-col lg:flex-row gap-10 bg-gray-100" id="skill">
          <div className="flex flex-col lg:w-1/2 p-5 bg-white rounded-xl">
            <h1 className="font-bold p-5 text-2xl text-center lg:text-left lg:text-3xl underline underline-offset-8 decoration-4 decoration-indigo-500">I am familiar with</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-1 pt-12">
              <div className="flex flex-col justify-center items-center p-5">
                <Image src="/images/html.png" quality={100} width={100} height={100} alt="html" />
                <p className="text-black font-semibold text-center text-normal md:text-xl">HTML</p>
              </div>
              <div className="flex flex-col justify-center items-center p-5">
                <Image src="/images/css.png" quality={100}  width={100} height={100} alt="css" />
                <p className="text-black font-semibold text-center text-normal md:text-xl">CSS</p>
              </div>
              <div className="flex flex-col justify-center items-center p-5">
                <Image src="/images/js.png" quality={100} width={100} height={100} alt="javascript" />
                <p className="text-black font-semibold text-center text-normall md:text-xl">JavaScript</p>
              </div>
              <div className="flex flex-col justify-center items-center p-5">
                <Image src="/images/php.png" quality={100} width={100} height={100} alt="php" />
                <p className="text-black font-semibold text-center text-normal md:text-xl">PHP</p>
              </div>
              <div className="flex flex-col justify-center items-center p-5">
                <Image src="/images/tailwind.png" quality={100} width={100} height={100} alt="tailwind" />
                <p className="text-black font-semibold text-center text-normal md:text-xl">Tailwind</p>
              </div>
              <div className="flex flex-col justify-center items-center p-5">
                <Image src="/images/react.png" quality={100} width={100} height={100} alt="react" />
                <p className="text-black font-semibold text-center text-normal md:text-xl">React</p>
              </div>
              <div className="flex flex-col justify-center items-center p-5">
                <Image src="/images/python.png" quality={100} width={100} height={100} alt="python" />
                <p className="text-black font-semibold text-center text-normal md:text-xl">Python</p>
              </div>
              <div className="flex flex-col justify-center items-center p-5">
                <Image src="/images/java.png" quality={100} width={100} height={100} alt="java" />
                <p className="text-black font-semibold text-center text-normal md:text-xl">Java</p>
              </div>
              <div className="flex flex-col justify-center items-center p-5">
                <Image src="/images/mysql.png" quality={100} width={100} height={100} alt="mysql" />
                <p className="text-black font-semibold text-center text-normal md:text-xl">MySQL</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:w-1/2 p-5 bg-white rounded-xl">
            <h1 className="font-bold p-5 text-2xl text-center lg:text-left lg:text-3xl underline underline-offset-8 decoration-4 decoration-indigo-500">Language</h1>
            <div className="flex flex-col lg:flex lg:flex-col items-center h-full w-full gap-4 pt-16">
              <div className="bg-indigo-100 p-2 rounded-full w-full md:w-3/4">
                <div className="flex justify-between bg-gradient-to-r from-slate-50 via-cyan-300 to-indigo-500 p-4 w-[80%] rounded-full">
                  <p className="font-bold text-xl">Chinese</p>
                  <p className="font-bold text-xl text-gray-100">80%</p>
                </div>
              </div>
              <div className="bg-indigo-100 p-2 rounded-full w-full md:w-3/4">
                <div className="flex justify-between bg-gradient-to-r from-slate-50 via-cyan-300 to-indigo-500 p-4 w-[70%] rounded-full">
                  <p className="font-bold text-xl">English</p>
                  <p className="font-bold text-xl text-gray-100">70%</p>
                </div>
              </div>
              <div className="bg-indigo-100 p-2 rounded-full w-full md:w-3/4">
                <div className="flex justify-between bg-gradient-to-r from-slate-50 via-cyan-300 to-indigo-500 p-4 w-[50%] rounded-full">
                  <p className="font-bold text-xl">Malay</p>
                  <p className="font-bold text-xl text-gray-100">50%</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Slider */}
        {/* <div className="w-full h-auto flex flex-col justify-center items-center">
        <Marquee autoFill pauseOnHover>
          <ul className="flex flex-row gap-5 text-center">
            <li className="flex flex-col items-center p-5">
              <img src="./images/html.png" width="56" height="56" alt="html" />
            </li>
            <li className="flex flex-col items-center p-5">
              <img src="./images/css.png" width="56" height="56" alt="css" />
            </li>
            <li className="flex flex-col items-center p-5">
              <img src="./images/js.png" width="56" height="56" alt="javascript" />
            </li>
            <li className="flex flex-col items-center p-5">
              <img src="./images/react.png" width="56" height="56" alt="react" />
            </li>
            <li className="flex flex-col items-center p-5">
              <img src="./images/tailwind.png" width="56" height="56" alt="tailwind" />
            </li>
            <li className="flex flex-col items-center p-5">
              <img src="./images/php.png" width="56" height="56" alt="php" />
            </li>
            <li className="flex flex-col items-center p-5">
              <img src="./images/python.png" width="56" height="56" alt="python" />
            </li>
            <li className="flex flex-col items-center p-5">
              <img src="./images/java.png" width="56" height="56" alt="java" />
            </li>
            <li className="flex flex-col items-center p-5">
              <img src="./images/mysql.png" width="56" height="56" alt="mysql" />
            </li>
          </ul>
        </Marquee>
      </div> */}


        {/* Project */}
        <section className="w-full h-auto py-36 mx-auto bg-snow bg-fixed" id="project">

          <div className="flex flex-col lg:flex-row justify-center items-center md:justify-evenly">
            <div>
              <h1 className="font-bold py-5 text-2xl lg:text-3xl underline underline-offset-8 decoration-4 decoration-indigo-500">Academic Project</h1>
            </div>

            <div className="space-y-12">
              <div className="flex">
                <div className="bg-white p-4 w-full h-auto xs:h-3/4 lg:h-[380px] xs:w-[440px] md:w-[500px] lg:w-[550px] rounded-lg duration-200 lg:hover:scale-110 lg:hover:shadow-lg lg:hover:shadow-indigo-200 border-2 border-indigo-100">
                  <p className="flex gap-2 justify-items items-center font-bold underline decoration-2 underline-offset-8 decoration-indigo-500"><span className="text-2xl"><FontAwesomeIcon icon={faHand} /></span>Hand Gesture Recognition System</p>
                  <ul className="flex flex-col gap-4 p-4 text-justify">
                    <li className="flex gap-2"><span><FontAwesomeIcon icon={faCheck} /></span>Developed a Hand Gesture Recognition System utilizing Python, OpenCV, and the MediaPipe library.</li>
                    <li className="flex gap-2"><span><FontAwesomeIcon icon={faCheck} /></span>Utilized OpenCV for capturing images and integrating them with MediaPipe landmark detection for hand gesture analysis.</li>
                    <li className="flex gap-2"><span><FontAwesomeIcon icon={faCheck} /></span>Implemented a Random Forest Classifier to process images captured through the system.</li>
                    <li className="flex gap-2"><span><FontAwesomeIcon icon={faCheck} /></span>Achieved a model accuracy of 89% in recognizing and classifying various hand gestures in real-time.</li>
                  </ul>
                </div>
              </div>
              <div className="flex">
                <div className="bg-white p-4 w-full h-auto xs:h-3/4 lg:h-[380px] xs:w-[440px] md:w-[500px] lg:w-[550px] rounded-lg duration-200 lg:hover:scale-110 lg:hover:shadow-lg lg:hover:shadow-indigo-200 border-2 border-indigo-100">
                  <p className="flex gap-2 justify-items items-center underline underline-offset-8 decoration-2 decoration-indigo-500 font-bold"><span><FontAwesomeIcon icon={faBookOpen} /></span>Quiz Learning System</p>
                  <ul className="flex flex-col gap-4 p-4 text-justify">
                    <li className="flex gap-2"><span><FontAwesomeIcon icon={faCheck} /></span>Developed a simple web application using a full-stack approach, incorporating PHP for server-side scripting,
                      HTML for content structure, CSS for styling, and JavaScript for interactive functionality. </li>
                    <li className="flex gap-2"><span><FontAwesomeIcon icon={faCheck} /></span>Implemented MySQL for database management, integrating CRUD operations to effectively manage data.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}
