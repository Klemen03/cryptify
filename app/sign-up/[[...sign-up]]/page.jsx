import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="flex py-5 lg:pt-16 flex-col items-center content-center">
      <SignUp />
    </div>
  );
}
