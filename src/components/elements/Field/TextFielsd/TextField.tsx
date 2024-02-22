
import { Field } from "formik"
import IField from "./ITextField"
import { ErrorMessage } from "formik"
const TextField = ({label,name,placeholder} : IField) => {
  return (
      <div className="flex flex-col gap-8">
        {/* <Field type="text" name={name} placeholder={placeholder}/> */}
        <label htmlFor="" className='text-black text-16 font-iransanBold'>{label}</label>
        <input type="text" name={name} placeholder={placeholder} id={name} className="text-black placeholder:text-light-70 text-14 py-8 px-16 bg-white border-[1px] border-red-20 rounded-8 w-full" />
        {/* <ErrorMessage className="text-12 text-red-50 px-12" name="name"/> */}
      </div>
  )
}

export default TextField