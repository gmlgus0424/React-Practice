import React from "react";
import NoImage from "../assets/no-projects.png";
import Button from "./Button";


function NoProject({onStartAddProject}){

  return(
    <div className="mt-24 text-center w-2/3">
      <img src={NoImage} 
      alt="An empty task list"
        className="w-16 h-16 object-contain mx-auto"/>


      <h2 className="text-xl font-bold text-stone-500 my-4">No project Selected</h2>
   
      <p className="text-stone-400 mb-4">선택하세요 </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>new project</Button>

      </p>

  </div>
  )
}

export default NoProject