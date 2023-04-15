import { Excalidraw } from "@excalidraw/excalidraw";

function Excalidrawpage() {
  return (
    <>
      <div className="h-screen ">
        <h1 className="h-[8%] text-center bg-primary"> </h1>
        <div className="h-[92%] ">
          <Excalidraw />
        </div>
      </div>
    </>
  );
}

export default Excalidrawpage;
