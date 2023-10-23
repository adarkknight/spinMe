import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: 'url(/blur.png)' }}>
    <SignUp />
  </div>
  );
}