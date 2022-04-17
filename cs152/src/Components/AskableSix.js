
import {Form, Button, Card} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import Select from 'react-select'

const AskableSix=()=>{

    const {register,handleSubmit,reset,formState:{errors}}=useForm()
    const navigate = useNavigate()
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    

    const userInput=(data)=>{
       console.log(data)

       const requestOptions={
           method:"POST",
           headers:{
               'content-type':'application/json'
           },
           body:JSON.stringify(data)
       }
        
       fetch('/',requestOptions)
       .then(res=>res.json())
       .then(data=>{
           console.log(data.access_token)
       })

       reset()
    }
  return (
    <Card>
        <Card.Body>
            <h2 className = "text-center mb-4 "> Sixth Question </h2>
            <Form method="POST" action="{{ url_for('results') }}">
                <Form.Group id = "email">
                    <Form.Label>Are you looking for a specific dishtype? Examples are - ['lunch', 'main course', 'main dish', 'dinner', 'none'...]</Form.Label>
                    <Select isMulti requiredName="ingredients[]" classNamePrefix="select" options={options} />
                </Form.Group>
                <br/>
                <Form.Group>
                    <small>Click here to go to the <Link to='/seventhQ'>NEXT QUESTION</Link></small>
                </Form.Group>
                <br/>
                <br/>
                <Form.Group>
                    <small>Go back to <Link to='/'>Page One</Link></small>
                </Form.Group>
                <br/>
                <Button className = "w-100" type  = "submit">SUBMIT</Button>
            </Form>
        </Card.Body>
    </Card>
  )
}

export default AskableSix 