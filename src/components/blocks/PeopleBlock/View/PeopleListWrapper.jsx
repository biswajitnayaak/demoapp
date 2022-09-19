import { useEffect } from 'react';
import styled from 'styled-components';
import PeopleListDesktopTablet from './PeopleListDesktopTablet';
import PeopleListDesktopMobile from './PeopleListDesktopMobile';
import localization from './../../../../localization';

import { usePeoplesContext ,actionTypes} from '../Providers';
import useCurrentWidth from './../../../../hooks/useCurrentWidth';

const PeopleListWrapper = () => {

    const { DESKTOP_VIEW, TABLET_VIEW, scale } = useCurrentWidth();
    const isDesktopTablet = DESKTOP_VIEW || (TABLET_VIEW && scale <= 1.2);

    const { list } = localization.people;
    const [peopleState, { getPeoples, dispatch }] = usePeoplesContext();

    useEffect( () => {
        if(peopleState.data.peoples === null){
            dispatch({
                type: actionTypes.RELOAD_LIST
            });
            console.log('PeopleListWrapper');
            getPeoples();
        }

    },[]);

    return (

        <div>

            {peopleState.isApiError && (
                <StyledError> {list.retrievalError }</StyledError>
            ) }

           {
            isDesktopTablet? (
                <PeopleListDesktopTablet>
                </PeopleListDesktopTablet>
            )
            :(
                <PeopleListDesktopMobile>
                </PeopleListDesktopMobile>
            )
           }
        </div>
    );
};

export default PeopleListWrapper;

const StyledError = styled.div`
color:red;
`;
