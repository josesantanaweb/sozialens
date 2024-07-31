'use client';
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Input, Button, Checkbox } from "@sozialens/ui";
import PublicLayout from "@/components/Layout/Public";

const Login = (): JSX.Element => {
  const [remember, setRemember] = useState<boolean>(false)

  const handleLogin = (): void => {}
  const onChangeRemenber = (): void => setRemember(!remember)
  const onChangeEmail = (): void => {}
  const onChangePassword = (): void => {}

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
        <h3 className="text-lg font-medium lg:text-xl text-dark">
          Hello Welcome to Sozialens!
        </h3>
        <p className="mb-8 text-sm font-medium text-base-300">
          Please log in to continue..
        </p>
        <Input
          id="email"
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          className="mb-5"
          onChange={onChangeEmail}
        />
        <Input
          id="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          className="mb-5"
          onChange={onChangePassword}
        />
        <div className="flex justify-start mb-10">
          <Checkbox isChecked={remember} onChange={onChangeRemenber} label="Remember password"/>
        </div>
        <Button onClick={handleLogin} className="mb-5">Log In</Button>
        <div className="flex items-center justify-center w-full gap-3">
          <p className="text-xs font-normal text-dark">
            Dont have an account?
          </p>
          <Link href="/register">
            <p className="text-sm font-normal text-dark">Create Account</p>
          </Link>
        </div>
      </div>
    </PublicLayout>
  );
};

export default Login;