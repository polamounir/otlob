import { useState, useEffect, MouseEvent } from "react";

const breakpoints: Record<string, number> = {
    xs: 0,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
    "3xl": 1920,
    "4xl": 2560,
};

const getScreenSize = (width: number): string => {
    if (width >= breakpoints["4xl"]) return "4xl";
    if (width >= breakpoints["3xl"]) return "3xl";
    if (width >= breakpoints["2xl"]) return "2xl";
    if (width >= breakpoints.xl) return "xl";
    if (width >= breakpoints.lg) return "lg";
    if (width >= breakpoints.md) return "md";
    if (width >= breakpoints.sm) return "sm";
    return "xs";
};

const ScreenSizeIndicator: React.FC = () => {
    const [screenSize, setScreenSize] = useState<string>(getScreenSize(window.innerWidth));
    const [position, setPosition] = useState<{ x: number; y: number }>({ x: window.innerWidth / 2 - 50, y: window.innerHeight - 50 });
    const [dragging, setDragging] = useState<boolean>(false);
    const [offset, setOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

    useEffect(() => {
        const handleResize = () => {
            setScreenSize(getScreenSize(window.innerWidth));
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
        setDragging(true);
        setOffset({ x: e.clientX - position.x, y: e.clientY - position.y });
    };

    const handleMouseMove = (e: MouseEvent<Document>) => {
        if (!dragging) return;
        setPosition({ x: e.clientX - offset.x, y: e.clientY - offset.y });
    };

    const handleMouseUp = () => {
        setDragging(false);
    };

    useEffect(() => {
        document.addEventListener("mousemove", handleMouseMove as any);
        document.addEventListener("mouseup", handleMouseUp);
        return () => {
            document.removeEventListener("mousemove", handleMouseMove as any);
            document.removeEventListener("mouseup", handleMouseUp);
        };
    }, [dragging]);

    return (
        <div
            className="fixed bg-orange-900 text-white px-4 py-2 rounded-md shadow-lg text-lg cursor-move z-50"
            style={{ left: `${position.x}px`, top: `${position.y}px`, transform: "translate(-50%, -50%)" }}
            onMouseDown={(e) => handleMouseDown(e as unknown as MouseEvent<HTMLDivElement>)}
        >
            <span className="px-5">

                {screenSize}
            </span>
        </div>
    );
};

export default ScreenSizeIndicator;
