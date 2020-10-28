import React from 'react';
import {
    Tooltip,
    Whisper,
    Loader,
} from 'rsuite';
import {
    Link
} from 'react-router-dom';
import { ScreenContext } from './App';



const tipMessage = country => {
    return(
        <Tooltip>
            {country}
        </Tooltip>
    )
}
const WorldScreen = (props) => {

    const smallScreen = React.useContext(ScreenContext);

    const container = {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        overflow: 'auto',
    }
    
    const flagStyle = {
        width: smallScreen ? '25%' : '20%',
        heigth: smallScreen ? '25%' : '20%',
    }

    //we always prepare the countries flags url
    let flagsUrls = null;
    if(props.countriesState.countriesData.length > 0){
        flagsUrls = props.countriesState.countriesData.map(country => country.countryInfo.flag);
    }

    let displayFlags = null;
    if(flagsUrls && flagsUrls.length > 0){
        displayFlags = flagsUrls.map(
            (flag, flagIndex) => {
                return(
                    <React.Fragment key={flagIndex}>
                        
                        <Whisper
                        placement="top" trigger="hover" speaker={tipMessage(props.countriesState.countriesData[flagIndex].country)}
                        >
                        <div style={flagStyle}>
                        <Link to={`/${props.countriesState.countriesData[flagIndex].country}`}>
                        <img src={flag} alt={`${props.countriesState.countriesData[flagIndex].country}'s flag`} style={{width: '90%', height: '90%', margin: 'auto'}}/>
                        </Link>
                        </div>
                        </Whisper>
                        
                    </React.Fragment>
                );
            }
        )
    }
    return (
        <>
            <div
            style={container}
            >
                {
                    props.countriesState.isLoading ? 
                    <>
                    <div style={{width: '100%', height: '100%'}}>
                    <Loader backdrop size="lg" center/>
                    </div>
                    </> :
                    props.countriesState.error !== `` ?
                    props.countriesState.error :
                    displayFlags
                }
            </div>
        </>
    )
}

export default React.memo(WorldScreen);
