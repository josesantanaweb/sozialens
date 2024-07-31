"use client";

import { useState } from "react";
import Image from "next/image";
import { Icon } from "@sozialens/ui";

enum TabProps {
  ALL,
  READ,
  NOTREAD,
  ARCHIVED,
}

const tabs = [
  {
    key: TabProps.ALL,
    title: "All",
    count: 0,
  },
  {
    key: TabProps.READ,
    title: "Read",
    count: 0,
  },
  {
    key: TabProps.NOTREAD,
    title: "Not Read",
    count: 0,
  },
  {
    key: TabProps.ARCHIVED,
    title: "Archived",
    count: 0,
  },
];

const Inbox = (): JSX.Element => {
  const [currentTab, setCurrentTab] = useState<TabProps>(TabProps.ALL);
  const [messages, setMessages] = useState([
    {
      image_url:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAANSURBVBhXY+hgEP0PAANOAZ0iIL2tAAAAAElFTkSuQmCC",
      name: "Jessica Rhem",
      created_at: "2021-07-07",
      message: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      image_url:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAANSURBVBhXY+hgEP0PAANOAZ0iIL2tAAAAAElFTkSuQmCC",
      name: "Sam Smith",
      created_at: "2021-07-07",
      message: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      image_url:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAANSURBVBhXY+hgEP0PAANOAZ0iIL2tAAAAAElFTkSuQmCC",
      name: "George Acosta",
      created_at: "2021-07-07",
      message: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      image_url:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAANSURBVBhXY+hgEP0PAANOAZ0iIL2tAAAAAElFTkSuQmCC",
      name: "John Smith",
      created_at: "2021-07-07",
      message: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      image_url:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAANSURBVBhXY+hgEP0PAANOAZ0iIL2tAAAAAElFTkSuQmCC",
      name: "Jessica Rhem",
      created_at: "2021-07-07",
      message: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      image_url:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAANSURBVBhXY+hgEP0PAANOAZ0iIL2tAAAAAElFTkSuQmCC",
      name: "Sam Smith",
      created_at: "2021-07-07",
      message: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      image_url:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAANSURBVBhXY+hgEP0PAANOAZ0iIL2tAAAAAElFTkSuQmCC",
      name: "George Acosta",
      created_at: "2021-07-07",
      message: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      image_url:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAANSURBVBhXY+hgEP0PAANOAZ0iIL2tAAAAAElFTkSuQmCC",
      name: "John Smith",
      created_at: "2021-07-07",
      message: "Lorem ipsum dolor sit amet consectetur.",
    },
  ]);

  return (
    <div className="card p-5 h-[760px]">
      <div className="flex items-center gap-[7px] p-[5px] font-medium mb-2">
        <div className="bg-base-700 text-primary-200 rounded-xl w-10 h-10 flex items-center justify-center text-xl">
          <Icon name="chat" />
        </div>
        <div>Inbox</div>
      </div>

      <div className="py-5">
        <div className="flex w-full justify">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setCurrentTab(tab.key)}
              className={`flex-1 text-center text-xs pt-2.5 pb-2 rounded-t-[5px] border-b-2 ${currentTab === tab.key ? "bg-primary-100 text-white border-primary-100" : "border-secondary-400"}`}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div>
          {messages.map((message, index) => (
            <div
              key={index}
              className="flex items-center w-full gap-2 px-2 py-2 my-2 cursor-pointer hover:bg-base-600 rounded-xl"
            >
              <div className="relative flex items-center w-[15%] pb-px pr-[3px]">
                <Image
                  width={50}
                  height={50}
                  src={message.image_url}
                  alt={message.name}
                  className="w-[50px] h-[50px] rounded-full"
                />
                <div className="bg-white rounded-full w-5 h-5 flex items-center justify-center absolute bottom-0 right-0">
                  <Image
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAANSURBVBhXY+hgEP0PAANOAZ0iIL2tAAAAAElFTkSuQmCC"
                    alt="Instagram"
                    width={13.33}
                    height={13.33}
                    className="w-[13.33px] h-[13.33px] rounded-[5px]"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-evenly gap-3 w-[85%]">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-dark">
                    {message.name}
                  </div>
                  <div className="text-xs font-medium text-base-500">
                    {message.created_at}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xl icon-chat text-secondary-500"></span>
                    <div className="text-xs font-medium text-base-500">
                      {message.message}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xl icon-misc text-secondary-500"></span>
                    <span className="icon-check text-secondary-500"></span>
                    <span className="icon-outgoing-message text-secondary-500 text-xl"></span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inbox;
