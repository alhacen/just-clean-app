import React, {Suspense, useEffect} from 'react';
import {connect} from 'react-redux';
import {Route, Switch, withRouter} from 'react-router-dom';

import LoadingScreen from 'screens/loading.screen';
import NotFoundScreen from 'screens/404.screen';
import AppHeader from 'components/appHeader';
import Screen from 'components/screen';
import Footer from 'components/footer';

import {COMMON_ROUTES} from 'constants/routes/main.routes.constant';
import {checkUserAction} from 'actions/auth.action';


const Main = ({checkUser}) => {
    useEffect(() => {
        checkUser();
    });

    return (
        <Suspense fallback={<LoadingScreen/>}>
            <AppHeader/>
            <main>
                <Switch>
                    {COMMON_ROUTES.map((route, index) => (
                        <Route
                            exact={route.exact === undefined ? true : route.exact}
                            path={route.path}
                            component={() => <Screen title={route.title} screen={route.screen}/>}
                            key={index.toString()}
                        />
                    ))}
                    <Route component={NotFoundScreen}/>
                </Switch>
            </main>
            <Footer/>
        </Suspense>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    checkUser: () => dispatch(checkUserAction())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withRouter(Main));
