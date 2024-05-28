'use client';

import { useEffect, useRef, useState } from "react";
import gsap from 'gsap';
import Heading from "../common/heading";
import WorksItems from "./WorksItems";

function MyWorks() {

    const [isIntersecting, setIsIntersecting] = useState(false);
    const worksItems = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            },
            { rootMargin: "-100px" }
        );
        console.log("work item");
        observer.observe(worksItems.current);

        return () => observer.disconnect();
    }, [isIntersecting]);

    useEffect(() => {
        if (isIntersecting) {
            gsap.to(worksItems.current.children, {
                opacity: 1,
                duration: 1.1,
                ease: 'back.inOut',
                stagger: 0.2
            })
        }
    }, [isIntersecting])

    return (
        <>
            <div className="works">
                <div className="relative py-[120px] max-w-[45%] m-auto max-sm:max-w-[80%] max-sm:pt-[280px]">
                    <div className="flex items-center justify-center flex-row gap-20 max-sm:flex-col max-sm:gap-8 max-sm:justify-start max-sm:items-start">
                        <div className="min-w-[22%]">
                            <Heading title="My" />
                            <Heading title="Works" />
                        </div>
                        <div ref={worksItems} className="min-w-[78%] max-sm:min-w-[100%]">
                            <WorksItems link="https://noxhub.web.app/" title="Liqugate" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyWorks;