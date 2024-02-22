import React from "react"
import IWrapper from "./IWrapper"

const Wrapper = ({children} : IWrapper) => {
  return (
    <div className=" bg-white border-[1px] border-black/10 rounded-18 py-40 px-56">
        {children}
    </div>
  )
}

export default Wrapper