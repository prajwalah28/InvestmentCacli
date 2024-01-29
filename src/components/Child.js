import React, { forwardRef, useImperativeHandle } from 'react'

function Child(props,ref) {
    useImperativeHandle(ref,()=> {
        return {
            hi : () => sayHi(),
        };
    })
    const sayHi =() =>{
        console.log("hii,Eveyone");
    };

  return (
    <div>Child component</div>
  )
}
export default forwardRef(Child);