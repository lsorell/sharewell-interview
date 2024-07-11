"use client";

import { useModal } from "@/utils/useModal";
import { ReactNode, useState } from "react"
import { ModalBody } from "./modals/ModalBody";

interface ButtonProps {
    buttonText: string,
}

export default function ShowModalButton(props: ButtonProps) {
    const { isShown, toggle } = useModal();

    const content = <p>Modal testing.</p>

    return (
        <>
            <button className="m-4 p-2 w-36 rounded bg-white text-black" onClick={toggle}>
                {props.buttonText}
            </button>
            <ModalBody isShown={isShown} hide={toggle} modalContent={content}/>
        </>
    )
}