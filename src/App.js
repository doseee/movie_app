import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";
//import PropTypes from "prop-types";

/*const foodILike = [
  {
    id: 1,
    name: "kimchi",
    img:
      "https://www.maangchi.com/wp-content/uploads/2019/11/vegetarian-kimchi.jpg",
    //rating: 5
  },

  {
    id: 2,
    name: "ramen",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Shoyu_Ramen.jpg/1200px-Shoyu_Ramen.jpg",
    rating: 3.2,
  },
];*/

/*function renderFood(dish) {
  return <Food name={dish.name} img={dish.img} rating={dish.rating}/>;
}*/

/*
function Food({ name, img, rating }) {
  return (
    <div>
      <h2> I like {name} </h2>
      <h4>{rating}/5.0</h4>
      <img src={img} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

function App() {
  return (
    <div className="App">
      {" "}
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          img={dish.img}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}*/
/*{foodILike.map(renderFood)}*/

class App extends React.Component {
  /*constructor(props) {
    super(props);
    console.log("hello");
  }
  state = {
    //object
    count: 0,
  };
  add = () => {
    this.setState((current) => ({count: current.count + 1}));
  };
  minus = () => {
    this.setState((current) => ({count: current.count - 1}));
  };
  componentDidMount() {
    console.log("component rendered");
  }
  componentDidUpdate() {
    console.log("I just updated");
  }
  componentWillUnmount() {
    console.log("Goodbye");
  }
  render() {
    console.log("I'm rendering");
    return (
      <div>
        <h1> The number is: {this.state.count} </h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    ); 
  }*/

  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: {movies},
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({
      movies,
      isLoading: false,
    }); //data:axios
  };
  componentDidMount() {
    //delay function
    /*setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 6000);*/
    this.getMovies();
  }
  render() {
    const {isLoading, movies} = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader__text">Loading...</span>
          </div>
        ) : (
          <div class="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}
//this.add()는 결과를 넣어주는 것, ()가 없을경우는 함수 자체를 넣어준 것
export default App;

//setState를 호출하면 react는 다시 render함
