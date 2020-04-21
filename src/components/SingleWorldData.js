import React, {
    useEffect,
} from 'react';
import { useCountUp } from 'react-countup';
import { ScreenContext } from './App';

const container = {
    width: '50%',
    height: '33.33%',
}
const SingleWorldData = ({caption, figure}) => {
    const smallScreen = React.useContext(ScreenContext);
    const { countUp, start, pauseResume, reset, update } = useCountUp({
        end: figure,
        duration: 10,
        startOnMount: true,
      });

    useEffect(() => {
        update(figure);
    }, [figure])
    return (
        <>
            <div
            style={container}
            >
                <h3 
                style={{
                    textAlign: 'center',
                    // color: '#690000',
                    fontWeight: 'bolder',
                    fontSize: smallScreen ? '.9em' : null,
                }}
                >
                    {caption} : {countUp}
                </h3>
            </div>
        </>
    )
}

export default React.memo(SingleWorldData);
