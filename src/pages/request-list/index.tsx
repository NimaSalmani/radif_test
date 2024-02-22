import Wrapper from '@/src/components/common/Wrapper/Wrapper'
import StepButton from '@/src/components/common/Buttons/StepButton/StepButton'

import React from 'react'
import Para from '@/src/components/common/Text/Para/Para'
import TextField from '@/src/components/elements/Field/TextFielsd/TextField'

import { useFormik } from 'formik'
import SteperJson from "../../constants/pages/request-list/steperJson"
import { useRouter } from 'next/router'

const Index = () => {
  const router = useRouter()
  const {state,setState} = SteperJson()
  const tab = router.query.tab as string;

  console.log(state)
  const handler = (id:number) => {

    if(id.toString() == tab){
      delete router.query.tab
      router.push(router)
    }else{
      router.query.tab = id.toString()
      router.push(router)
    }
    
  }
  return (
    <Wrapper>
      <div className="w-full flex flex-col gap-32">

        <div className='grid grid-cols-4 gap-32'>
          {
            state.map((item,index)=>
              <StepButton item={item} click={()=>handler(item.id)} key={index}/>
            )
          }
        </div>

        <div className='flex items-center justify-between'>

          <div className='flex flex-col gap-4 w-7/12'>
            <h2 className='text-18 text-black font-iransanMd'>لیست درخواست ها</h2>
            <Para/>
          </div>
          <div className=' w-4/12'>
            <TextField name="search" label='جستوجو' placeholder='کدرهگیری یا نمونه یا  عبارتی که میخواهید را جستجو کنید'/>
          </div>
        </div>
        

      </div>
    </Wrapper>
  )
}

export default Index