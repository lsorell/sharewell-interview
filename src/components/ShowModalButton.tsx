"use client";

import { useModal } from "@/utils/useModal";
import { ModalWrapper } from "./modals/ModalWrapper";
import { FC, ReactElement } from "react";

interface ShowModalButtonProps {
  text: string;
  modalContent: ReactElement;
}

export const ShowModalButton: FC<ShowModalButtonProps> = (
  props: ShowModalButtonProps
) => {
  const { isShown, toggle } = useModal();

  return (
    <>
      <button
        className="m-4 p-2 w-36 rounded bg-white text-black"
        onClick={toggle}
      >
        {props.text}
      </button>
      <ModalWrapper
        isShown={isShown}
        hide={toggle}
        modalContent={props.modalContent}
      />
    </>
  );
};
