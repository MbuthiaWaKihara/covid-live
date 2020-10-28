import React, {
    useEffect,
    useRef,
} from 'react';
import {
    Button,
    Loader,
} from 'rsuite';
import {
    Link,
} from 'react-router-dom';
import {
    connect
} from 'react-redux';
import {
    fetchCountry
} from '../redux';
import SingleData from './CountryData';
import { ScreenContext } from './App';

const mapStateToProps = state => {
    return({
        countryState: state.country,
    });
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return({
        fetchCountry: () => dispatch(fetchCountry(ownProps.match.params.country)),
    });
};

const Country = ({match, countryState, fetchCountry}) => {
    const smallScreen = React.useContext(ScreenContext);

    //a ref variable to ensure we do not set interval multiple times
    const updateReference = useRef();

    useEffect(() => {
        fetchCountry();
    }, []);

    useEffect(() => {
        // console.log("country state: ", countryState);
        if(!updateReference.current){
            updateReference.current = setInterval(() => {
                fetchCountry();
            }, 120000);
        }
        
        return(() => {
            if(updateReference.current) clearInterval(updateReference.current)
        });
    }, [countryState]);

    const container = {
        width: '100%',
        height: '100%',
    }
    
    const title = {
        display: 'flex',
        flexDirection: 'row',
        height: '30%',
    }
    
    const body = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        height: '55%',
        marginTop: '10px',
        marginBottom: '5px',
    }
    
    const titleContent = {
        textAlign: 'center',
        width: '100%',
        height: '25%',
        fontSize: smallScreen ? '1em' : null,
    }
    
    return (
        <>
            <div
            style={container}
            >
                {
                    countryState.isLoading ? 
                    <>
                    <div style={{width: '100%', height: '100%'}}>
                    <Loader backdrop size="lg" center/>
                    </div>
                    </> :
                    countryState.error !== `` ?
                    countryState.error :
                    <>
                        <div
                        style={title}
                        >
                        {
                            countryState.countryData.country && 
                            <>
                            <img 
                            src={countryState.countryData.countryInfo.flag}
                            alt={`${countryState.countryData.country}'s flag`} 
                            style={{
                                width: smallScreen ? '60%' : '30%',
                                height: '100%',
                            }}
                            />
                            <div
                            style={{
                                width: smallScreen ? '40%' : '70%',
                                height: '100%',
                            }}
                            >
                                <h3 style={titleContent}>{countryState.countryData.country}</h3>
                                <h3 style={titleContent}>ISO 3: {countryState.countryData.countryInfo.iso3}</h3>
                                <h3 style={titleContent}>Latitude: {countryState.countryData.countryInfo.lat}</h3>
                                <h3 style={titleContent}>Longitude: {countryState.countryData.countryInfo.long}</h3>
                            </div>
                            </>
                        }
                        </div>
                        <hr />
                        <div
                        style={body}
                        >
                        
                        <SingleData 
                        caption="Total Cases"
                        figure={countryState.countryData.cases}
                        />
                        <SingleData 
                        caption="Cases Today"
                        figure={countryState.countryData.todayCases}
                        />
                        <SingleData 
                        caption="Total Deaths"
                        figure={countryState.countryData.deaths}
                        />
                        <SingleData 
                        caption="Deaths Today"
                        figure={countryState.countryData.todayDeaths}
                        />
                        <SingleData 
                        caption="Active"
                        figure={countryState.countryData.active}
                        />
                        <SingleData 
                        caption="Recovered"
                        figure={countryState.countryData.recovered}
                        />
                        <SingleData 
                        caption={smallScreen ? "CPM" : "Cases Per One Million"}
                        figure={countryState.countryData.casesPerOneMillion}
                        />
                        <SingleData 
                        caption={smallScreen ? "DPM" : "Deaths Per One Million"}
                        figure={countryState.countryData.deathsPerOneMillion}
                        />
                        <SingleData 
                        caption="Total Tests"
                        figure={countryState.countryData.tests}
                        />
                        </div>
                    </>
                }
                <Link 
                to="/"
                style={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                }}
                >
                <Button
                style={{
                    width: '100%',
                    borderRadius: 0,
                }}
                appearance="primary"
                >
                    Go Back Home
                </Button>
                </Link>
            </div>
        </>
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(React.memo(Country));
