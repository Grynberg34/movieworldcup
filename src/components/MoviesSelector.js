import movies from '../api/movies';
import { connect } from 'react-redux';
import { selectMovies } from '../actions';

function MoviesSelector(props) {

  const movies_list = async () => {

    const year = props.year;

    const list = await movies.get(`/discover/movie?api_key=5ff916af5a80d36dfd1f25eadf1ada60&primary_release_year=${year}&vote_average.gte=8`, {
      params: { query: '' }
    });

    var list_of_16 = [];

    for (var i=0; i < 16; i++) {
      list_of_16.push(list.data.results[i])
    }

    props.selectMovies(list_of_16);

  };

  
  return (
    <div>

      <button onClick={movies_list}>Draw movies</button>

    </div>
  );
}

const mapStateToProps = state => {
  return { movies: state.movies, year: state.year };
};

export default connect(
  mapStateToProps,
  { selectMovies }
)(MoviesSelector);