import React, { useState } from 'react'
import {toast} from 'react-toastify'
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Container,
    Form,
    FormGroup,
    Input,
    Label,
    Row,
  } from "reactstrap";
import { addItem } from '../services/item-service';

const AddItem = () => {

    //set item data
    const [data, setData] = useState({
        name:'',
        description:''
    });

    // handle change
    const handleChange =(event, property)=>{
        //dynamic setting the values
        setData({...data,[property]:event.target.value});
    }

    //reseting data
    const resetData=()=>{
        setData({
            name:'',
            description:''
        });
    }

    // handle the form
    const submitForm=(event)=>{
        event.preventDefault();

        console.log(data);

        //call server api for sending data
        addItem(data)
        .then((resp)=>{
            console.log(resp)
            console.log("Success log")
            toast.success("Item added successfully!!")

            setData({
                name:'',
                description:''
            });
        })
        .catch((error)=>{
            console.log("Error log")
            console.log(error)
            toast.error("Something went wrong on server, Try Again!!")
        })
    }


  return (
        
    <div className='align-middle'>
    {/* // <Container> */}
        <Row className='mt-3'>
            <Col sm={{size:6, offset:3}} >
            <Card color='dark' inverse >
                <CardHeader>
                    <h2>Add Item</h2>
                </CardHeader>
                <CardBody>
                    {/* creating form */}
                    <Form onSubmit={submitForm} >
                        {/* name field */}
                       <FormGroup>
                        <Label for='name' >Enter Item Name</Label>
                        <Input
                         type='text'
                         placeholder='Enter here'
                         id='name'
                         onChange={(e)=>handleChange(e,'name')}
                         value={data.name}
                         required
                        />
                       </FormGroup>

                       {/* description field */}
                       <FormGroup>
                        <Label>Enter Item Description</Label>
                        <Input
                        type='text'
                        placeholder='Enter here'
                        id='description'
                        onChange={(e)=>handleChange(e,'description')}
                        value={data.description}
                        required
                        />
                       </FormGroup>

                       <FormGroup>
                       <Container>
                        <Button color='danger' outline >Add</Button>

                        <Button color='warning' onClick={resetData} outline type='reset' className='ms-2' >Reset</Button>
                        </Container> 
                       </FormGroup>
                    </Form>
                </CardBody>
            </Card>
            </Col>

        </Row>
    {/* </Container> */}
    </div>
    
  )
}

export default AddItem