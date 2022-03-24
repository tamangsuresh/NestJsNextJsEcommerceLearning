import React, { useState, useEffect } from 'react';
import { gql, useMutation, useQuery } from "@apollo/client";
import { Alert, Table, Button, Spinner, Container } from 'react-bootstrap'
import { AiTwotoneDelete } from 'react-icons/ai'
import { FaRegEdit } from 'react-icons/fa'
// import CustomModal from '../custom-modal/CustomModal';
import CustomModal from '../component/custom-modal/CustomModal';
const GET_DOGS = gql`
query Dogs{
    dogs{
      id
      name
      age
      breed
    }
  }
`
const DELETE_DOG = gql`
mutation DeleteDog($id:String!){
    deleteDog(id:$id){
        data
    }
  }`
export default function dog({ data }: any) {
    const [show, setShow] = useState(false);
    const [chooseData, setChooseData] = useState(null)
    const [stateData, setData] = useState<any>(null)
    const { loading, error, refetch } = useQuery(GET_DOGS, {
        onCompleted: data => {
            if (data) {
                setData(data)
            }
        }
    })
    const [deleteDogMutation, { data: DogDeleteData, loading: DeleteLoading, error: DeleteError }] = useMutation(DELETE_DOG,
        {
            onCompleted: data => {
                console.log('Delete success', data)
                a()
            }
        })

    const handleClose = () => { setShow(false), setChooseData(null) };
    const handleShow = (item?: any) => {
        setShow(true);
        item && setChooseData(item)
    }
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
    if (loading) {
        return <Container className='d-flex justify-content-center align-items-center'>
            <Spinner animation='border' />
        </Container>
    }
    return (
        <div className="container mt-5">
            <Alert>Dog list</Alert>
            <Button className="mb-3" onClick={() => { setChooseData(null), setShow(true) }}>Add Ball</Button>
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
                        stateData && stateData.dogs.map((item: any, index: any) =>
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.breed}</td>
                                <td><FaRegEdit onClick={() => handleShow(item)} /></td>
                                <td>
                                    <AiTwotoneDelete onClick={() => {
                                        deleteDogMutation({
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
            <CustomModal show={show} handleClose={handleClose} data={chooseData} name="dog" />
        </div>
    );
}

// export async function getStaticProps() {
//     const { data } = await client.query({
//         query: gql`
//         query Dog {
//           dogs {
//               id
//             name
//             age
//             breed
//           }
//         }
//       `,
//     });

//     return {
//         props: {
//             data: data.dogs
//         },
//     };
// }