'use client';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import ButtonAnimation from '../common/ButtonAnimation';

function SkillsItems() {


    const [isIntersecting, setIsIntersecting] = useState(false);
    const skillsItems:any = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            },
            { rootMargin: "-100px" }
        );
        observer.observe(skillsItems.current);

        return () => observer.disconnect();
    }, [isIntersecting]);

    useEffect(() => {
        if (isIntersecting) {
            gsap.to(skillsItems.current.children, {
                opacity: 1,
                duration: 1.1,
                ease: 'back.inOut',
                stagger: 0.2
            })
        }
    }, [isIntersecting])

    return (
        <>
            <ul ref={skillsItems} className="grid grid-cols-3 gap-x-2 gap-y-5 max-sm:grid-cols-1">
                <li className="opacity-0">
                    <span className="flex bg-[#D1D8C5] text-black text-[20px] border-white rounded-lg py-2 px-4 border-solid border-2 align-middle text-center justify-center font-medium">
                        <ButtonAnimation buttonText="Javascript" />
                    </span>
                </li>
                <li className="opacity-0">
                    <span className="flex bg-[#D1D8C5] text-black text-[20px] border-white rounded-lg py-2 px-4 border-solid border-2 align-middle text-center justify-center font-medium">
                        <ButtonAnimation buttonText="TypeScript" />
                    </span>
                </li>
                <li className="opacity-0">
                    <span className="flex bg-[#D1D8C5] text-black text-[20px] border-white rounded-lg py-2 px-4 border-solid border-2 align-middle text-center justify-center font-medium">
                        <ButtonAnimation buttonText="Nextjs" />
                    </span>
                </li>
                <li className="col-span-2 opacity-0 max-sm:col-span-1">
                    <span className="flex bg-[#D1D8C5] text-black text-[20px] border-white rounded-lg py-2 px-4 border-solid border-2 align-middle text-center justify-center font-medium">
                        <ButtonAnimation buttonText="HTML, CSS, Responsive" />
                    </span>
                </li>
                <li className="opacity-0">
                    <span className="flex bg-[#D1D8C5] text-black text-[20px] border-white rounded-lg py-2 px-4border-solid border-2 align-middle text-center justify-center font-medium">
                        <ButtonAnimation buttonText="Tailwind" />
                    </span>
                </li>
                <li className="opacity-0">
                    <span className="flex bg-[#D1D8C5] text-black text-[20px] border-white rounded-lg py-2 px-4 border-solid border-2 align-middle text-center justify-center font-medium">
                        <ButtonAnimation buttonText="RestAPI" />
                    </span>
                </li>
                <li className="col-span-2 opacity-0">
                    <span className="flex bg-[#e2e2e2] text-black text-[20px] border-white rounded-lg py-2 px-4 border-solid border-2 align-middle text-center justify-center font-medium">
                        <ButtonAnimation buttonText="ReactQuery" />
                    </span>
                </li>
            </ul>
        </>
    )
}

export default SkillsItems;