import React, { useEffect, useState } from 'react';

const Locations = () => {
    const [allLocations, setAllLocations] = useState([]);
    const [page, setPage] = useState(1)
    const [locationName, setLocationName] = useState('')
    const [isAllLocations, setIsAllLocations] = useState(true)
    const [pageCount, setPageCount] = useState(1)

    const changeCharacterName = (input) => {
        setIsAllLocations(false);
        setLocationName(input);
    }

    const handleClick = () => {
        setIsAllLocations(true)
        setLocationName('')
    }


    useEffect(() => {
        const fetchAllCharacters = async () => {
            try {
                const allLocationsUrl = `https://rickandmortyapi.com/api/location?page=${page}`;
                const specificLocation = `https://rickandmortyapi.com/api/location?page=${page}&name=${locationName}`
                const response = await fetch(isAllLocations ? allLocationsUrl : specificLocation);
                const data = await response.json();
                console.log(data.results);
                setAllLocations(data.results);
                setPageCount(data.info.pages);
            } catch (error) {
                console.error(error);
            }
        };

        fetchAllCharacters();
    }, [page, locationName, isAllLocations]);

    return (
        <div className='characters-div'>
            <div className='character-search-div' id='search-div'>
                <input 
                    type="text"
                    value={locationName} 
                    onChange={(e) => {
                                changeCharacterName(e.target.value);
                                setPage(1)
                            }  
                        }
                    placeholder='Location name'
                />
                <button type="button" className="btn btn-info" onClick={() => {handleClick(); setPage(1)}}>All Locations</button>            
            </div>
        <div className='row'>
            {allLocations ? allLocations.map((location, index) => (
                <div key={location.id} className="card col-sm-3" 
                    style=  {{ width: '18rem', 
                                marginLeft: 'auto', 
                                marginRight: 'auto', 
                                marginBottom: '20px', 
                                borderRadius: '15px',
                                padding: '20px',
                                boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1), 0 20px 30px rgba(0, 0, 0, 0.1), 0 30px 45px rgba(0, 0, 0, 0.1), 0 40px 60px rgba(0, 0, 0, 0.1)'
                            }}>
                    <div className="card-body">
                        <h4 className="card-title" style={{color: '#fff'}}> <span style={{color: '#138f3c'}}>Name:</span> {location.name}</h4>
                    </div>
                    <ul className="list-group list-group-flush" style={{backgroundColor: 'white', borderRadius: '15px'}}>
                        <li className="list-group-item">ID: {location.id}</li>
                        <li className="list-group-item">Type: {location.type}</li>
                        <li className="list-group-item">Dimension: {location.dimension}</li>
                    </ul>
                </div>
            )) : <div className='no-characters'>
                    No such location. Try 'Rick'.
                </div>}
        </div>
            <div className='pagination'>
                <button onClick={() =>page > 1 ? setPage(page -1 ) : alert('Cant go below page 1')}>Previous</button>
                <div>Page {page} of {pageCount}</div>
                <a href="#search-div">Back to Top</a>
                <button onClick={() =>page < pageCount ? setPage(page + 1) : alert('No more pages')}>Next</button>
            </div>
        </div>
    );
}

export default Locations