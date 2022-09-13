import {useState} from 'react';
import useFetchingGallery from './useFetchingGallery';
import SearchBav from './component/SearchBav';
import ImageGallery from './component/ImageGallery';
function App() {
  const [params, setParams] = useState({per_page: 5, q: ""});
  const {gallerys, loading, error} = useFetchingGallery(params);
  const onChangeField = type => e => {
    setParams({...params, [type]: e.target.value})
  }
  console.log(params)
  return (
    <div>
      <SearchBav onChangeField={onChangeField} params={params}/>
      {loading && <h2>Loading...</h2>}
      {error && <h2>Error. Try Refreshing</h2>}  
      {gallerys.map(item=><ImageGallery key={item.id} item={item}/>)}
    </div>
  )
}

export default App;
