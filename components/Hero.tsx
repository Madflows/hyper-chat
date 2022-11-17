import React from "react";
import { DiApple } from "react-icons/di";
import toast from 'react-hot-toast';
import { useRouter } from "next/router";
import { TiArrowRightThick } from 'react-icons/ti';

const Hero = () => {
  const router = useRouter();

  return (
    <header className="pt-[10vh] px-4">
      <h1 className="text-5xl relative md:text-6xl lg:text-9xl text-center font-black ">
        <span className="axiforma-extra-bold text-transparent bg-clip-text bg-gradient-to-r from-pink to-lightPurple">
          Team chat
        </span>
        <br />

        <span className="axiforma-extra-bold text-transparent bg-clip-text bg-gradient-to-r from-deepPurple to-lightLime">
          Reimagined
        </span>
        <span className="absolute top-[30%] invisible md:visible right-[4rem]">
          <svg
            width="241"
            height="107"
            viewBox="0 0 241 107"
            strokeWidth={3.5}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-7 text-white -rotate-45"
          >
            <path
              d="M141.004 69.2611C138.005 67.5948 135.394 66.3173 132.95 64.8176C126.063 60.5406 118.953 56.4859 112.454 51.6535C108.066 48.3764 104.012 44.3771 100.735 39.9891C92.1806 28.6024 94.458 15.4939 106.011 7.05107C118.842 -2.33599 140.282 -2.11378 152.947 7.49545C158.89 12.0501 162.334 18.1044 162.5 25.4919C162.667 32.4905 162.056 39.4892 161.389 46.4878C161.001 50.8758 159.89 55.2083 159.056 59.9296C166.944 64.0954 175.442 64.9842 183.774 65.7063C197.382 66.8728 211.046 67.2615 224.71 67.9836C227.654 68.1502 230.654 67.9836 233.597 68.3169C237.874 68.8168 240.263 71.0386 240.485 74.2602C240.707 77.7595 237.986 80.3146 233.098 80.8701C230.876 81.0922 228.654 81.0366 226.432 81.0922C203.437 81.3699 180.608 80.259 158.168 74.5379C157.112 74.2602 156.001 74.3712 154.169 74.2602C153.058 75.7043 151.558 77.2596 150.391 79.0371C144.893 87.3688 137.283 93.0899 128.007 96.4226C106.122 104.254 83.5712 107.92 60.409 105.31C45.523 103.643 31.748 98.0889 19.6393 89.0351C4.69774 77.8151 -1.74545 62.9846 1.30951 44.4327C2.14268 39.3226 3.25358 34.268 4.6422 29.3245C5.47537 26.2696 7.97488 24.9365 10.4744 25.3254C12.8628 25.7142 14.9179 27.9915 15.029 30.8798C15.0846 33.0461 14.8068 35.2678 14.4736 37.4896C13.5293 44.0994 13.5849 50.6537 14.1959 57.319C14.6958 63.2623 16.751 68.1503 20.6391 72.205C23.9162 75.6488 27.5821 78.926 31.6368 81.4255C42.8013 88.313 55.0212 92.4233 68.2409 92.9232C85.793 93.5898 102.901 91.0902 119.62 85.9245C126.785 83.7028 133.395 80.4812 138.172 74.4268C139.227 72.9271 139.894 71.2052 141.004 69.2611ZM146.559 56.4304C147.725 51.7091 148.725 48.543 149.225 45.3214C150.003 40.6001 150.836 35.8232 150.891 31.0464C151.058 20.9928 147.281 15.9382 137.783 13.161C130.895 11.1614 123.952 11.2169 117.231 14.2719C108.011 18.4933 104.178 26.3807 113.121 35.1567C122.397 44.3216 133.339 50.8759 146.559 56.4304Z"
              fill="currentColor"
            />
          </svg>
        </span>
      </h1>
      <p className="text-center w-full max-w-2xl mx-auto text-lg mt-[2rem] font-bold ">
        Cloud-based collaboration and communities chat that's free, secure and
        works on both your desktop and phone.
      </p>

      <CTAButton onClick={() => {
        toast.success('Redirecting to sign in')
        router.push('/signin');
      }} />
    </header>
  );
};


export interface ButtonProps {
  onClick: () => void;
}

const CTAButton = ({ onClick } : ButtonProps) => {
  return (
    <button className="cta-btn group gap-2" onClick={onClick}>
      <span className="text-lg text-[#ffffff] leading-none font-bold flex items-center">
        Get Hyper
      </span>
      <span className="group-hover:translate-x-2 transition-transform">
        {/* <DiApple className="text-4xl leading-none" /> */}
        <TiArrowRightThick className="text-2xl text-[#ffffff] " />
      </span>
      <div></div>
    </button>
  );
};

export default Hero;
