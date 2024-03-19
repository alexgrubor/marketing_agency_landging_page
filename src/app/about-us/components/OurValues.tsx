"use client";

import Image from "next/image";
import BigTextInline from "@/app/components/ui/BigTextInline";

export default function OurValues() {
  return (
    <main className="bg-secondBg flex flex-col min-h-screen justify-center items-center p-4 gap-8">
      <div className="flex flex-col  justify-center">
        <div className="w-full  p-4">
          <BigTextInline text="Our Values" textColor="text-myPurple-600" />
          <ul>
            <li>
              <strong>Innovation:</strong> We embrace creativity and
              continuously seek innovative approaches to stay at the forefront
              of digital marketing. Our commitment to innovation enables us to
              deliver cutting-edge solutions that set our clients apart in the
              competitive online environment.
            </li>
            <li>
              <strong>Client-Centric Excellence:</strong> Client success is our
              priority. We are dedicated to understanding our clients' unique
              needs, fostering open communication, and delivering tailored
              solutions that exceed expectations. Our client-centric approach
              builds lasting partnerships and drives measurable results.
            </li>
            <li>
              <strong>Integrity:</strong> We uphold the highest standards of
              honesty and integrity in all our interactions. Transparent
              communication, ethical business practices, and a commitment to
              accountability form the foundation of our relationships with
              clients, partners, and team members.
            </li>
            <li>
              <strong>Adaptability:</strong> In the dynamic digital landscape,
              adaptability is key. We thrive on staying agile, embracing change,
              and proactively adjusting our strategies to meet evolving market
              trends. Our ability to adapt ensures that our clients are
              well-positioned for sustained success in an ever-changing digital
              environment.
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <Image src="/images/event1.jpg" alt="xx" width={800} height={600} />
        </div>
      </div>
    </main>
  );
}
