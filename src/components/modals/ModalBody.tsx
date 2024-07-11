import { ReactElement, FC } from "react";
import { createPortal } from "react-dom";

interface ModalBodyProps {
    isShown: boolean;
    hide: () => void;
    modalContent: ReactElement
}

export const ModalBody: FC<ModalBodyProps> = (props: ModalBodyProps) => {
    const modal = (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg max-w-md w-full overflow-hidden">
          <div className="p-4 bg-gray-50 text-center">
            <button className="bg-gray-200 px-4 py-2 rounded-md text-gray-500" onClick={props.hide}>
              Close
            </button>
          </div>
        </div>
      </div>
    )

    return props.isShown ? createPortal(modal, document.body) : null;
};