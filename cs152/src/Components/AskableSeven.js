
import {Form, Button, Card} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'


const AskableSeven=()=>{

    const {register,handleSubmit,reset,formState:{errors}}=useForm()
    const navigate = useNavigate()
    

    const userInput=(data)=>{
       console.log(data)

       const requestOptions={
           method:"POST",
           headers:{
               'content-type':'application/json'
           },
           body:JSON.stringify(data)
       }
        
       fetch('/auth/login',requestOptions)
       .then(res=>res.json())
       .then(data=>{
           console.log(data.access_token)
           
           if (data.access_token){
            
            navigate('/')

           }
           else{
               alert('Invalid Path')
           }


       })

       reset()
    }
  return (
    <Card>
        <Card.Body>
            <h2 className = "text-center mb-4 "> Seventh Question </h2>
            <Form>
                <Form.Group id = "question">
                    <Form.Label>Any dietary preferces that we should be aware of? Examples are - ['dairyFree', 'glutenFree', 'lowFodmap', 'none'...]</Form.Label>
                    <Form.Control 
                    type = "text" 
                    placeholder='write your answer here' 
                    {...register('text',{required:true})}
                    />
                </Form.Group>
                <br/>
                <Form.Group>
                    <small>Click here to go to the <Link to='/eighthQ'>NEXT QUESTION</Link></small>
                </Form.Group>
                <br/>
                <br/>
                <Form.Group>
                    <small>Go back to <Link to='/'>Page One</Link></small>
                </Form.Group>
                <br/>
                <Button onClick={handleSubmit(userInput)} className = "w-100" type  = "submit">SUBMIT</Button>
            </Form>
        </Card.Body>
    </Card>
  )
}

export default AskableSeven