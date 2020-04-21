import React, {
    useEffect,
    useRef,
} from 'react';
import { connect } from 'react-redux';
import {
    fetchWorlddata,
} from '../redux';
import SingleData from './SingleWorldData';
import {
Loader,
} from 'rsuite';

const container = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
}

const mapStateToProps = state => {
    return({
        worldState: state.world,
    });
}

const mapDispatchToProps = dispatch => {
    return({
        fetchWorlddata: () => dispatch(fetchWorlddata()),
    })
}

const WorldInfo = (props) => {
    //a ref variable to ensure we do not set interval multiple times
    const updateReference = useRef();

    useEffect(() => {
        props.fetchWorlddata();
    }, []);

    useEffect(() => {
        // console.log("world state: ", props.worldState);
        if(!updateReference.current){
            updateReference.current = setInterval(() => {
                props.fetchWorlddata();
            }, 120000);
        }
        
        return(() => {
            if(updateReference.current) clearInterval(updateReference.current)
        });
    }, [props.worldState]);

    return (
        <>
            <div
            style={container}
            >   
                {
                    props.worldState.isLoading ? 
                    <>
                        <div style={{width: '100%', height: '100%'}}>
                        <Loader backdrop size="lg" center/>
                        </div>
                    </>:
                    props.worldState.error !== `` ?
                    props.worldState.error :
                    <>
                    <SingleData 
                    caption="Total Cases"
                    figure={props.worldState.worldData.cases}
                    />
                    <SingleData 
                    caption="Cases Today"
                    figure={props.worldState.worldData.todayCases}
                    />
                    <SingleData
                    caption="Total Deaths" 
                    figure={props.worldState.worldData.deaths}
                    />
                    <SingleData 
                    caption="Deaths Today"
                    figure={props.worldState.worldData.todayDeaths}
                    />
                    <SingleData 
                    caption="Active"
                    figure={props.worldState.worldData.active}
                    />
                    <SingleData 
                    figure={props.worldState.worldData.recovered}
                    caption="Recovered"
                    /> 
                    </>
                    
                }
            </div> 
        </>
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(React.memo(WorldInfo));
