import React from "react";

type TileProps = {
    children: React.ReactNode;
    className?: string;
}

const Tile = ({ children, className = "" }: TileProps) => {
    return (
        <div className={`
            ${className}
            p-[30px]
            bg-foreground
            border border-border rounded-2xl
            shadow-xl
        `}>
            { children }
        </div>
    );
}

export default Tile;