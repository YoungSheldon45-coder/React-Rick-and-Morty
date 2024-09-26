import React, { useEffect, useState } from 'react';

const Characters = () => {
    const [allCharacters, setAllCharacters] = useState([]);
    const [page, setPage] = useState(1)
    const [characterName, setCharacterName] = useState('')
    const [isAllCharacters, setIsAllCharacters] = useState(true);
    const [isAlive, setIsAlive] = useState(false);
    const [isDead, setIsDead] = useState(false)
    const [isUnknown, setIsUnknown] = useState(false)
    const [pageCount, setPageCount] = useState(1)

    const changeCharacterName = (input) => {
        setIsAllCharacters(false);
        setCharacterName(input);
    }

    const handleClick = () => {
        setIsAllCharacters(true)
        setCharacterName('')
    }


    useEffect(() => {
        const fetchAllCharacters = async () => {
            try {
                const allCharactersUrl = `https://rickandmortyapi.com/api/character/?page=${page}${isAlive ? '&status=alive' : ''}${isDead ? '&status=dead' : ''}${isUnknown ? '&status=unknown' : ''}`;
                console.log(isAlive)
                const specificCharacter = `https://rickandmortyapi.com/api/character/?page=${page}&name=${characterName}${isAlive ? '&status=alive' : ''}${isDead ? '&status=dead' : ''}${isUnknown ? '&status=unknown' : ''}`
                const response = await fetch(isAllCharacters ? allCharactersUrl : specificCharacter);
                const data = await response.json();
                console.log(data.results);
                setAllCharacters(data.results);
                setPageCount(data.info.pages);
            } catch (error) {
                console.error(error);
            }
        };

        fetchAllCharacters();
    }, [page, characterName, isAllCharacters, isAlive, isDead, isUnknown]);

    return (
        <div className='characters-div'>
            <div className='character-search-div' id='search-div'>
                <input 
                    type="text"
                    value={characterName} 
                    onChange={(e) => {
                                changeCharacterName(e.target.value);
                                setPage(1)
                            }  
                        }
                    placeholder='Character name'
                />
                <button type="button" className="btn btn-info" onClick={() => {handleClick(); setPage(1)}}>All characters</button>

                <div className="form-check form-switch" style={{ width: 'fit-content', display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
    <input
        className="form-check-input"
        onChange={(e) => {
            setIsAlive(e.target.checked);
            setIsDead(false);
            setIsUnknown(false);
            setPage(1)
        }}
        checked={isAlive}
        type="checkbox"
        id="flexSwitchCheckAlive"
        style={{ width: '40px', height: '10px', marginRight: '8px' }}
    />
    <label className="form-check-label" htmlFor="flexSwitchCheckAlive" style={{ marginRight: '10px', color: 'white' }}>Alive</label>
</div>

<div className="form-check form-switch">
    <input
        className="form-check-input"
        onChange={(e) => {
            setIsDead(e.target.checked);
            setIsAlive(false);
            setIsUnknown(false);
            setPage(1)
        }}
        checked={isDead}
        type="checkbox"
        id="flexSwitchCheckDead"
        style={{ width: '40px', height: '10px', marginRight: '8px' }}
    />
    <label className="form-check-label" htmlFor="flexSwitchCheckDead" style={{ marginRight: '10px', color: 'white' }}>Dead</label>
</div>

<div className="form-check form-switch">
    <input
        className="form-check-input"
        onChange={(e) => {
            setIsUnknown(e.target.checked);
            setIsAlive(false);
            setIsDead(false);
            setPage(1)
        }}
        checked={isUnknown}
        type="checkbox"
        id="flexSwitchCheckUnknown"
        style={{ width: '40px', height: '10px', marginRight: '8px' }}
    />
    <label className="form-check-label" htmlFor="flexSwitchCheckUnknown" style={{ marginRight: '10px', color: 'white' }}>Unknown</label>
</div>



                              
            </div>
        <div className='row'>
            {allCharacters ? allCharacters.map((character, index) => (
                <div key={character.id} className="card col-sm-3" 
                    style=  {{ width: '18rem', 
                                marginLeft: 'auto', 
                                marginRight: 'auto', 
                                marginBottom: '20px', 
                                borderRadius: '15px',
                                padding: '20px',
                                boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1), 0 20px 30px rgba(0, 0, 0, 0.1), 0 30px 45px rgba(0, 0, 0, 0.1), 0 40px 60px rgba(0, 0, 0, 0.1)'
                            }}>
                    <img src={character.image} className="card-img-top" alt={character.name} style={{borderRadius: '15px', boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1), 0 20px 30px rgba(0, 0, 0, 0.1), 0 30px 45px rgba(0, 0, 0, 0.1), 0 40px 60px rgba(0, 0, 0, 0.1)'}}/>
                    <div className="card-body">
                        <h5 className="card-title" style={{color: '#fff'}}>{character.name}</h5>
                        <p className="card-text" style={{color: '#fff'}}>
                            Species: {character.species} | Status: {character.status}
                        </p>
                    </div>
                    <ul className="list-group list-group-flush" style={{backgroundColor: 'white', borderRadius: '15px'}}>
                        <li className="list-group-item">Gender: {character.gender}</li>
                        <li className="list-group-item">Origin: {character.origin.name}</li>
                        <li className="list-group-item">Location: {character.location.name}</li>
                    </ul>
                </div>
            )) : <div className='no-characters'>
                    No such character. Try 'Rick'.
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
};

export default Characters;

