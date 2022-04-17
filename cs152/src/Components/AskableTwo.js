
import {Form, Button, Card} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import Select from 'react-select'

const AskableTwo=()=>{


    const options = [
        { value: 'yes', label: 'YES' },
        { value: 'no', label: 'NO' }
        
    ]
    

  return (
    <Card>
        <Card.Body>
            <h2 className = "text-center mb-4 "> Second Question </h2>
            <Form method="POST" action="{{ url_for('results') }}">
                <Form.Group id = "email">
                    <Form.Label>Do you want to search for the type of food? YES or NO?</Form.Label>
                    <Select tokenSeparators={['/',',',';'," "]}  mode="tags"  isMulti classNamePrefix="select" requiredName="ingredients[]" options={options} />
                </Form.Group>
                <br/>
                <Form.Group>
                    <small>Click here to go to the <Link to='/thirdQ'>NEXT QUESTION</Link></small>
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

export default AskableTwo