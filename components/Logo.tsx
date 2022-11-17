import React from 'react'

const Logo = () => {
  return (
    <div className="flex items-center gap-2 ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="transparent"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 stroke-violet-700 shadow-lg drop-shadow-lg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
        />
      </svg>

      <h2 className="text-white text-xl">Hyper</h2>
    </div>
  );
}

export default Logo
