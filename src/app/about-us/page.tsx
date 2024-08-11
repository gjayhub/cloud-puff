import { WavyBackground } from "@/components/ui/wavy-background";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className='relative  flex overflow-hidden  md:max-w-[1300px] '>
      <div className=''>
        {/* <video
          className='object-fill'
          autoPlay
          loop
          src='https://video.wixstatic.com/video/d47472_58cce06729c54ccb935886c4b3647274/1080p/mp4/file.mp4'
          muted
        ></video> */}

        <div className='absolute h-[80vh] inset-0 flex items-center justify-center bg-opacity-50'>
          <div className='text-left text-[#eee] p-8 flex gap-3'>
            <div className='flex-1'>
              <h1 className='text-5xl mb-4'>About Us</h1>
              <p className='text-sm md:text-base'>
                Our journey began with a simple goal: to create a brand that
                combines quality, style, and customer satisfaction. At
                CloudPuff, we believe in delivering exceptional products that
                enhance your vaping experience, all while keeping things fun and
                approachable.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex-1'>
        <div>
          <h1>Location</h1>
          <p></p>
        </div>
      </div>
    </div>
  );
}
