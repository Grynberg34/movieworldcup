import movies from '../api/movies';

function App() {

  const onSearch = async (year_1,year_2) => {
    const list = await movies.get(`/discover/movie?api_key=5ff916af5a80d36dfd1f25eadf1ada60&primary_release_date.gte=${year_1}-01-01&primary_release_date.lte=${year_2}-12-31`, {
      params: { query: '' }
    });

    console.log(list)
  };


  
  return (
    <div>
      <h1 onClick={onSearch}>Click</h1>
      <form>
        <input type="number"/>
      </form>
    </div>
  );
}

export default App;
