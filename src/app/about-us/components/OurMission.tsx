'use client';

import Image from 'next/image';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BigTextInline from '@/app/components/ui/BigTextInline';

export default function OurMission() {


  return (
    <main className='bg-secondBg flex flex-col min-h-screen justify-center items-center gap-8'>
      <div className='flex flex-col md:flex-row justify-center'>
      <div className='w-full md:w-1/3 p-4'>
          <BigTextInline text='Our mission' textColor='text-myPurple-600'/>
          <p>At Our Company, our mission is to elevate businesses through effective digital marketing strategies. We are dedicated to delivering impactful solutions that help our clients thrive in the online landscape. With a focus on innovation and client success, we aim to be the trusted partner for businesses seeking growth in the digital age.</p>
        </div>
        <div >
          <Image src="/images/event1.jpg" alt="xx" width={800} height={600} />
        </div>
      
      </div>
     
    </main>
  );
}
