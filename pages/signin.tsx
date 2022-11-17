import React from 'react'

const SignInPage = () => {
  return (
    <div className="w-full flex items-center justify-center h-[600px] p-4">
      <div className="w-full max-w-md p-4 bg-black pb-10 text-white rounded-lg border border-gray">
        <h2 className="text-lg py-2 pb-4 text-center">
          Welcome 👋 <br /> Enter your email to continue.
        </h2>

        {/* Magic form */}
        <form>
          <input
            type="text"
            placeholder="email@domain.com"
            required
            className="w-full outline-none p-2 rounded-md bg-gray/20 text- placeholder:text-gray border border-gray py-3"
          />
          <button className="p-3 w-full bg-gray hover:bg-stone-600 transition-all duration-500 focus-visible:ring-2  ring-white outline-none rounded-md mt-4 border-slate-500">
            Get magic link
          </button>
        </form>

        {/* Divider */}
        <div className="w-full py-[2rem]">
          <div className="w-full relative border-b border-slate-500">
            <span className="absolute w-fit text-sm text-slate-500 bg-black top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] px-3">
              Or continue with
            </span>
          </div>
        </div>

        {/* Social Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <SocialButton
            iconSrc={"/assets/google.svg"}
            title="Google"
            onClick={() => {}}
          />
          <SocialButton
            iconSrc={"/assets/github.svg"}
            title="Github"
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
}


export interface SocialButtonProps {
    onClick: () => void;
    iconSrc: string;
    title: string;
}

const SocialButton = ({onClick, iconSrc, title} : SocialButtonProps) => {
    return (
        <button className='p-3 border-gray rounded-md flex gap-2 items-center bg-gray hover:bg-slate-700 transition-all duration-500 justify-center' onClick={onClick}>
            <img src={iconSrc} alt={title} className="w-5 h-5" />
            <span className="text-white">{title}</span>

        </button>
    )
}

export default SignInPage
