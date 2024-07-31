"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Icon } from "@sozialens/ui";
import { SOCIAL_PROVIDERS } from "./data";

const Step2 = (): JSX.Element => {
  const handleRegister = (): void => {};

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
      <div className="flex flex-col w-full gap-2 mb-6">
        {SOCIAL_PROVIDERS.map((provider) => (
          <div key={provider.name} className="flex items-center justify-between w-full p-4 border rounded-lg cursor-pointer border-base-600">
            <div className="flex items-center w-full gap-4">
              <Image
                src={`/images/authentication/${provider.name}.svg`}
                alt="logo"
                className="w-10 h-10"
                width={40}
                height={40}
              />
              <div>
                <h4 className="text-sm font-medium capitalize text-dark">{provider.name}</h4>
                <p className="text-sm text-base-400">{provider.text}</p>
              </div>
            </div>
            <span className="text-2xl transition cursor-pointer text-base-400 hover:text-primary-100">
              <Icon name="link" />
            </span>
          </div>
        ))}
      </div>
      <Button onClick={handleRegister} className="mb-5">
        Sign Up
      </Button>
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

export default Step2;
