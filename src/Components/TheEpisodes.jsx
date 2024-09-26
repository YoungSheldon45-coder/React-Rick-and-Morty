import React, { useEffect, useState } from 'react';

const Episodes = () => {
  const [allEpisodes, setAllEpisodes] = useState([]);
    const [page, setPage] = useState(1)
    const [episodeName, setEpisodeName] = useState('')
    const [isAllEpisodes, setIsAllEpisodes] = useState(true)
    const [pageCount, setPageCount] = useState(1)

    const changeEpisodeName = (input) => {
        setIsAllEpisodes(false);
        setEpisodeName(input);
    }

    const handleClick = () => {
        setIsAllEpisodes(true)
        setEpisodeName('')
    }


    useEffect(() => {
        const fetchAllCharacters = async () => {
            try {
                const allEpisodesUrl = `https://rickandmortyapi.com/api/episode?page=${page}`;
                const specificEpisode = `https://rickandmortyapi.com/api/episode?page=${page}&name=${episodeName}`
                const response = await fetch(isAllEpisodes ? allEpisodesUrl : specificEpisode);
                const data = await response.json();
                console.log(data.results);
                setAllEpisodes(data.results);
                setPageCount(data.info.pages);
            } catch (error) {
                console.error(error);
            }
        };

        fetchAllCharacters();
    }, [page, episodeName, isAllEpisodes]);

    return (
        <div className='characters-div'>
            <div className='character-search-div' id='search-div'>
                <input 
                    type="text"
                    value={episodeName} 
                    onChange={(e) => {
                                changeEpisodeName(e.target.value);
                                setPage(1)
                            }  
                        }
                    placeholder='Episode name'
                />
                <button type="button" className="btn btn-info" onClick={() => {handleClick(); setPage(1)}}>All Episodes</button>            
            </div>
        <div className='row'>
            {allEpisodes ? allEpisodes.map((location, index) => (
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
                        <li className="list-group-item">Air date: {location.air_date}</li>
                        <li className="list-group-item">Episode: {location.episode}</li>
                    </ul>
                </div>
            )) : <div className='no-characters'>
                    No such Episode. Try 'Pilot'.
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

export default Episodes