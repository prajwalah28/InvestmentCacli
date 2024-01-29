import React,{useRef} from 'react'
import Child from './Child'

export default function Parent() {
    const ref = useRef();
  return (
    <>
        <div>Parent</div>
    <Child ref={ref}/>
    <div>Parent component</div>
    <button onClick={()=> ref.current.hi()}>Click</button>
    </>
  )
}
