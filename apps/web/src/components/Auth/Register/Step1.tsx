'use client';
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Input, Button, Checkbox } from "@sozialens/ui";
import { UserType } from "@/types/authentication";

interface Step1Props {
  handleNextStep: () => void;
}

const Step1:React.FC<Step1Props> = ({ handleNextStep }) => {
  const [userType, setUserType] = useState<UserType>(UserType.CUSTOMER);

  const onChangeUserType = (type: UserType): void => setUserType(type);
  const onChangeEmail = (): void => {}
  const onChangePassword = (): void => {}

  return (
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
        Create a account to continue
      </p>
      <Input
        id="fullname"
        label="Full Name"
        type="email"
        placeholder="Enter your name"
        className="mb-5"
        onChange={onChangeEmail}
      />
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
      <div className="flex flex-col gap-3">
        <p className="text-sm font-medium text-dark">
          Register as:
        </p>
        <div className="flex flex-col justify-start gap-5 mb-10 lg:!flex-row">
          <Checkbox
            isChecked={userType === UserType.CUSTOMER}
            onChange={() => onChangeUserType(UserType.CUSTOMER)}
            label="I Want to be Customer"
          />
          <Checkbox
            isChecked={userType === UserType.SELLER}
            onChange={() => onChangeUserType(UserType.SELLER)}
            label="I Want to be Seller"
          />
        </div>
      </div>
      <Button onClick={handleNextStep} className="mb-5">Continue Sign Up</Button>
      <div className="flex items-center justify-center w-full gap-3">
        <p className="text-xs font-normal text-dark">
          Already have an account?
        </p>
        <Link href="/login">
          <p className="text-sm font-normal text-dark">Login</p>
        </Link>
      </div>
    </div>
  );
};

export default Step1;
