import { Excalidraw } from "@excalidraw/excalidraw";

function Excalidrawpage() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Excalidraw Example</h1>
      <div className="h-screen">
        <div className="h-[100%]">
          <Excalidraw />
        </div>
      </div>
    </>
  );
}

export default Excalidrawpage;
