
import {Form, Button, Card} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import Select from 'react-select'

const AskableFive=()=>{

    const {register,handleSubmit,reset,formState:{errors}}=useForm()
    const navigate = useNavigate()
    const options = [
        { value: 'Vietnamese', label: 'Vietnamese' },
        { value: 'Asian', label: 'Asian' },
        { value: 'Middle Eastern', label: 'Middle Eastern' },
        { value: 'Mexican', label: 'Mexican' },
        { value: 'Mediterranean', label: 'Mediterranean' },
        { value: 'French', label: 'French' },
        { value: 'European', label: 'European' },
        { value: 'American', label: 'American' },
        { value: 'Asian', label: 'Asian' },
        { value: 'Italian', label: 'Italian' },
        { value: 'none', label: 'none' }
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
            <h2 className = "text-center mb-4 "> Fifth Question </h2>
            <Form method="POST" action="{{ url_for('results') }}">
                <Form.Group id = "email">
                    <Form.Label> What type of cuisine are you seeking? Examples are </Form.Label>
                    <Select isMulti requiredName="ingredients[]" classNamePrefix="select" options={options} />
                </Form.Group>
                <br/>
                <Form.Group>
                    <small>Click here to go to the <Link to='/sixthQ'>NEXT QUESTION</Link></small>
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

export default AskableFive