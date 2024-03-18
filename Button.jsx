import React from "react"

// 컴포넌트 분리

//children인 이유: 컴포넌트 캐그 사이에 작성된 내용 예를 들어, <Button>Click me</Button>와 같이 사용하면 children에는 "Click me"라는 내용이 전달됨 
// ...props 는 나머지 속성들 받아옴 
function Button({children, ...props}){

  return(
   
        <button className ="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-300" {...props}> {children}</button>
      
  
  )
}


export default Button;