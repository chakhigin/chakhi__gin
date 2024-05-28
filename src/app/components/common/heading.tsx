'use client';

import { useEffect, useRef, useState } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

interface Heading {
    title: string;
}

function Heading({ title }: Heading) {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const heading = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            },
            { rootMargin: "-100px" }
        );
        console.log(isIntersecting);
        observer.observe(heading.current);

        return () => observer.disconnect();
    }, [isIntersecting]);

    useEffect(() => {
        if (isIntersecting) {
            gsap.to(heading.current, {
                opacity: 1,
                y: 0,
                rotateZ: 0,
                duration: 0.7,
                ease: 'power1.inOut',
                stagger: 0.1
            })
        }
    }, [isIntersecting])

    return (
        <>
            <div className="heading overflow-hidden max-sm:overflow-visible">
                <h2 ref={heading} className="flex mb-3 text-[51px] text-white max-sm:text-[28px]">
                    {title}
                </h2>
            </div>
        </>
    )
}

export default Heading;