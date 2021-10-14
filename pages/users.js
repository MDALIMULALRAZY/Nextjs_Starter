import { Card, Container, Row, Col } from 'react-bootstrap';

function UserList({ users }) {
    return <>
        <h1> List of Users </h1>
        <Container>
            <Row className="justify-content-md-center">
                {
                    users.map(user => {
                        return (
                            <Col key={user.id}>
                                <Card border="primary" style={{ width: '18rem' }}>
                                    <Card.Header>{user.name}</Card.Header>
                                    <Card.Body>
                                        <Card.Title>{user.email}</Card.Title>
                                        <Card.Text>
                                            {user.username}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                }

            </Row>

        </Container>

    </>
}
export default UserList

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data);
    return {
        props: {
            users: data,
        }
    }
}