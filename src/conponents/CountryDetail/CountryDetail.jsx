import CounttryData from "../CountryData/CounttryData";

const CountryDetail = (props) => {
    return (
        <div>
            <h4>Country DEtails</h4>
            <hr />
            {/* <CounttryData
                countryProps={countryProps}
                handelVisitedCountry={handelVisitedCountry}
                handelVisitedFlags={handelVisitedFlags}
            ></CounttryData> */}
            <CounttryData {...props}></CounttryData>
        </div>
    );
};

export default CountryDetail;