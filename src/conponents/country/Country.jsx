import { useState } from 'react';
import './Country.css'
;import CountryDetail from '../CountryDetail/CountryDetail';
const Country = ({countryProps, handelVisitedCountry, handelVisitedFlags}) => {
    const {name, flag, flags, maps, timezones,cca3,ccn3, capital} = countryProps;

    const [Visited, setVisited] = useState(false);

    const handelVisited = () => {
        // setVisited(true)
        setVisited(!Visited)
    }

    const passWithParams = () => handelVisitedCountry(countryProps);


    return (
        // <div className={`border ${ Visited && 'Visited'}`}>
        <div className={`border ${ Visited? 'Visited': 'non-visited'}`}>
            <h2>Name: {name?.common}</h2>
            <h2 style={{color:Visited? 'black': 'white'}}>Offical Name:<br/> {name.official}</h2>
            <h2>T Zone:<br/> {timezones}</h2>
            <h2>Capital City: {capital}</h2>
            <h3>Flag: {flag}</h3>
            <img src={flags.png} alt="" />
            <a target='blank' href={maps.googleMaps}> <br/> Country Map link</a>
            <p>Code: {cca3}</p>
            <button onClick={passWithParams}>mark visited</button>
            <br />
            <button onClick={() => handelVisitedFlags(countryProps.flags.png)}>Add flag</button>
            <br />
            <button onClick={handelVisited}>{Visited ? 'Visited' : 'Going'}</button>
            
            {/* {Visited && 'I have visited this country'} */}
            {Visited? 'I have visited this country' : 'I went to visit' }
            <hr />
            <CountryDetail
                countryProps = {countryProps}
                handelVisitedCountry = {handelVisitedCountry}
                handelVisitedFlags = {handelVisitedFlags}
            ></CountryDetail>
        </div>
    );
};

export default Country;