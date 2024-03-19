import React from 'react';
import Input from "./Input"
import {useRef} from "react"
import Modal from "./Modal"

function NewProject({onAdd,onCancel}){
  const modal = useRef()

 
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();


//저장 불러오기
  function handleSave(){
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;


    //유효성 검사 , trim 공백줄이기 맞다면 모달 띄움, 상세내용이 없더라도 띄우기
    if(enteredTitle.trim()==='' || enteredDescription.trim()===''||enteredDueDate.trim()===''){
        //에러모달
        modal.current.open();
        return;

    }
  
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }




 
return(
  <>
  <Modal ref={modal} buttonCaption="okay">
    <h2>Input</h2>
    <p>Please make sure yoy provide a valid value for every input field.</p>
  </Modal>
  <div className="w-[35rem] mt-16">
    
    <menu className="flex items-center justify-end gap-4 my-4">
    <li><button className="text-stone-800 hover:text-stone-950"onClick={onCancel}>취소</button></li>
    <li><button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:text-stone-950" onClick={handleSave}>저장</button></li>

    </menu>
    <div>
      <Input type="text" ref={title} label="Title"/>
      
          <Input ref={description}label="Description" textarea={true}/>
      <Input type="date" ref={dueDate} label="Due Date"/>
    </div>
   </div>
   </>
)


}
export default NewProject;