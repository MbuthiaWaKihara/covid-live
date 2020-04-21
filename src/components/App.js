import React from 'react';
import {
    Container,
    Header,
    Content,
} from 'rsuite';
import Title from './Title';
import Home from './Home';
import Country from './Country';
import { Provider } from 'react-redux';
import store from '../redux/store';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'

const judgeScreenSize = (width, height) => {
    if(width > 910 && height > 700) return false;
    return true;
}

export const ScreenContext = React.createContext();
const App = () => {
    //state varables used to track responsiveness
    const [width, setWidth] = React.useState(window.innerWidth - 20);
    const [height, setHeight] = React.useState(window.innerHeight - 20);
    const [smallScreen, setSmallScreen] = React.useState(() => judgeScreenSize(width, height));

    const handleResize = () => {
        setWidth(window.innerWidth - 20);
        setHeight(window.innerHeight - 20);
    }

    React.useEffect(() => {
        window.addEventListener('resize', handleResize);
        return(() => {
            window.removeEventListener('resize', handleResize);
        })
    }, []);

    React.useEffect(() => {
        setSmallScreen(judgeScreenSize(width, height));
    }, [width, height])

    const container = {
        // border: '2px solid blue',
        height: '100%',
    }
    
    const header = {
        // border: '2px solid red',
        height: '15%'
    }
    
    const content = {
        // border: '2px solid green',
        height: '75%',
    }

    // console.log("small screen: ", smallScreen);
    return (
        <>
            <ScreenContext.Provider value={smallScreen}>
            <Router>
            <Provider store={store}>
            <Container
            style={container}
            >
            <Header
            style={header}
            >
                <Title />
            </Header>
            <Content
            style={content}
            >
                <Switch>
                    <Route path="/covid-live" exact render={(props) => <Home {...props}/>}/>
                    <Route path="/covid-live/:country" exact render={(props) => <Country {...props}/>}/>
                </Switch>
            </Content>
            </Container>
            </Provider>
            </Router>
            </ScreenContext.Provider>
        </>
    )
}

export default React.memo(App);
