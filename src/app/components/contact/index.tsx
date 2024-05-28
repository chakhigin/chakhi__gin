'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Heading from "../common/heading";


function Contact() {

    const contact = useRef();

    const [isIntersecting, setIsIntersecting] = useState(false);
    const skillsItems = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            },
            { rootMargin: "-100px" }
        );
        console.log(isIntersecting);
        observer.observe(contact.current);

        return () => observer.disconnect();
    }, [isIntersecting]);

    useEffect(() => {
        if (isIntersecting) {
            gsap.to(contact.current.children, {
                opacity: 1,
                duration: 1.1,
                ease: 'back.inOut',
                stagger: 0.2
            })
        }
    }, [isIntersecting])


    return (
        <>
            <div className="contact">
                <div className="relative py-[180px] max-w-[45%] m-auto max-sm:max-w-[80%]">
                    <div className="flex items-center justify-center flex-row gap-20 max-sm:flex-col max-sm:gap-8 max-sm:justify-start max-sm:items-start">
                        <div className="min-w-[29%]">
                            <Heading title="Contact" />
                            <Heading title="Me" />
                        </div>
                        <div className="min-w-[71%] max-sm:min-w-[100%]">
                            <div ref={contact} className="flex flex-col gap-8">
                                <div className="text-white text-[20px] opacity-0">
                                    <a href="tel:+989371238240" className="flex flex-row items-center text-[var(--button-color)] text-[18px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-smartphone"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>&nbsp;+989371238240</a>
                                </div>
                                <div className="text-white text-[20px] opacity-0">
                                    <a href="mailto: ehsan5bill@gmail.com" className="flex flex-row items-center text-[var(--button-color)] text-[18px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>&nbsp;&nbsp;ehsan5bill[at]gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;