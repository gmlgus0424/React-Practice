import React from 'react';
import Input from "./Input"


function NewProject(){



return(
  <div className="w-[35rem] mt-16">
    <menu className="flex items-center justify-end gap-4 my-4">
    <li><button className="text-stone-800 hover:text-stone-950">취소</button></li>
    <li><button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:text-stone-950">저장</button></li>

    </menu>
    <div>
      <Input label="Title"/>
      {/* 문자영역 렌더링*/}
      
          <Input label="Description" textarea={true}/>
      <Input label="Due Date"/>
    </div>
   </div>
)


}
export default NewProject;