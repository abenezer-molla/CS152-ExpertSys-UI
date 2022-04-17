
import {Form, Button, Card} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import Select from 'react-select'

const AskableEight=()=>{

    const {register,handleSubmit,reset,formState:{errors}}=useForm()
    const navigate = useNavigate()
    

  return (
    <Card>
        <Card.Body>
            <h2 className = "text-center mb-4 "> Eighth Question </h2>
            <Form method="POST" action="{{ url_for('results') }}">
                <Form.Group id = "question">
                    <Form.Label>What Is The Max Price You Are Willing To Spend(in numbers only)? </Form.Label>
    
                    <input class="form-control form-control-md" type="number" placeholder="price in USD" required name="price"></input>
                </Form.Group>
                <br/>
                <Form.Group>
                    <small>Go back to the <Link to='/'>First Page to Start Over</Link></small>
                </Form.Group>
                <br/>
                <br/>
                <Form.Group>
                    <small>Go to<Link to='/result'>Results Page</Link></small>
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

export default AskableEight