import React, {
    useEffect,
} from 'react';
import { useCountUp } from 'react-countup';
import { ScreenContext } from './App';


const CountryData = ({caption, figure}) => {
    const smallScreen = React.useContext(ScreenContext);
    const { countUp, start, pauseResume, reset, update } = useCountUp({
        end: figure,
        duration: 5,
        startOnMount: true,
      });

    useEffect(() => {
        update(figure);
    }, [figure]);

    const container = {
        width: '33.33%',
        height: '33.33%',
        overflow: 'auto',
    }

    return (
        <>
            <div
            style={container}
            >
                <h3 
                style={{
                    fontWeight: 'bolder',
                    fontSize: smallScreen ? '1em' : null,
                }}
                >
                    {caption } : {smallScreen && <br/>} {countUp}
                </h3>
            </div>
        </>
    )
}

export default React.memo(CountryData);
