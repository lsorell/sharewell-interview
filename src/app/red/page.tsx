import { Modal1 } from "@/components/modals/Modal1";
import { Modal3 } from "@/components/modals/Modal3";
import { ShowModalButton } from "@/components/ShowModalButton";

export default function Page() {
  const modal1 = <Modal1 />;
  const modal3 = <Modal3 />;

  return (
    <div className="bg-red-500 h-[200vh] flex flex-col">
      <h1 className="text-4xl text-white">RED</h1>
      <ShowModalButton text="Open Modal 1" modalContent={modal1} />
      <ShowModalButton text="Open Modal 3" modalContent={modal3} />
    </div>
  );
}
