"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Input, Button, Checkbox } from "@sozialens/ui";
import PublicLayout from "@/components/Layout/Public";

const NewPassword = (): JSX.Element => {
  const router = useRouter();
  const [remember, setRemember] = useState<boolean>(false)

  const handleResetPassword = (): void => router.push("/login");

  const onChangePassword = (): void => {};

  const onChangeRemenber = (): void => setRemember(!remember)

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
          Set new Password
        </h3>
        <p className="mb-6 text-sm font-medium text-base-300">
          Must be al least password
        </p>
        <Input
          id="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          className="mb-5"
          onChange={onChangePassword}
        />
        <Input
          id="confirm-password"
          label="Confirm password"
          type="password"
          placeholder="Enter your password"
          className="mb-5"
          onChange={onChangePassword}
        />
        <div className="flex justify-start mb-10">
          <Checkbox isChecked={remember} onChange={onChangeRemenber} label="Remember password"/>
        </div>
        <Button onClick={handleResetPassword}>Reset Password</Button>
      </div>
    </PublicLayout>
  );
};

export default NewPassword;
