'use client'
import { useState, useEffect, useRef } from 'react'


export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const popoverRef = useRef<HTMLDivElement>(null);

    const [darkMode, setDarkMode] = useState(false);


    // useEffect(() => {
    //     if (darkMode) {
    //         document.documentElement.classList.add('dark')
    //     } else {
    //         document.documentElement.classList.remove('dark')
    //     }
    // }, [darkMode])

    // const toggleDarkMode = () => {
    //     setDarkMode(!darkMode)
    // }

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")

        if (storedTheme === "dark") {
            setDarkMode(true)
        } else if (storedTheme === "light") {
            setDarkMode(false)
        }
    }, [])

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    }, [darkMode])

    const toggleDarkMode = () => {
        setDarkMode(prev => !prev)
    }



    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    const handleMenuItemClick = (elementId: string): void => {
        const element = document.getElementById(elementId);

        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }

        setIsOpen(false);
    };

    return (
        <nav className="flex flex-row justify-center items-center w-full top-0 z-10 fixed">
            <div className="w-full md:w-[90%] lg:w-[85%] xl:w-[75%] h-14 flex justify-around md:justify-between items-center md:flex-row text-black  bg-zinc-100/99  dark:bg-zinc-800 dark:text-white bg-white rounded-b-lg transparent">

                <div className="flex justify-center items-center ml-6">
                    <h1 className="font-bold text-lg">Mun Hong</h1>
                </div>

                {/* Desktop View */}
                <div className="hidden md:flex">
                    <ul className="md:flex md:flex-row md:justify-between md:items-center gap-10 text-md">
                        <li className="">
                            <button
                                className="hover:bg-red-200"
                                onClick={() => handleMenuItemClick("aboutme")}
                            >Abount Me
                            </button>
                        </li>
                        <li className="">
                            <button
                                className="hover:bg-red-200"
                                onClick={() => handleMenuItemClick("education")}
                            >Education
                            </button>
                        </li>
                        <li className="">
                            <button
                                className="hover:bg-red-200"
                                onClick={() => handleMenuItemClick("skill")}
                            >Skill
                            </button>
                        </li>
                        <li className="">
                            <button
                                className="hover:bg-red-200"
                                onClick={() => handleMenuItemClick("experience")}
                            >Experience
                            </button>
                        </li>
                        <li className="">
                            <button
                                className="hover:bg-red-200"
                                onClick={() => handleMenuItemClick("project")}
                            >Project
                            </button>
                        </li>
                    </ul>
                </div>


                {/* Hamburger Menu */}
                <button
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >

                    {isOpen ? "✖" : "☰"}
                </button>

                {/* Mobile View */}
                {isOpen && (
                    <div
                        className="absolute top-7 w-full z-10 flex justify-center items-center md:hidden"
                        ref={popoverRef}
                    >
                        <div className="bg-white dark:bg-black dark:text-white p-6 rounded-lg shadow-lg w-3/4 max-w-xs">
                            <ul className="space-y-4">
                                <li>
                                    <button
                                        className="w-full text-left"
                                    onClick={() => handleMenuItemClick("aboutme")}
                                    >About Me</button>
                                </li>
                                <li>
                                    <button
                                        className="w-full text-left"
                                    // onClick={handleMenuItemClick}
                                    >Experience </button>
                                </li>
                                <li>
                                    <button
                                        className="w-full text-left"
                                    // onClick={handleMenuItemClick}
                                    >Skill</button>
                                </li>
                                <li>
                                    <button
                                        className="w-full text-left"
                                    // onClick={handleMenuItemClick}
                                    >Project</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}


                {/* <button
                className="hidden md:flex"
                type="button"
                onClick={toggleDarkMode}
                >
                
                </button> */}
                {/* {darkMode ? <FontAwesomeIcon icon={faLightbulb} className="text-xl"/> : <FontAwesomeIcon icon={faMoon} className="text-xl"/>} */}

                {/* Toggle Button */}
                <label className="hidden md:flex md:inline-flex md:items-center md:cursor-pointer mr-6">
                    <input type="checkbox" value="" className="sr-only peer" onChange={toggleDarkMode} />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300 dark:peer-focus:ring-blue-800 
                    rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white 
                    after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 
                    after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                    <span className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Theme </span>
                </label>
            </div>
        </nav>
    )
}
