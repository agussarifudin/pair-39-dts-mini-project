import { BottomNavigation } from "@mui/material";
import React from "react";
import { useLocation, Link } from "react-router-dom";
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";
import NavBar from "./Navbar";

const Detail = () => {
  const location = useLocation();
  console.log(location.state.genres);

  return (
    <>
      <NavBar />
      <Container>
        <Row style={{ paddingTop: 20 }}>
          <Col>
            <Card
              style={{
                background:
                  "linear-gradient(to bottom, #99ccff 0%, #66ffff 100%)",
              }}
            >
              <img
                alt="Card"
                src={`${location.state.url}`}
                style={{ height: 500 }}
              />
              <CardBody>
                <CardTitle tag="h5">{location.state.film}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  {location.state.genres.map((item) => item + " ")}
                </CardSubtitle>
                <CardText>
                  <Row>
                    <Col sm={1}> Tahun </Col>
                    <Col>: {location.state.year}</Col>
                  </Row>
                </CardText>
                <CardText>
                  <Row>
                    <Col sm={1}> Durasi </Col>
                    <Col>: {location.state.runtime}</Col>
                  </Row>
                </CardText>

                <CardText>
                  <Row>
                    <Col sm={1}> Sinopsis </Col>
                  </Row>
                  <Col> {location.state.plot} </Col>
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <div style={{ float: "right", paddingTop: 10 }}>
          <Link
            style={{
              textDecoration: "none",
              color: "white",
              width: 1000,
            }}
            to={{
              pathname: `/home`,
            }}
          >
            <Button color="primary"> BACK</Button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default Detail;
