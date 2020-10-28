import React from 'react';
import {
    Input,
    InputGroup,
    Icon,
    Button,
    SelectPicker,
} from 'rsuite';
import axios from 'axios';
import { ScreenContext } from './App';
import alphasort from 'alpha-sort';

const SearchCountry = ({countriesState, currentCountry, setCurrentCountry, searchText, setSearchText, setShowSearch, countries}) => {

    const smallScreen = React.useContext(ScreenContext);
    const countriesList = countriesState.countriesData.map(country => country.country);
    const sortedCountries = countriesList.sort(alphasort.ascending);
    const data = sortedCountries.map((country, index) => ({
        value: country,
        label: country,
    }));

    const searchForCountry = newSearchText => {
        if(!newSearchText) newSearchText = '';
        setCurrentCountry(null);
        setSearchText(newSearchText);
        countriesState.countriesData.forEach(
            (country, countryIndex) => {
                if(country.country === newSearchText.trim()){
                    setCurrentCountry(country);
                }
            }
        );
    }

    const showThisCountry = async () => {
        try {
            const response = await axios.get('https://ipapi.co/json/');
            let countryName = response.data.country_name;
            let countryCode = response.data.country_code;
            let countryCode3 = response.data.country_code_iso3
            countriesState.countriesData.forEach(
                (country, countryIndex) => {
                    if(
                        country.country === countryName
                        || country.countryInfo.iso2 === countryCode
                        || country.countryInfo.iso3 === countryCode3
                    ){
                        setCurrentCountry(country);
                        setSearchText(`${country.country}`)
                    }
                }
            );
        } catch (error) {
            console.log(error);
        }
    }

    const container = {
        // border: '2px solid black',
        width: '100%',
        height: '100%',
    };
    
    const searchbar = {
        width: '100%',
        height: '10%',
    }
    
    const result = {
        width: '100%',
        height: '90%',
    }
    
    const styles = {
        width: '100%',
        marginBottom: 10
     };

     const text = {
         fontSize: smallScreen ? '1.5em' : null,
     }

    return (
        <>
            <div
            style={container}
            >
                <div
                style={searchbar}
                >
                    {
                        smallScreen ? 
                        <>
                        <div style={{width: '10%', height: '100%', margin: 'auto',}} onClick={() => setShowSearch(false)}>
                        <Icon icon="close"
                        size="2x"
                        />
                        </div>
                        </>
                        :
                        <>
                        <InputGroup inside style={styles}>
                        {/* <Input 
                        placeholder="Search by country name eg Kenya"
                        value={searchText}
                        onChange={value => searchForCountry(value)}
                        /> */}
                        <SelectPicker 
                        block 
                        data={data}
                        onChange={text => searchForCountry(text)}
                        />
                        <InputGroup.Button>
                            <Icon icon="search" />
                        </InputGroup.Button>
                        </InputGroup>
                        </>
                    }
                </div>
                <div
                style={result}
                >
                {
                    currentCountry ? 
                    <>
                    <img 
                    src={currentCountry.countryInfo.flag}
                    style={{width: '100%', height: '40%', marginBottom: '3px'}}
                    alt={`${currentCountry.country}'s flag`}
                    />
                    <h3>{currentCountry.country}</h3>
                    <h3 style={text}>Total Cases: {currentCountry.cases}</h3>
                    <h3 style={text}>Cases Today: {currentCountry.todayCases}</h3>
                    <h3 style={text}>Total Deaths: {currentCountry.deaths}</h3>
                    <h3 style={text}>Deaths Today: {currentCountry.todayDeaths}</h3>
                    <h3 style={text}>Active: {currentCountry.active}</h3>
                    <h3 style={text}>Recovered: {currentCountry.recovered}</h3>
                    </> :
                    <>
                    <Button appearance="subtle" style={{width: '100%'}} onClick={showThisCountry}>Show This Country</Button>
                    <h2 style={text}>No country selected</h2>
                    <p>Countries are ordered alphabetically</p>
                    <p>Search for a country inside our menu</p>
                    </>
                }
                </div>
            </div> 
        </>
    )
}

export default React.memo(SearchCountry);
