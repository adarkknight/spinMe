import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: 'url(/blur.png)' }}>
      <SignIn
        // appearance={{
        //   elements: {
          
        //     card:
        //       "w-auto h-80",
        //   },
        // }}
      />
    </div>
  )

}