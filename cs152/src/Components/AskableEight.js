
import {Form, Button, Card} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'


const AskableEight=()=>{

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
            <h2 className = "text-center mb-4 "> Eighth Question </h2>
            <Form>
                <Form.Group id = "question">
                    <Form.Label>Eighth Question</Form.Label>
                    <Form.Control 
                    type = "text" 
                    placeholder='write your answer here' 
                    {...register('text',{required:true})}
                    />
                </Form.Group>
                <br/>
                <Form.Group>
                    <small>Go back to the <Link to='/'>First Page to Start Over</Link></small>
                </Form.Group>
                <br/>
                <Button onClick={handleSubmit(userInput)} className = "w-100" type  = "submit">SUBMIT</Button>
            </Form>
        </Card.Body>
    </Card>
  )
}

export default AskableEight