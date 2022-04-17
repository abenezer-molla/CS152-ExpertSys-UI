
import {Form, Button, Card} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import Select from 'react-select'

const AskableSeven=()=>{

    const {register,handleSubmit,reset,formState:{errors}}=useForm()
    const navigate = useNavigate()
    const options = [
        { value: 'dairyFree', label: 'dairyFree' },
        { value: 'glutenFree', label: 'glutenFree' },
        { value: 'lowFodmap', label: 'lowFodmap' },
        { value: 'glutenFree', label: 'glutenFree' },
        { value: 'vegetarian', label: 'vegetarian' },
        { value: 'vegan', label: 'vegan' },
        { value: 'none', label: 'none' }
    ]
    // Examples are - ['dairyFree', 'glutenFree', 'lowFodmap', 'none'...]
    


  return (
    <Card>
        <Card.Body>
            <h2 className = "text-center mb-4 "> Seventh Question </h2>
            <Form method="POST" action="{{ url_for('results') }}">
                <Form.Group id = "question">
                    <Form.Label>Any dietary preferces that we should be aware of?</Form.Label>
                    <Select tokenSeparators={['/',',',';'," "]}  mode="tags"  isMulti requiredName="ingredients[]" classNamePrefix="select" options={options} />
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
                <Button className = "w-100" type  = "submit">SUBMIT</Button>
            </Form>
        </Card.Body>
    </Card>
  )
}

export default AskableSeven