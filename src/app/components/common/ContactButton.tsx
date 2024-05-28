"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import ButtonAnimation from "./ButtonAnimation";

gsap.registerPlugin(useGSAP);


interface ContactButtonProps {
    text: string;
}

function ContactButton({ text }: ContactButtonProps) {
    const contactButton = useRef(null);
    const contactIcon = useRef(null);
    const [contact, setContact] = useState<number>();

    useEffect(() => {
        const contactContainer:any = document.querySelector('.contact');
        setContact(contactContainer.offsetTop);
    }, []);

    useGSAP(() => {
        const tl = gsap.timeline({paused:true});
        tl.to(contactButton.current,
            {
            opacity:1,
            ease:'power2.inOut',
            duration:2,
        })
        tl.play();
    })

    const hoverContactMe = () => {
        gsap.to(contactButton.current, {
            xPercent: 4,
        });
        // gsap.to(contactIcon.current, {
        //     scale:1,
        //     duration:0.2,
        //     ease:'power3.inOut'
        // })
    };

    const hoverContactMeLeave = () => {
        gsap.to(contactButton.current, {
            xPercent: 0,
        });
        // gsap.to(contactIcon.current, {
        //     scale:0,
        //     duration:0.2,
        //     ease:'power3.inOut'
        // })
    };

    return (
        <>
            <div
                ref={contactButton}
                onMouseEnter={hoverContactMe}
                onMouseLeave={hoverContactMeLeave}
                onClick={() => window.scrollTo({ top: contact, behavior: 'smooth' })}
                className="contact-button inline-flex flex-row gap-3 items-center py-3 px-6 my-8 rounded-lg text-[#000] text-[20px] font-medium bg-[var(--button-color)] cursor-pointer opacity-0"
            >
                <div ref={contactIcon} className="relative top-[1px]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                </div>
                <ButtonAnimation buttonText="Contact Me" />
            </div>
        </>
    );
}

export default ContactButton;
