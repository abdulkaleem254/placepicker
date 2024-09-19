import { forwardRef, useImperativeHandle, useRef } from "react"

export const Modal=forwardRef(function Modal({children},ref){
    const dialog=useRef();
    useImperativeHandle(ref,()=>{
        return{
            open:()=>{
                dialog.current.showModal()
            },
            close:()=>{
                dialog.current.close()
            }
        }
    })
    return(
        <dialog ref={dialog}>
            {children}
        </dialog>
    ) 

})
