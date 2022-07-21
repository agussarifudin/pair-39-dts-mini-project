import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Col,
  CardDeck,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "@mui/material/Button";

const MovieList = ({ film }) => {
  const [login] = useState(localStorage.getItem("login"));

  return film.map((item, index) => (
    <Col sm={3} style={{ paddingTop: 30 }} key={index}>
      <CardDeck>
        <Card
          style={{
            width: "18rem",
            paddingTop: 10,
            paddingRight: 10,
            paddingLeft: 10,
            paddingBottom: 10,
            borderRadius: 10,
            gridGab: 100,
            background: "linear-gradient(to bottom, #99ccff 0%, #66ffff 100%)",
          }}
          key={index}
        >
          <img alt="e" src={`${item.posterUrl}`} />
          <CardBody>
            <CardTitle tag="h5">{item.title}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {item.genres.map((i) => i + " ")}
            </CardSubtitle>
            <CardText>{item.plot}</CardText>
            <Link
              to={`/home/detail/${item.title}`}
              state={{
                film: item.title,
                genres: item.genres,
                plot: item.plot,
                year: item.year,
                runtime: item.runtime,
                director: item.director,
                actors: item.actors,
                url: item.posterUrl,
                videoId: item.videoId,
              }}
            >
              {login === "true" ? (
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Detail
                </Button>
              ) : (
                <h2 style={{ display: "none" }}>dsadas</h2>
              )}
            </Link>
          </CardBody>
        </Card>
      </CardDeck>
    </Col>
  ));
};

export default MovieList;
