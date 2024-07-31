"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@sozialens/ui";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";

const Notification = () => {
    const [showNotification, setShowNotification] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useOnClickOutside(ref, () => setShowNotification(false));

    return (
        <div ref={ref} className="relative">
            <button
                type="button"
                title="Notifications"
                className="w-[42px] h-[42px] p-1.5 bg-white rounded-lg justify-center items-center flex hover:bg-secondary-700 transition-colors"
                onClick={() => {
                    setShowNotification(!showNotification);
                }}
            >
                <div className="w-6 h-6 relative flex items-center justify-center">
                    <Icon name="bell" className="text-xl text-primary-100" />
                    <div className="w-2 h-2 left-[14px] top-[3px] absolute bg-[#eb5757] rounded-full"></div>
                </div>
            </button>

            <AnimatePresence>
                {showNotification && (
                    <motion.div
                        transition={{ duration: 0.3, ease: "linear" }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute w-[369px] h-[272px] top-full bg-white shadow-3xl p-5 right-[0px] mt-[10px] my-5 z-40 rounded-[20px] shadow-1"
                    >
                        <div className="flex flex-col w-full">
                            <div className="flex flex-col">
                                <div className="max-h-[232px] overflow-y-scroll">
                                    {Array.from({ length: 10 }).map((_, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center justify-between w-full gap-2 px-2 py-2 my-2 border-b border-base-500"
                                        >
                                            <div className="flex flex-col justify-evenly gap-3 w-[85%]">
                                                <div className="flex items-center justify-between">
                                                    <div className="text-sm font-normal text-dark">
                                                        User to offer your proposal
                                                    </div>
                                                    <div className="text-xs font-medium text-base-500">2 days</div>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-3">
                                                        <div className="text-xs font-medium text-base-500">
                                                            On February 25. You spent $24.19 and reached 20,262 people.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="border border-shark-300 rounded-full w-9 h-9 cursor-pointer hover:bg-base-500 hover:bg-opacity-30 rotate-[-120deg] flex items-center justify-center">
                                                <i className="text-xs icon-chevron text-base-500"></i>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Notification;
