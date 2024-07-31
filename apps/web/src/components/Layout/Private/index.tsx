// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import "../styles/icons.css";
import NavigationBar from "./NavigationBar";
import Header from "./Header";
import Footer from "./Footer";

interface PrivateProps {
  children: React.ReactNode;
}

const Private: React.FC<PrivateProps> = ({ children }) => {
  return (
    <>
      <div className="fixed left-0 top-0 right-0">
        <Header />
      </div>
      <main className="flex w-full pt-[86px]">
        <NavigationBar />
        <div className="relative w-full flex flex-col md:h-[calc(100vh-86px)] md:overflow-y-scroll">
          <div className="pl-20 pt-[40px] pr-[41px]">{children}</div>
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Private;
