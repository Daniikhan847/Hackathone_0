import React from 'react'
import NewCeramics from '@/components/NewCeramics'
import ProductPage from '@/components/Product'
import Brand from '@/components/Brand'
import SignUp from '@/components/SignUp'

const page = () => {
  return (
    <div>
      <ProductPage/>
      <NewCeramics heading='You might also like'/>
      <Brand/>
      <SignUp/>
    </div>
  )
}

export default page