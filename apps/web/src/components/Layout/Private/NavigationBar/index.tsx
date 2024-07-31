"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { Icon } from "@sozialens/ui";
import type { IconsTypeRegular } from "../../../../../../../packages/sozialens-ui/src/components/Icon/types";

interface LinksProps {
  label: string;
  icon: IconsTypeRegular;
  path: string;
  submenu?: {
    label: string;
    path: string;
  }[];
}

const menu: LinksProps[] = [
  {
    label: "Dashboard",
    icon: "users",
    path: "/dashboard",
  },
  {
    label: "Sozial Sphere",
    icon: "users",
    path: "",
    submenu: [
      {
        label: "Home",
        path: "/home",
      },
      {
        label: "Ratings and Reviews",
        path: "/ratings-and-reviews",
      },
      {
        label: "My lists",
        path: "/my-lists",
      },
      {
        label: "My search",
        path: "/my-search",
      },
    ],
  },
  {
    label: "Campains",
    icon: "campaigns",
    path: "",
    submenu: [
      {
        label: "Campaigns Single",
        path: "/campaigns-single",
      },
      {
        label: "Campaigns Groups",
        path: "/campaigns-groups",
      },
      {
        label: "Create Campaigns",
        path: "/create-campaigns",
      },
    ],
  },
  {
    label: "Inbox",
    icon: "inbox",
    path: "/inbox",
  },
  {
    label: "Referrals",
    icon: "user",
    path: "/referrals",
  },
  {
    label: "Ratings",
    icon: "badge",
    path: "/ratings",
  },
  {
    label: "Analytics",
    icon: "chart",
    path: "/analytics",
  },
  {
    label: "Link Shorter",
    icon: "cut",
    path: "/link-shorter",
  },
  {
    label: "Link Shorter",
    icon: "cut",
    path: "/link-shorter",
  },
  {
    label: "Support",
    icon: "settings",
    path: "/settings",
  },
];

const ButtonDropdown = ({ link }: { link: LinksProps }) => {
  const [isOpen, setisOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className={`mb-2.5 last:mb-0 ${link.submenu ? "menu-dropdown" : ""}`}>
      <a
        className={`${
          pathname === link.path
            ? "bg-secondary-400 text-primary-100 font-medium"
            : "text-shark-300 hover:bg-secondary-400 hover:text-primary-100 hover:font-medium"
        } flex rounded-[10px] items-center gap-3 p-2.5 cursor-pointer`}
        href={link.path ? link.path : "#"}
        onClick={() => setisOpen(!isOpen)}
      >
        <Icon name={link.icon} className="text-[1.25rem]" />
        <span className="text-sm leading-[normal]">{link.label}</span>
        {Boolean(link.submenu) && (
          <Icon
            name="chevron"
            className={`text-xs ${isOpen ? "rotate-180" : ""}`}
          />
        )}
      </a>

      {Boolean(link.submenu) && isOpen ? (
        <div className="bg-secondary-800 p-2.5">
          {link.submenu?.map((subItem, i) => (
            <a
              key={i}
              className=" flex rounded-[10px] items-center py-2 mb-2 last:mb-0 cursor-pointer text-secondary-200"
              href={subItem.path || "#"}
            >
              <span className="text-xs leading-[normal]">{subItem.label}</span>
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
};

const NavigationBar = () => {
  return (
    <div className="px-5 pb-[24px] pt-[34px] bg-white w-[303px] h-[calc(100vh-86px)] flex flex-col flex-shrink-0">
      <div className="block text-sm font-medium text-primary-100 p-2.5 leading-[18px] mb-2.5">
        Main Menu
      </div>
      <div className="overflow-y-auto flex-1">
        {menu.map((item, i) => (
          <ButtonDropdown key={i} link={item} />
        ))}
      </div>
      <div className="flex items-center justify-between pt-4 pb-[3.5px]">
        <div className="flex gap-[9.5px]">
          <Image
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAANSURBVBhXY+hgEP0PAANOAZ0iIL2tAAAAAElFTkSuQmCC"
            width={35}
            height={35}
            alt="DanySing"
            className="w-[35px] h-[35px] rounded-full"
          />
          <div className="flex flex-col">
            <p className="text-sm font-medium">DanySing</p>
            <p className="text-xs underline cursor-pointer text-primary-100">
              Change Password
            </p>
          </div>
        </div>
        <span className="text-2xl cursor-pointer icon-logout text-primary-100" />
      </div>
    </div>
  );
};

export default NavigationBar;
