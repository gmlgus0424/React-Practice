import React from 'react';


const classes=
'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-100'

// 인풋 중복 가져오기 


function Input({label,textarea,...props}){


//문자 영역이나 입력값에 펼칠 수 있도록 ...props 설정

return(
  <p className="flex flex-col gap-1 my-4">
    <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
    
    {textarea ? (<textarea className={classes} {...props}/>):
    (<input className={classes} {...props}/>)}
  </p>
)


}
export default Input;