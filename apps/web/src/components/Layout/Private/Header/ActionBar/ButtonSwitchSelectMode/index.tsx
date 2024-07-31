"use client";

import { Icon } from "@sozialens/ui";
import Image from "next/image";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";

const ButtonSwitchSelectMode = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useOnClickOutside(ref, () => setShowDropdown(false));

    return (
        <div ref={ref} className="h-[42px] flex-col justify-start items-start gap-[5px] inline-flex relative">
            <button
                type="button"
                className="h-[42px] px-[5px] bg-white rounded-[10px] justify-start items-center inline-flex"
                onClick={() => {
                    setShowDropdown(!showDropdown);
                }}
            >
                <Image
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAANSURBVBhXY+hgEP0PAANOAZ0iIL2tAAAAAElFTkSuQmCC"
                    width={35}
                    height={35}
                    alt="DanySing"
                    className="w-[35px] h-[35px] rounded-full mr-2"
                />

                <span className="inline-flex flex-col text-left mr-4">
                    <span className="text-base-100 text-sm font-medium">DanySing</span>
                    <span className="text-primary-200 text-xs font-normal">Admin</span>
                </span>

                <span className="w-6 h-6 inline-flex items-center justify-center flex-shrink-0 text-primary-200">
                    <Icon name="chevron" className={`text-xs ${showDropdown ? 'rotate-180' : ''}`} />
                </span>
            </button>

            <AnimatePresence>
                {showDropdown && (
                    <motion.div
                        transition={{ duration: 0.3, ease: "linear" }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute w-[153px] h-[36px] top-full right-[0px] mt-[10px]"
                    >
                        Switch to Selling
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ButtonSwitchSelectMode;
