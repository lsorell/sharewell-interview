import { Modal1 } from "@/components/modals/Modal1";
import { ShowModalButton } from "@/components/ShowModalButton";
import { FC } from "react";

export default function Page() {
  const modal1 = <Modal1 />;

  return (
    <div className="bg-green-500 h-[200vh] flex flex-col">
      <h1 className="text-4xl text-white">GREEN</h1>
      <ShowModalButton text="Open Modal 1" modalContent={modal1} />
      <ShowModalButton text="Open Modal 2" modalContent={modal1} />
    </div>
  );
}
