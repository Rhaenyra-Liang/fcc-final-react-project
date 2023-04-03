import React from "react";
import { TbHandFinger } from "react-icons/tb";

function HomePage() {
  return (
    <section className="h-screen bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 grid justify-center items-center ">
      <div className=" absolute right-3 top-20 ">
        <p>
          <TbHandFinger className=" animate-bounce text-[30px]" />
        </p>
      </div>
      <div className="  h-[80%] flex justify-center">
        <h1 className=" border  text-[70px] flex px-5 items-center rounded-2xl text-white ">
          Welcome to my FreeCodeCamp final project!{" "}
        </h1>
      </div>
    </section>
  );
}

export default HomePage;
