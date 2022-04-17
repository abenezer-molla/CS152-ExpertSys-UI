
import {Form, Button, Card} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import Select from 'react-select'

const AskableOne=()=>{

    const options = [

        

        /// the ones below are place holder selection values. I will replace them with the ones from KB tomorrow morning. It's almost 2am now. 
        { value: 'asafetida', label: 'asafetida' },
        { value: 'dried chickpeas', label: 'dried chickpeas' },
        { value: 'fresh chives', label: 'fresh chives' },
        { value: 'fresh ginger', label: 'fresh ginger' },
        { value: 'fresh parsley', label: 'fresh parsley' },
        { value: 'garlic', label: 'garlic' },
        { value: 'ground coriander', label: 'ground coriander' },
        { value: 'ground pepper', label: 'ground pepper' },
        { value: 'juice of lemon', label: 'juice of lemon' },
        { value: 'olive oil', label: 'olive oil' },
        { value: 'red chilies', label: 'red chilies' },
        { value: 'sea salt', label: 'sea salt' },
        { value: 'tahini', label: 'tahini' },
        { value: 'turmeric', label: 'turmeric' },
        { value: 'butter leaf lettuce', label: 'butter leaf lettuce' },
        { value: 'carrots', label: 'carrots' },
        { value: 'ginger', label: 'ginger' },
        { value: 'hoisin sauce', label: 'hoisin sauce' },
        { value: 'jicama', label: 'jicama' },
        { value: 'red bell pepper', label: 'red bell pepper' },
        { value: 'rice paper', label: 'rice paper' },
        { value: 'spring roll paper', label: 'spring roll paper' },
        { value: 'thai basil', label: 'thai basil' },
        { value: 'saracha', label: 'saracha' }

    ]

    const {register,handleSubmit,reset,formState:{errors}}=useForm()
    const navigate = useNavigate()
    


  return (
    <Card>
        <Card.Body>
            <h2 className = "text-center mb-4 "> First Question </h2>
            <Form method="POST" action="{{ url_for('results') }}">
                <Form.Group id = "email">
                    <Form.Label> Do you want to search for ingredients?</Form.Label>
                    <Select tokenSeparators={['/',',',';'," "]}  mode="tags"  isMulti requiredName="ingredients[]" classNamePrefix="select" options={options} />
                </Form.Group>
                <br/>
                <Form.Group>
                    <small>Click here to go to the <Link to='/secondQ'>NEXT QUESTION</Link></small>
                </Form.Group>
                <br/>

                <Button className = "w-100" type  = "submit">SUBMIT</Button>
            </Form>
        </Card.Body>
    </Card>
  )
}

export default AskableOne
