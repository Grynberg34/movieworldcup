import { connect } from 'react-redux';
import { selectYear } from '../actions';
import store from '../store.js';

function MovieSelector(props) {

  const onYearSelect = async (event) => {

    props.selectYear(event.target.value)

  };

  
  return (
    <div>
      <form>
        <input onChange={onYearSelect} name="year" component="input" type="number" min="1910" max="2022"/>
      </form>

    </div>
  );
}

const mapStateToProps = state => {
  return { year: state.year };
};

export default connect(
  mapStateToProps,
  { selectYear }
)(MovieSelector);