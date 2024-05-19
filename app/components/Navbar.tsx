'use client';
import React from 'react'
import { Fragment, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import { Transition, Popover, PopoverButton, PopoverPanel, Menu } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/24/outline'

export const Navbar = () => {

    const handleClick = (elementId: string): void => {
        const element = document.getElementById(elementId);

        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="flex justify-around h-16 items-center top-0 z-10 sticky backdrop-blur-xl bg-white/30">
            <div className="font-bold text-2xl">
                mun hong
            </div>
            <ul className="hidden md:flex lg:flex gap-10">
                <li>
                    <button className="flex font-semibold hover:before:scale-x-100 hover:before:origin-left relative text-lg hover:text-indigo-500
                        before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 
                        before:scale-x-0 before:bg-indigo-500 before:absolute before:left-0 before:bottom-0"
                        onClick={() => handleClick('about')}>About Me</button>
                </li>
                <li>
                    <button className="flex font-semibold hover:before:scale-x-100 hover:before:origin-left relative text-lg hover:text-indigo-500
                        before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 
                        before:scale-x-0 before:bg-indigo-500 before:absolute before:left-0 before:bottom-0"
                        onClick={() => handleClick('experience')}>Experience</button>
                </li>
                <li>
                    <button className="flex font-semibold hover:before:scale-x-100 hover:before:origin-left relative text-lg hover:text-indigo-500
                        before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 
                        before:scale-x-0 before:bg-indigo-500 before:absolute before:left-0 before:bottom-0"
                        onClick={() => handleClick('skill')}>Skill</button>
                </li>
                <li>
                    <button className="flex font-semibold hover:before:scale-x-100 hover:before:origin-left relative text-lg hover:text-indigo-500
                        before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 
                        before:scale-x-0 before:bg-indigo-500 before:absolute before:left-0 before:bottom-0"
                        onClick={() => handleClick('project')}>Project</button>
                </li>
            </ul>
            <div className="hidden md:flex" >
                <a href="./images/html.png" className="flex justify-center items-center font-medium gap-2 hover:before:scale-x-100 hover:before:origin-left relative 
                        before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 text-lg
                        before:scale-x-0 before:bg-indigo-500 before:absolute before:left-0 before:bottom-0 hover:text-indigo-500 duration-200" download>
                    <FontAwesomeIcon icon={faFileArrowDown} />
                    Resume
                </a>
            </div>

            {/* Mobile Menu Testing */}
            <div className="md:hidden relative z-50">
                <Popover>
                    <PopoverButton>
                        <Bars3Icon
                            className="h-8 w-8"
                            aria-hidden="true"
                        />
                    </PopoverButton>
                    <Transition
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <PopoverPanel
                            anchor="bottom"
                            // className="flex flex-col"
                            className="flex flex-col justify-center items-start w-56 h-auto z-40 bg-white text-black shadow-lg rounded-lg p-5 gap-4 cursor-default"
                        >
                            <a onClick={() => handleClick('about')} className="hover:bg-indigo-200 w-full p-2 rounded-md">About Me</a>
                            <a onClick={() => handleClick('experience')} className="hover:bg-indigo-200 w-full p-2 rounded-md">Experience</a>
                            <a onClick={() => handleClick('skill')} className="hover:bg-indigo-200 w-full p-2 rounded-md">Skill</a>
                            <a onClick={() => handleClick('project')} className="hover:bg-indigo-200 w-full p-2 rounded-md">Project</a>
                        </PopoverPanel>
                    </Transition>
                </Popover>
            </div>
        </nav >
    )
}
