import Image from "next/image";
import Link from "next/link";
import { Icon } from "@sozialens/ui";

const Footer = (): JSX.Element => {
  return (
    <footer className="flex items-center justify-between mt-auto pl-[3.375rem] pr-[3.3125rem] py-[1.875rem] text-secondary-500 text-xs">
      <div className="flex items-center justify-start gap-2">
        <Image
          src="/images/logo.svg"
          alt="Sozialens Logo"
          width={65.8}
          height={20}
          className="w-[4.1125rem] h-[1.25rem]"
        />
        <p>&copy; All rights reserved</p>
      </div>

      <div className="flex items-center font-medium gap-5">
        <Link href="#" className="flex items-center gap-[0.3125rem]">
          <p>Privacy Policy</p>
          <Icon name="link" className="text-primary-100 text-[1.25rem]" />
        </Link>

        <Link href="#" className="flex items-center gap-[0.3125rem]">
          <p>Terms and Conditions</p>
          <Icon name="link" className="text-primary-100 text-[1.25rem]" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
