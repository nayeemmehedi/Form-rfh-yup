import React from 'react'
import { useGetProductNameQuery, useGetupdatePostMutation } from '../reduxToolkit/product/slice'
import Form from '../react-form-hock/form.jsx'

function App() {

  const {data,isError,isLoading} = useGetProductNameQuery("/")
 const [product, {isSuccess,isLoading:postLoading}] = useGetupdatePostMutation("/")
  
 

  return (
    <div>

      <Form product={product}></Form>
      {isSuccess ? "Successfully updated":""}


      {
        data?.data?.map((v,id)=> 
          <div>
             {id+1} == {v.name}
          </div>
          
          )
      }
    </div>
  )
}

export default App