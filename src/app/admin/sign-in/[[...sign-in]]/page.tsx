import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 bg-secondBg"> 
      <SignIn afterSignInUrl='/admin/dashboard' />
    </div>
  );
}
