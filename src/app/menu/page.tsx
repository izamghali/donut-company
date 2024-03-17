import Drawer from "@/components/Drawer"
import React from "react"

interface Props {
    className: string
}

export default function Page({ className } : Props) {
    return (
        <div>
            <Drawer className="drawer-open" />
        </div>
    )
};

