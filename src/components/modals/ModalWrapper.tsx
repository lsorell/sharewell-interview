import { ReactElement, FC, useRef } from "react";
import { createPortal } from "react-dom";

interface ModalWrapperProps {
  isShown: boolean;
  hide: () => void;
  modalContent: ReactElement;
}

export const ModalWrapper: FC<ModalWrapperProps> = (
  props: ModalWrapperProps
) => {
  const modal = (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      onClick={props.hide}
    >
      <div
        onClick={(e) => e.stopPropagation()}
      >
        {props.modalContent}
      </div>
    </div>
  );

  return props.isShown ? createPortal(modal, document.body) : null;
};
