
import {Form, Button, Card} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import Select from 'react-select';
import {useEffect, useState} from 'react';

const Result=(props)=>{


    const [eventList, setEventList] = useState([]);
    const {reset}=useForm()
    const [show,setShow]=useState(false)

    useEffect(() => {
      fetch('/results')
          .then(response => response.json())
          .then(data => {
            setEventList(data.event)
            console.log("LOOK HERE", data.event)
          }
  
          )   
  
  // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  return (
    <Card>
        <Card.Body>
        <div class="container">
            <h1>Results</h1>

            {eventList.map(rec => {
              return (
            <div>
                <div class="card" style="width: 18rem;">
                    <img src="https://spoonacular.com/recipeImages/{{ rec['id'] }}-556x370.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{rec['title']}</h5>
                    <p class="card-text">Place Holder Text</p>
                    </div>
                </div>
            </div>
            )
            })}
        </div>
        </Card.Body>
    </Card>
  )
}

export default Result















