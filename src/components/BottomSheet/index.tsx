import { useEffect, useState, type ReactNode } from "react";

interface BottomSheetProps {
    children: ReactNode;
}

export const BottomSheet = ({ children }: BottomSheetProps) => {
    const [translateY, setTranslateY] = useState(80);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = document.documentElement.scrollTop;

            const maxScroll = 120;

            const progress = Math.min(scrollY / maxScroll, 1);

            const newTranslate = 80 - progress * 80;

            setTranslateY(newTranslate);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl z-50 transition-transform duration-200"
            style={{
                transform: `translateY(${translateY}%)`,
                maxHeight: "90vh",
            }}
        >
            {/* drag handle */}
            <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mt-3 mb-4" />

            <div className="px-6 pb-10 overflow-y-auto max-h-[75vh] overscroll-contain">
                {children}
            </div>
        </div>
    );
};