'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import MenuItems from './MenuItems';



gsap.registerPlugin(useGSAP);


function Menu() {
    const [skills, setSkills] = useState<number>();
    const [works, setWorks] = useState<number>();
    const [contact, setContact] = useState<number>();
    const menu:any = useRef(null);
    useGSAP(() => {
        gsap.to(menu.current.children, {
            opacity: 1,
            ease: 'power1.out',
            duration: 0.3,
            stagger: 0.2
        })
    })
    useEffect(() => {
        const skills:any = document.querySelector('.skills');
        const works:any = document.querySelector('.works');
        const contact:any = document.querySelector('.contact');
        setSkills(skills?.offsetTop + 18)
        setWorks(works?.offsetTop + 18)
        setContact(contact?.offsetTop + 18)
    }, [])
    return (
        <>
            <header className="w-full">
                <div className="max-w-[51%] m-auto max-sm:max-w-[100%] max-sm:px-8">
                    <nav>
                        <div ref={menu} className="flex flex-row items-center justify-between text-white mt-8 gap-5">
                            <MenuItems text='Skills' onClick={() => window.scrollTo({ top: skills, behavior: 'smooth' })} />
                            <MenuItems text='My Works' onClick={() => window.scrollTo({ top: works, behavior: 'smooth' })} />
                            <MenuItems text='Contact Me' onClick={() => window.scrollTo({ top: contact, behavior: 'smooth' })} />
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Menu;