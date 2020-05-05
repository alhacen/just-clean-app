import {useEffect} from 'react';
import ReactGA from 'react-ga';


export const useTracker = (history) => {

    useEffect(() => {
        const unlisten = history.listen(() => {
            ReactGA.pageview(window.location.pathname + window.location.search);
        });

        return () => {
            unlisten();
        }
    });

    return null;
};
