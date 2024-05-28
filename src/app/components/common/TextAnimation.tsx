'use client';

import React, { useEffect, useRef } from 'react'
import SplitType from 'split-type'
import gsap from 'gsap'
import { twMerge } from 'tailwind-merge'

import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

interface TextAnimationProps {
    text: string
    className?: string
    duration?: number

}

function TextAnimation({ text, className, duration }: TextAnimationProps) {

    const textItem = useRef<any>();
    useGSAP(
        () => {
            let textSplit = new SplitType('.text', {
                types: 'words',
                tagName: 'span'
            })
            gsap.to(textSplit.words, {
                y: -112,
                opacity: 1,
                duration: duration || 0.7,
                rotateZ: 0,
                ease: 'power1.inOut',
                stagger: 0.1
            });
        },
        { scope: textItem }
    );

    return (
        <>
            <div className='overflow-hidden'>
                <div ref={textItem} className={twMerge("text translate-y-28", className)}>{text}</div>
            </div>
        </>
    )
}

export default TextAnimation;