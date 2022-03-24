import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Spinner } from 'react-bootstrap'
import { gql, useMutation } from '@apollo/client';

const CREATE_BALL = gql`
mutation CreateBall($name: String!, $age: Int!, $breed: String!) {
    createBall(input: { name: $name, age: $age, breed: $breed }) {
      name
      age
      breed
    }
  }
`;
const UPDATE_BALL = gql`
mutation UpdateByIdBall($id:String!,$name:String,$age:Int,$breed:String){
    updateByIdBall(input:{id:$id,name:$name,age:$age,breed:$breed}){
      id
      name
      age
      breed
    }
  }
`;
const CREATE_CAT = gql`
mutation CreateCat($name: String!, $age: Int!, $breed: String!) {
    createCat(input: { name: $name, age: $age, breed: $breed }) {
      name
      age
      breed
    }
  }
`;
const UPDATE_CAT = gql`
mutation UpdateByIdBall($id:String!,$name:String,$age:Int,$breed:String){
    updateByIdCat(input:{id:$id,name:$name,age:$age,breed:$breed}){
      id
      name
      age
      breed
    }
  }
`;

const CREATE_DOG = gql`
mutation CreateDog($name: String!, $age: Int!, $breed: String!) {
    createDog(input: { name: $name, age: $age, breed: $breed }) {
      name
      age
      breed
    }
  }
`;
const UPDATE_DOG = gql`
mutation UpdateByIdDog($id:String!,$name:String,$age:Int,$breed:String){
    updateByIdDog(input:{id:$id,name:$name,age:$age,breed:$breed}){
      id
      name
      age
      breed
    }
  }
`;
const CREATE_GOAT = gql`
mutation CreateGoat($name: String!, $age: Int!, $breed: String!) {
    createGoat(input: { name: $name, age: $age, breed: $breed }) {
      name
      age
      breed
    }
  }
`;
const UPDATE_GOAT = gql`
mutation UpdateByIdGoat($id:String!,$name:String,$age:Int,$breed:String){
    updateByIdGoat(input:{id:$id,name:$name,age:$age,breed:$breed}){
      id
      name
      age
      breed
    }
  }
`;

export default function CustomModal({ show, handleClose, data, name }: any) {
    useEffect(() => {
        setStateData({
            age: data?.age,
            name: data?.name,
            breed: data?.breed,
        })
    }, [data, show])
    const [stateData, setStateData] = useState({
        age: "",
        name: "",
        breed: "",
    })
    const [createBall, { data: data1, loading, error }] = useMutation(CREATE_BALL, {
        onCompleted: data => {
            handleClose(), setStateData({ age: "", name: "", breed: "" })
        }
    });
    const [updateBall, { data: data2, loading: loading2, error: error2 }] = useMutation(UPDATE_BALL, {
        onCompleted: data => {
            handleClose(), setStateData({ age: "", name: "", breed: "" })
        }
    });
    const [createCat, { data: data3, loading: loading3, error: error3 }] = useMutation(CREATE_CAT, {
        onCompleted: data => {
            handleClose(), setStateData({ age: "", name: "", breed: "" })
        }
    });
    const [updateCat, { data: data4, loading: loading4, error: error4 }] = useMutation(UPDATE_CAT, {
        onCompleted: data => {
            handleClose(), setStateData({ age: "", name: "", breed: "" })
        }
    });

    const [createDog, { data: data5, loading: loading5, error: error5 }] = useMutation(CREATE_DOG, {
        onCompleted: data => {
            handleClose(), setStateData({ age: "", name: "", breed: "" })
        }
    });
    const [updateDog, { data: data6, loading: loading6, error: error6 }] = useMutation(UPDATE_DOG, {
        onCompleted: data => {
            handleClose(), setStateData({ age: "", name: "", breed: "" })
        }
    });
    const [createGoat, { data: data7, loading: loading7, error: error7 }] = useMutation(CREATE_GOAT, {
        onCompleted: data => {
            handleClose(), setStateData({ age: "", name: "", breed: "" })
        }
    });
    const [updateGoat, { data: data8, loading: loading8, error: error8 }] = useMutation(UPDATE_GOAT, {
        onCompleted: data => {
            handleClose(), setStateData({ age: "", name: "", breed: "" })
        }
    });
    // console.log('modal data', stateData)
    // if (loading) return 'Submitting...';
    // if (error) return `Submission error! ${error.message}`;

    return <Modal show={show} onHide={handleClose}>
        <Modal.Header>
            <Modal.Title>Ball</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Age</Form.Label>
                    <Form.Control placeholder="Age" type='number' value={stateData?.age} onChange={(e) => { setStateData({ ...stateData, age: e.target.value }) }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control placeholder="Name" value={stateData?.name} onChange={(e) => { setStateData({ ...stateData, name: e.target.value }) }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Breed</Form.Label>
                    <Form.Control placeholder="Breed" value={stateData?.breed} onChange={(e) => { setStateData({ ...stateData, breed: e.target.value }) }} />
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={() => { handleClose() }}>Close</Button>
            {
                loading ?
                    <Spinner animation='border' />
                    :
                    <Button variant="primary" onClick={() => {
                        switch (name) {
                            case "ball":
                                data ?
                                    updateBall({
                                        variables: {
                                            id: data.id,
                                            name: stateData.name,
                                            age: new Number(stateData.age),
                                            breed: stateData.breed
                                        }
                                    })
                                    :
                                    createBall({
                                        variables: {
                                            age: new Number(stateData.age),
                                            name: stateData.name,
                                            breed: stateData.breed
                                        }
                                    });
                                break;
                            case "cat":
                                data ?
                                    updateCat({
                                        variables: {
                                            id: data.id,
                                            name: stateData.name,
                                            age: new Number(stateData.age),
                                            breed: stateData.breed
                                        }
                                    })
                                    :
                                    createCat({
                                        variables: {
                                            age: new Number(stateData.age),
                                            name: stateData.name,
                                            breed: stateData.breed
                                        }
                                    });
                            case "dog":
                                data ?
                                    updateDog({
                                        variables: {
                                            id: data.id,
                                            name: stateData.name,
                                            age: new Number(stateData.age),
                                            breed: stateData.breed
                                        }
                                    })
                                    :
                                    createDog({
                                        variables: {
                                            age: new Number(stateData.age),
                                            name: stateData.name,
                                            breed: stateData.breed
                                        }
                                    });
                            case "goat":
                                data ?
                                    updateGoat({
                                        variables: {
                                            id: data.id,
                                            name: stateData.name,
                                            age: new Number(stateData.age),
                                            breed: stateData.breed
                                        }
                                    })
                                    :
                                    createGoat({
                                        variables: {
                                            age: new Number(stateData.age),
                                            name: stateData.name,
                                            breed: stateData.breed
                                        }
                                    });
                            default:
                                break;
                        }

                        // handleClose();
                        // setStateData({ age: "", name: "", breed: "" });
                    }}>
                        {
                            data ?
                                "Edit" :
                                "Save changes"
                        }
                    </Button>
            }
        </Modal.Footer>
    </Modal>
}

