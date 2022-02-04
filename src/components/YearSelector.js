import { connect } from 'react-redux';
import { selectYear } from '../actions';

function YearSelector(props) {

  const onYearSelect = (event) => {

    props.selectYear(event.target.value)

  };

  
  return (
    <div>
      <form>
        <input onChange={onYearSelect} name="year" component="input" type="number" min="1910" max="2022"/>
      </form>

      <h1>{props.year}</h1>

    </div>
  );
}

const mapStateToProps = state => {
  return { year: state.year };
};

export default connect(
  mapStateToProps,
  { selectYear }
)(YearSelector);