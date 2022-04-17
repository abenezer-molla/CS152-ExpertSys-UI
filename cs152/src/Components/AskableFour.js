
import {Form, Button, Card} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import Select from 'react-select'

const AskableFour=()=>{

    const {register,handleSubmit,reset,formState:{errors}}=useForm()
    const navigate = useNavigate()
    

  return (
    <Card>
        <Card.Body>
            <h2 className = "text-center mb-4 "> Fourth Question </h2>
            <Form method="POST" action="{{ url_for('results') }}">
                <Form.Group id = "email">
                    <Form.Label>What is the maximum value of calorie you want to get from the food?</Form.Label>
                    <input class="form-control form-control-md" type="number" placeholder="Calories in numbers" required name="calories"></input>
                </Form.Group>
                <br/>
                <Form.Group>
                    <small>Click here to go to the <Link to='/fifthQ'>NEXT QUESTION</Link></small>
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

export default AskableFour