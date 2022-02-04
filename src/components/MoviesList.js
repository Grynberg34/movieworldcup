import { connect } from 'react-redux';

function MoviesList(props) {

  console.log(props)

  
  return (
    <div>


    </div>
  );
}

const mapStateToProps = state => {
  return { movies: state.movies };
};

export default connect(
  mapStateToProps
)(MoviesList);