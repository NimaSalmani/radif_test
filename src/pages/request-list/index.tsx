import Wrapper from '@/src/components/common/Wrapper/Wrapper'
import StepButton from '@/src/components/common/Buttons/StepButton/StepButton'

import React from 'react'
import Para from '@/src/components/common/Text/Para/Para'
import TextField from '@/src/components/elements/Field/TextFielsd/TextField'

import { useFormik } from 'formik'



const index = () => {
  

  return (
    <Wrapper>
      <div className="w-full flex flex-col gap-32">

        <div className='grid grid-cols-4 gap-32'>
          <StepButton/>
          <StepButton/>
          <StepButton/>
          <StepButton/>
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

export default index