import { useAuth } from '@contexts/AuthContext';
import React, { useState } from 'react'



const SignInPage = () => {
  const [email, setEmail] = useState<string>("");
  const [ delivered, setDelivered ] = useState<boolean>(false);
  const { signIn } = useAuth();


  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    signIn(email);
    setDelivered((existingValue : boolean) => !existingValue)
    
  }
  if (delivered) {
    return (
      <div>
        <div className="w-full flex items-center justify-center h-[600px] p-4">
          <div className="w-full max-w-md p-4 bg-black pb-10 text-white rounded-lg border border-gray">
            <div className="py-2 pb-4 text-center">
              <h2 className="text-lg text-center">We sent you a mail</h2>
              <p>Verify your email address to continue</p>
            </div>
            <div className='flex w-full items-center justify-center'>
              <img src="https://img.icons8.com/bubbles/200/000000/man-with-mail.png" />
            </div>
            <p className='text-center opacity-80 text-sm'>Check your spam folder if you can't find our mail.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex items-center justify-center h-[600px] p-4">
      <div className="w-full max-w-md p-4 bg-black pb-10 text-white rounded-lg border border-gray">
        <div className="py-2 pb-4 text-center">
          <h2 className="text-lg text-center">Welcome 👋</h2>
          <p>Enter your email to continue.</p>
        </div>

        {/* Magic form */}
        <form onSubmit={(e: React.SyntheticEvent) => handleSubmit(e)}>
          <input
            type="email"
            placeholder="email@domain.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
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
