import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 bg-secondBg">
      <SignUp afterSignUpUrl={"/admin/dashboard"} />
    </div>
  );
}
