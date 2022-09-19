import { useState, useLayoutEffect } from 'react';
 

//Break Points
const TABLET_MIN_WIDTH = 768;
const TABLET_MAX_WIDTH = 1024;


const useCurrentWidth = () => {
    // save current window width in the state object
    const [width, setWidth] = useState(window.innerWidth);
    const [MOBILE_VIEW, setMOBILE_VIEW] = useState(false);
    const [TABLET_VIEW, setTABLET_VIEW] = useState(false);
    const [DESKTOP_VIEW, setDESKTOP_VIEW] = useState(false);
    const [VIEW_PORT_CHANGE, setVIEW_PORT_CHANGE] = useState('');

    const rootSize = parseInt(
        window.getComputedStyle(document.body).getPropertyValue('font-size')
    );
    const scale = rootSize ? rootSize / 14 : 1;

    useLayoutEffect(() => {
        window.addEventListener('resize', () => setWidth(window.innerWidth));
        setWidth(window.innerWidth);
        return () =>
            window.removeEventListener('resize', () =>
                setWidth(window.innerWidth)
            );
        // eslint-disable-next-line
    }, []);

    useLayoutEffect(() => {
        setMOBILE_VIEW(width < TABLET_MIN_WIDTH);
        setTABLET_VIEW(width >= TABLET_MIN_WIDTH && width <= TABLET_MAX_WIDTH);
        setDESKTOP_VIEW(width > TABLET_MAX_WIDTH);
        setVIEW_PORT_CHANGE(
            (width < TABLET_MIN_WIDTH && 'MOBILE_MODE') ||
                (width > TABLET_MAX_WIDTH && 'DESKTOP_MODE') ||
                'TABLET_MODE'
        );
    }, [width]);

    return {
        MOBILE_VIEW,
        TABLET_VIEW,
        DESKTOP_VIEW,
        VIEW_PORT_CHANGE,
        scale,
        width,
        rootSize
    };
};

export default useCurrentWidth;
