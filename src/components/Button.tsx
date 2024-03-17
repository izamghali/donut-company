import React from "react"

interface Props {
    content: string,
    className: string,
}

export default function Button({ content, className }: Props) {
    return (
        <button className={` btn ${className} `}>{content}</button>
    )
};

