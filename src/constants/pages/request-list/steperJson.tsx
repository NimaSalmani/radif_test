import React, { useState } from 'react'

interface IState {
    count : number
    text : string
    id : number
    active : boolean
    activeClass : string
    deActiveClasses : string
}

const SteperJson = () => {
    const [state,setState] = useState([
        {
            active : false,
            activeClass : "bg-emerald-400 text-white",
            deActiveClasses : "bg-emerald-100 text-emerald-400",
            id : 1,
            count : 200,
            text : "dsbcksd"
        },
        {
            active : false,
            activeClass : "bg-red-500 text-white",
            deActiveClasses : "text-red-500 bg-red-100",
            id : 2,
            count : 200,
            text : "dsbcksd"
        },
        {
            active : false,
            activeClass : "text-white bg-sky-500",
            deActiveClasses : "bg-sky-200 text-sky-500 ",
            id : 4,
            count : 200,
            text : "dsbcksd"
        }
    ])
  return { state , setState }
}

export default SteperJson