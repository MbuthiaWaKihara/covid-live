import React from 'react';
import World from '../images/world.gif';
import {ScreenContext} from './App';

const Title = () => {
    const smallScreen = React.useContext(ScreenContext);
    return (
        <>
            <div
            style={{
                width: '100%',
                height: '100%',
            }}
            >
                <div style={{
                    height: '100%',
                    width: smallScreen ? '50%' : '35%',
                    margin: 'auto',
                    display: 'flex',
                    flexDirection: 'row',
                }}>
                <img
                src={World} alt="world"
                style={{
                    marginRight: '10px',
                    height: smallScreen ? '50%' : '60%',
                    marginTop: smallScreen ? '8%' : null,
                }}
                />
                <h1
                style={{
                    color: '#690000',
                    fontWeight: 'bolder',
                    fontSize: smallScreen ? '1.3em' : null,
                    marginTop: smallScreen ? '3%' : null,
                }}
                >COVID LIVE</h1>
                </div>
            </div>
        </>
    )
}

export default React.memo(Title);
