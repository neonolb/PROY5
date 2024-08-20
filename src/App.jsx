import React, {useEffect,useState} from 'react'


const App = () => {
    const [countries, setCountries] =useState ([]);
    const [continents, setContinents] =useState({});
    const [SelectedContinent , setSelectedContinent] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedCountryTimezone, setSelectedCountryTimezone] =useState ('');



useEffect (() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data =>  {
        setCountries(data);
        groupByContinents(data);
   });
    }, []);

const groupByContinents =(countries) => {
    const grouped = countries.reduce((acc, country) => {
        const continent = country.region;
        if (!acc[continent]) acc[continent] = [];
            acc[continent].push(country);
            return acc;
            }, {});
            setContinents(grouped);
     };

const handleContinentClick = (continent) => {
    setSelectedContinent(continent);
    setSelectedCountry(null);
};

const handleCountryClick =(country) => {
    setSelectedCountry(country);
    setSelectedCountryTimezone(country.timezone[0]);
};




  return (
    <>
    <div>Api Paises</div>

    <div>
        <div>
            {Object.keys(continents).map(continent => (
                    <button key={continent} onClick={() => handleContinentClick(continent)}
                    className='btn btn-success'>
                    {continent}
                    </button>
                ))}     
    </div>
    {SelectedContinent && (            
    <div>
        <h2>{SelectedContinent}</h2>
        <ul className='list-group'>
            {continents[SelectedContinent].map(country => (
                <li key={country.cca3} className='list-group-item'>
                <button onClick={() => handleCountryClick(country)} className='btn btn-primary'>
                    {country.name.common}
                    </button>
                </li>
            ))}
            </ul>
    </div>
    )}
    {selectedCountry && (
        <div>
        <h2>{selectedCountry.name.common}</h2>
        <p>Capital: {selectedCountry.capital[0]}</p>
        <p>Population: {selectedCountry.population.toLocaleString}</p>
        <p>Region: {selectedCountry.region}</p>
        <p>Zona Horaria: {selectedCountryTimezone}</p>
        <p>Bandera: <img src={selectedCountry.flags.png} alt={'Bandera de ${selectedCountry.name.common}'}

        width={100} height={60}/></p>
        </div>
    )}
       </div>
</>

);
}

export default App