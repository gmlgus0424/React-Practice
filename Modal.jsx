import { forwardRef,useImperativeHandle ,useRef} from "react"
import Button from "./Button"
import { createPortal } from "react-dom"


const Modal=  forwardRef (function Modal({children,buttonCaption},ref){

const dialog= useRef();

  useImperativeHandle(ref,()=>{
  return{
    //모달창 열기 
    open(){
      dialog.current.showModal();
    }
  }
});

//dom 객체 접근하기위해서 ref 사용 
  return createPortal(
  <dialog ref={dialog} className= "backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
    {children}
  <form method="dialog" className="mt-4 text-right">
  <Button>{buttonCaption}</Button>
 </form>
  </dialog>,
  document.getElementById('modal-root'))
})


export default Modal;

