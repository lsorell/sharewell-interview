"use client";

import { useModal } from "@/utils/useModal";
import { ModalWrapper } from "./modals/ModalWrapper";
import { ReactElement } from "react";

interface ShowModalButtonProps {
    text: string,
    modalContent: ReactElement
}

export default function ShowModalButton(props: ShowModalButtonProps) {
    const { isShown, toggle } = useModal();

    return (
        <>
            <button className="m-4 p-2 w-36 rounded bg-white text-black" onClick={toggle}>
                {props.text}
            </button>
            <ModalWrapper isShown={isShown} hide={toggle} modalContent={props.modalContent}/>
        </>
    )
}