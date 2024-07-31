import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@sozialens/ui";

interface PublicProps {
  children: React.ReactNode;
}

const Public: React.FC<PublicProps> = ({ children }) => {
  return (
    <main className="h-screen flex flex-col items-center justify-center bg-secondary-700 relative overflow-hidden px-5">
      <Image
        src="/images/authentication/decorator.svg"
        alt="decorator"
        className="w-[20rem] 2xl:w-[30rem] absolute bottom-0 left-0 hidden lg:!block"
        width={128}
        height={40}
      />
      {children}
      <div className="flex w-full items-center absolute bottom-0 left-0 px-5 lg:px-10 py-3 lg:justify-end">
        <div className="flex items-center justify-between w-full lg:w-[70%] flex-col lg:!flex-row">
          <div className="lg:!flex items-center gap-3 hidden">
            <div className="relative w-20">
              <Image
                src="/images/logo.svg"
                alt="logo"
                className="w-full"
                width={100}
                height={50}
              />
            </div>
            <p className="text-sm text-secondary-500 whitespace-nowrap">
              © All rights reserved
            </p>
          </div>
          <div className="flex items-center gap-5">
            <Link href="#" className="flex items-center gap-2">
              <p className="text-sm text-secondary-500 hover:text-primary-100 trannsition-all">Privacy Policy</p>
              <span className="text-sm text-primary-100">
                <Icon name="link" />
              </span>
            </Link>
            <Link href="#" className="flex items-center gap-2">
              <p className="text-sm text-secondary-500 hover:text-primary-100 trannsition-all">Terms and Conditions</p>
              <span className="text-sm text-primary-100">
                <Icon name="link" />
              </span>
            </Link>
          </div>
        </div>
      </div>
      <Image
        src="/images/authentication/decorator.svg"
        alt="decorator"
        className="w-[20rem] 2xl:w-[30rem] absolute top-0 right-[40px] hidden lg:!block lg:right-0 rotate-180"
        width={128}
        height={40}
      />
      <Image
        src="/images/authentication/decorator-movil.svg"
        alt="decorator"
        className="w-full absolute top-0 right-0 lg:right-0 lg:hidden"
        width={128}
        height={40}
      />
    </main>
  );
};

export default Public;
