'use client';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);


interface WorksItemsProps {
    link: string,
    title: string,
}

function WorksItems({ link, title }: WorksItemsProps) {
    const workLink = useRef();


    const hoverLink = () => {
        gsap.to(workLink.current, {
            xPercent: 10,
            ease: 'back.inOut'
        })
    }

    const hoverLinkLeave = () => {
        gsap.to(workLink.current, {
            xPercent: 0,
            ease: 'back.inOut'
        })
    }

    return (
        <>
            <div className="works-items opacity-0">
                <div></div>
                <div className="">
                    <a href={link} onMouseEnter={hoverLink} onMouseLeave={hoverLinkLeave} ref={workLink} target="_blank" className="flex flex-row items-center gap-4 py-8 text-[var(--button-color)] text-[35px] max-sm:py-0 max-sm:text-[25px]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="58"
                            height="58"
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
                        {title}
                    </a>
                </div>
                <div></div>
            </div>
        </>
    )
}

export default WorksItems;