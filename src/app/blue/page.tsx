import { Modal2 } from "@/components/modals/Modal2";
import { Modal3 } from "@/components/modals/Modal3";
import { ShowModalButton } from "@/components/ShowModalButton";

export default function Page() {
  const modal2 = <Modal2 />;
  const modal3 = <Modal3 />;

  return (
    <div className="bg-blue-500 h-[200vh] flex flex-col">
      <h1 className="text-4xl text-white">BLUE</h1>
      <ShowModalButton text="Open Modal 2" modalContent={modal2} />
      <ShowModalButton text="Open Modal 3" modalContent={modal3} />
    </div>
  );
}
