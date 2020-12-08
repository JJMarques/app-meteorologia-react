import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import LocalDataDisplay from './components/LocalDataDisplay'

function App() {

  const [localList, setLocalList] = useState([])
  const [local, setLocal] = useState({})
  const [localName, setLocalName] = useState("")

  useEffect(() => {
    const fetchApi = async () => {
      const result = await axios('https://api.ipma.pt/open-data/distrits-islands.json')
      .then(r => setLocalList(r.data.data))
    }
    fetchApi()
  }, [])
  
  const getLocalData = async (n, id) => {
    setLocalName(n)
    await axios.get(`https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/${id}.json`)
    .then(r => {
      setLocal(r.data.data)
    })
  }

  let locationList
  if (localList.length > 0) {
    locationList = localList.map((location) => {
      return(
        <button 
          key={location.globalIdLocal}
          onClick={() => getLocalData(location.local, location.globalIdLocal)}
        >
          {location.local}
        </button>
      )
    })
  }

  return (
    <div className="App">
      <div className="LocalList">
        {locationList}
      </div>
      <LocalDataDisplay localName={localName} local={local}/>
    </div>
  );
}

export default App;
