import React from 'react';


function Sidebar(){
  //객체로 
  

  return (
    <aside className= "w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className= "mb-8 font-bold uppercase md:text-xl text-stone-200">Projects</h2>
      <div>
        <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:stone-600 hover:text-stone-100"> + 프로젝트 추가 </button>
      </div>
      <ul>

      </ul>
    </aside>

  )
}

export default Sidebar;