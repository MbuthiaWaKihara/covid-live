import React from 'react';
import {
    Input,
    InputGroup,
    Icon,
    SelectPicker,
} from 'rsuite';
import WorldInfo from './WorldInfo';
import WorldScreen from './WorldScreen';
import SearchCountry from './SearchCountry';
import {
    fetchCountries,
} from '../redux';
import { connect } from 'react-redux';
import { ScreenContext } from './App';
import alphasort from 'alpha-sort';

const mapStateToProps = state => {
    return({
        countriesState: state.countries,
    });
}

const mapDispatchToProps = dispatch => {
    return({
        fetchCountries: () => dispatch(fetchCountries()),
    })
}


const Home = (props) => {
    //a ref variable to ensure we do not set interval multiple times
    const updateReference = React.useRef();

    const [showSearch, setShowSearch] = React.useState(false);

    React.useEffect(() => {
        props.fetchCountries();        
    }, []);

    React.useEffect(() => {
        // console.log("countries state: ", props.countriesState);
        if(!updateReference.current){
            updateReference.current = setInterval(() => {
                props.fetchCountries();
            }, 120000);
        }
        return(() => {
            if(updateReference.current) clearInterval(updateReference.current)
        });
    }, [props.countriesState]);

    const [currentCountry, setCurrentCountry] = React.useState(null);
    const [searchText, setSearchText] = React.useState(``);

    const searchForCountry = newSearchText => {
        if(!newSearchText) newSearchText = '';
        setCurrentCountry(null);
        setSearchText(newSearchText);
        props.countriesState.countriesData.forEach(
            (country, countryIndex) => {
                if(country.country === newSearchText){
                    setCurrentCountry(country);
                }
            }
        );
    }

    const countriesList = props.countriesState.countriesData.map(country => country.country);
    const sortedCountries = countriesList.sort(alphasort.ascending);
    const data = sortedCountries.map((country, index) => ({
        value: country,
        label: country,
    }));

    const smallScreen = React.useContext(ScreenContext);

    const wrapper = {
        width: '100%',
        height: '100%',
        display: smallScreen ? 'block' : 'flex',
        flexDirection: smallScreen ? null :'row',
    }

    const searchbar = {
        width: '100%',
        height: '8%',
        // border: '1px solid red',
    }

    const styles = {
        width: '100%',
     };

    const flags = {
        height: smallScreen ? '67%' : '70%',
        width: '100%',
        marginTop: smallScreen ? 15 : null,
    }

    const worldContainer = {
        height: '100%',
        width: '70%',
        // border: '1px solid red',
    }

    const worldData = {
        height: smallScreen ? '20%' : '30%',
        width: '100%',
        // border: '1px solid red',
    }

    const search = {
        // border: '2px solid blue',
        height: '100%',
        width: '30%',
    }

    return (
        <>
            <div style={wrapper}>
                {
                    smallScreen ?
                    <>
                    <div
                    style={searchbar}
                    >
                        <InputGroup inside style={styles}>
                        {/* <Input 
                        placeholder="Search by country name eg Kenya"
                        value={searchText}
                        onChange={value => searchForCountry(value)}
                        onFocus={() => setShowSearch(true)}
                        /> */}
                        <SelectPicker 
                        block 
                        data={data}
                        onFocus={() => setShowSearch(true)}
                        onChange={text => searchForCountry(text)}
                        />
                        <InputGroup.Button>
                            <Icon icon="search" />
                        </InputGroup.Button>
                        </InputGroup>
                    </div>
                    {
                        showSearch ? 
                        <>
                        <SearchCountry
                        countriesState={props.countriesState}
                        currentCountry={currentCountry}
                        setCurrentCountry={setCurrentCountry}
                        searchText={searchText}
                        setSearchText={setSearchText}
                        setShowSearch={setShowSearch}
                        />
                        </> : 
                        <>
                        <div
                        style={worldData}
                        >
                            <WorldInfo />
                        </div>
                        <div
                        style={flags}
                        >
                            <WorldScreen
                            countriesState={props.countriesState}
                            />
                        </div>
                        </>
                    }
                    </>:
                    <>
                        <div
                        style={worldContainer}
                        >
                            <div
                            style={worldData}
                            >
                                <WorldInfo />
                            </div>
                            <div
                            style={flags}
                            >
                                <WorldScreen
                                countriesState={props.countriesState}
                                />
                            </div>
                        </div>
                        <div
                        style={search}
                        >
                            <SearchCountry
                            countriesState={props.countriesState}
                            currentCountry={currentCountry}
                            setCurrentCountry={setCurrentCountry}
                            searchText={searchText}
                            setSearchText={setSearchText}
                            setShowSearch={setShowSearch}
                            />
                        </div>
                    </>
                }
            </div>
        </>
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(React.memo(Home));
