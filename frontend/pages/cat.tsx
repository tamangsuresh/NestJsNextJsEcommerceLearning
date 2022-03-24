import React, { useState, useEffect } from 'react';
import { Alert, Table, Button, Spinner, Container } from 'react-bootstrap'
import { gql, useQuery, useMutation } from "@apollo/client";
import client from './apollo-client';
import CustomModal from '../component/custom-modal/CustomModal';
import { AiTwotoneDelete } from 'react-icons/ai'
import { FaRegEdit } from 'react-icons/fa'
const GET_CATS = gql`
query Cat {
    cats {
        id
      name
      age
      breed
    }
  }
`
const DELETE_CAT = gql`
mutation DeleteCat($id:String!){
    deleteCat(id:$id){
        data
    }
  }
`
export default function cat() {
    const [show, setShow] = useState(false);
    const [chooseData, setChooseData] = useState(null)
    const [stateData, setData] = useState<any>(null)

    const handleClose = () => { setShow(false), setChooseData(null) };
    const handleShow = (item?: any) => {
        setShow(true);
        item && setChooseData(item)
    }
    const { data, refetch, loading } = useQuery(GET_CATS)
    const [deleteCatMutation, { data: CatDeleteData, loading: DeleteLoading, error: DeleteError }] = useMutation(DELETE_CAT,
        {
            onCompleted: data => {
                console.log('Delete success', data)
                a()
            }
        })


    useEffect(() => {
        a()
    }, [!show])
    const a = async () => {
        try {
            const { data, loading, error, errors } = await refetch()
            data && setData(data)
        } catch (e) {

        }
    }
    console.log('data', stateData)
    if (loading) {
        return <Spinner animation='grow' />
    }
    return <div className="container mt-5">
        <Button className="mb-3" onClick={() => { setChooseData(null), setShow(true) }}>Add Cat</Button>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Bread</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    stateData && stateData.cats.map((item: any, index: any) =>
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.breed}</td>
                            <td><FaRegEdit onClick={() => handleShow(item)} /></td>
                            <td>
                                <AiTwotoneDelete onClick={() => {
                                    deleteCatMutation({
                                        variables: {
                                            id: item.id
                                        }
                                    })
                                }} />
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </Table>
        <CustomModal show={show} handleClose={handleClose} data={chooseData} name="cat" />
    </div>;
}

export async function getStaticProps() {
    const { data } = await client.query({
        query: gql`
        query Cats {
          cats {
              id
            name
            age
            breed
          }
        }
      `,
    });

    return {
        props: {
            data: data.cats
        },
    };
}