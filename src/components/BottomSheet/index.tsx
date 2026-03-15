import { useEffect, useState, type ReactNode } from "react";

interface BottomSheetProps {
    children: ReactNode;
}

export const BottomSheet = ({ children }: BottomSheetProps) => {
    const [translateY, setTranslateY] = useState(80); // start closed

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            // how much scroll required to fully open sheet
            const maxScroll = 50;

            // calculate progress
            const progress = Math.min(scrollY / maxScroll, 1);

            // convert progress to translateY
            const newTranslate = 80 - progress * 80;

            setTranslateY(newTranslate);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className="fixed max-h-[90vh] bottom-0 left-0 right-0 bg-white rounded-t-3xl z-50 transition-transform duration-150"
            style={{
                transform: `translateY(${translateY}%)`,
                // maxHeight: "90vh"
            }}
        >
            {/* drag handle */}
            <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mt-3 mb-4" />

            <div className="px-6 pb-10 overflow-y-auto max-h-[75vh]">
                {children}
            </div>
        </div>
    );
};