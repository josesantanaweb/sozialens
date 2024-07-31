import Image from "next/image";
import Link from "next/link";
import ActionBar from "./ActionBar";

const Header = (): JSX.Element => {
  return (
    <header className="bg-secondary-700 p-5 flex justify-between">
      <Link href="/">
        <Image
          src="/images/logo.svg"
          alt="Sozialens Logo"
          width={151}
          height={45.892}
          className="w-[9.4375rem] h-[2.8683rem]"
        />
      </Link>
      <ActionBar />
    </header>
  );
};

export default Header;
