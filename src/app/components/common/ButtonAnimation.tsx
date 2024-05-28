import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

interface ButtonAnimationPorps {
    buttonText: string;
    duration?: number;
}

function ButtonAnimation({ buttonText, duration }: ButtonAnimationPorps) {
    const [linkItem, setLinkItem] = useState<string>(buttonText);
    const links = linkItem.split("");
    useGSAP(() => {
        const menuItems = document.querySelectorAll('.menu-item');
        menuItems.forEach((item) => {
            const tl = gsap.timeline({ paused: true })
            const firstItem = item.querySelector('.first-item');
            const secondItem = item.querySelector('.second-item');

            tl.to(firstItem.children, {
                opacity: 0,
                y: -20,
                duration: 0.2,
                ease: 'power4.inOut',
                stagger: {
                    amount: 0.05,
                    from: 'end',
                }
            })
            tl.fromTo(secondItem.children,
                {
                    opacity: 0,
                    y: 20,
                    duration: 0.2,
                    ease: 'back.inOut',
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.2,
                    ease: 'power4.inOut',
                    stagger: {
                        amount: 0.05,
                        from: 'start'
                    }
                })
            item.addEventListener('mouseenter', () => {
                tl.play();
            })
            item.addEventListener('mouseleave', () => {
                tl.reverse();
            })
        })
    })

    return (
        <>
            <div className="text-base menu-item relative cursor-pointer transition-opacity duration-150 ease-in overflow-hidden">
                <div className="flex flex-row first-item cursor-pointer absolute">
                    {links.map((item: any, index: number) =>
                        <span key={index} className="text-link flex text-[19px]">{item}</span>
                    )}
                </div>
                <div className="flex flex-row second-item">
                    {links.map((item: any, index: number) =>
                        <span key={index} className="text-link flex text-[19px] text-[var(--button-color)]">{item}</span>
                    )}
                </div>
            </div>
        </>
    )
}

export default ButtonAnimation;