import "./App.css";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import MovieList from "./components/MovieList";
import axios from "axios";
import Swal from "sweetalert2";
import React, { Component } from "react";
import CarouselComponent from "./components/CarouselComponent";
import { Container } from "@mui/system";
import { Row } from "reactstrap";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      data: "",
      genre: [],
      film: [],
      plot: "",
      year: "",
      runtime: "",
      director: "",
      actors: "",
      postUrl: [],
      carousel: [],
      searchTerm: "",
      videoId: "",
    };
  }

  async loginLocalStorage() {
    await axios
      .create({
        timeout: 20000,
      })

      .get("https://my-json-server.typicode.com/agussarifudin/dataSales/db")

      .then((res) => {
        const options = [];
        let url = res.data.movies.map((item) => item.banner);
        let name = res.data.movies.map((item) => item.title);
        for (let i = 0; i < url.length; i++) {
          options.push({
            altText: ``,
            caption: `${name[i]}`,
            key: i,
            src: `${url[i]}`,
          });
        }

        this.setState({
          data: res.data,
          genre: res.data.genres,
          film: res.data.movies,
          plot: res.data.plot,
          year: res.data.year,
          runtime: res.data.runtime,
          postUrl: url,
          carousel: options,
          videoId: res.data.videoId,
        });
      })

      .catch((err) => {
        Swal.fire({
          title: "Something went wrong, please try again later!",

          text: "Terjadi kesalahan, silahkan coba kembali!",

          icon: "error",

          confirmButtonColor: "#0080BB",
        });
      });
  }
  //test
  componentDidMount() {
    this.loginLocalStorage();
  }

  onChangeHandler(i) {
    const { film } = this.state;
    let test = "Valk";
    let changeFilm = film.filter((x) => x.title.includes(test));

    this.setState({
      film: changeFilm,
    });
  }

  editSearchTerm(e) {
    this.setState({
      searchTerm: e.target.value,
    });
  }

  dynamicSearch() {
    let filmFilter = this.state.film.filter((name) =>
      name.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
    this.setState({
      film: filmFilter,
    });
  }

  render() {
    return (
      <>
        <Navbar />
        <div style={{ background: "black" }}>
          {/* <Home /> */}
          <Container>
            <Row>
              {/* <Input
                bsSize="lg"
                className="mb-3"
                placeholder="Search.."
                value={this.state.searchTerm}
                onChange={(i) => this.editSearchTerm(i)}
              /> */}
              <CarouselComponent url={this.state.carousel} />

              <MovieList
                film={this.state.film}
                plot={this.state.plot}
                genres={this.state.genre}
                year={this.state.year}
                runtime={this.state.runtime}
                director={"Dsadsa"}
                actors={this.state.actors}
                postUrl={this.state.postUrl}
                videoId={this.state.videoId}
              />
            </Row>
          </Container>
        </div>
        <div style={{ paddingTop: 100 }}>
          <Footer />
        </div>
      </>
    );
  }
}
