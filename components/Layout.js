
import { Container, Row, Col } from 'react-bootstrap';
const DefaultLayout = props => (
  <Container>
    <Row className="justify-content-md-center">
      <Col lg="8">
        <div>{props.children}</div>
      </Col>
    </Row>
  </Container>
);

export default DefaultLayout;