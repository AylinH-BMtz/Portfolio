import React from "react";
import WorkCard from "../sub/WorkContent";

const Work = () => {
  return (
    <div
      className="flex flex-col relativ items-center justify-center w-full h-full"
      id="work"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Work Experience
      </h1>

      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <WorkCard
          src="/NextWebsite.png"
          title="FrontEnd Developer in PepsiCo International"
          description="FrontEnd Developer for the latinamerican HR department"
        />
        <WorkCard
          src="/CardImage.png"
          title="Web Developer in TIAN Technology"
          description="Professional practices developing an app with TensorFlow and ReactNative"
        />
      </div>
    </div>
  );
};

export default Work;