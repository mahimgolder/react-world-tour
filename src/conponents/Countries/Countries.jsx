import { useEffect, useState } from 'react'
import Country from '../country/Country';
import './Countries.css'

const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    useEffect(() => {
      fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
    }, [])


    const handelVisitedCountry = eachCountryName => {
        console.log('add this to your visited country');
        const newVisitedCoutries =[...visitedCountries, eachCountryName] ;
        setVisitedCountries(newVisitedCoutries);
    }

    const handelVisitedFlags = flag => {
        const newVisitedFlags =[...visitedFlags, flag]
        setVisitedFlags(newVisitedFlags)
    }
    // remove items from an array in a state 
    // use filter to select all the elemenets excepts the one you went to remove
    return (
        <div>
            <h3>Countries: {countries.length}</h3>


            {/* visited Country */}
            <div>
                <h5>Visited Countries: {visitedCountries.length}</h5>

                 <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                 </ul>
            </div>
            <div className='flag-container'>
                {
                    visitedFlags.map((flag, index, array) => <img key={index} src={flag} ></img>)
                }
            </div>
            {/* display countries */}
            <div className='countries-container'>
                {
                    countries.map(eachCountryName => <Country
                        key={eachCountryName.ccn3}
                        handelVisitedCountry={handelVisitedCountry}
                        handelVisitedFlags = {handelVisitedFlags}
                        countryProps ={eachCountryName} ></Country>)
                }
            </div>
        </div>
    );

};


export default Countries;