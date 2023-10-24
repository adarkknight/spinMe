import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: 'url(/blur.png)' }}>
      <SignIn
        // appearance={{
        //   elements: {
        //     // formButtonPrimary:
        //     //   "bg-neutral hover:bg-slate-400 font-inter text-sm normal-case",
        //     card:
        //       "w-auto h-80",
        //   },
        // }}
      />
    </div>
  )

}