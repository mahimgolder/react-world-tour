
const CounttryData = ({countryProps, handelVisitedCountry, handelVisitedFlags}) => {
    return (
        <div>
            <p><small>Country Data: {countryProps.name.common}</small></p>
        </div>
    );
};

export default CounttryData;