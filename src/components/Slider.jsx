import React from "react";
import ImageSection from "./ImageSection";
import Sample from "./Sample";
import { Samples } from "./Samples";

export default function Slider() {
  return (
    <>
      <div className=" m-5   mt-4  flex justify-center min-h-fit">
        <Samples/>
      </div>
    </>
  );
}
