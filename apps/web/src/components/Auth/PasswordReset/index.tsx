"use client";
import React from "react";
import { useRouter } from 'next/navigation'
import Image from "next/image";
import { Button } from "@sozialens/ui";
import PublicLayout from "@/components/Layout/Public";

const PasswordReset = (): JSX.Element => {
  const router = useRouter()

  const handleContinue = ():void => router.push("/new-password");

  return (
    <PublicLayout>
      <div className="flex flex-col bg-white rounded-3xl p-5 lg:p-10 w-full lg:max-w-[35rem] relative z-10">
        <Image
          src="images/logo.svg"
          alt="logo"
          className="mb-6 w-36"
          width={128}
          height={40}
        />
        <h3 className="text-lg font-medium lg:text-xl text-dark mb-3">
          Password Reset
        </h3>
        <p className="mb-6 text-sm font-medium text-base-300">
          Enter the email you used to create your account so we can send you a link for reseting your password
        </p>
        <div className="flex items-center justify-center w-full gap-3">
          <Button onClick={handleContinue} className="w-[8rem]">
            Continue
          </Button>
        </div>
      </div>
    </PublicLayout>
  );
};

export default PasswordReset;
