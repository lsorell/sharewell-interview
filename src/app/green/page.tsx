import ShowModalButton from "@/components/ShowModalButton";

export default function Page() {
  return (
    <div className="bg-green-500 h-[200vh] flex flex-col">
      <h1 className="text-4xl text-white">GREEN</h1>
      <ShowModalButton buttonText="Open Modal 1" />
      <ShowModalButton buttonText="Open Modal 2" />
    </div>
  );
};