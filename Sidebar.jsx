import React from 'react';
import Button from './Button';

function Sidebar(){
  //객체로 
  

  return (
    <aside className= "w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className= "mb-8 font-bold uppercase md:text-xl text-stone-200">Projects</h2>
      <div>
        <Button>+ 프로젝트추가 </Button> 
      </div>
      <ul>

      </ul>
    </aside>

  )
}

export default Sidebar;