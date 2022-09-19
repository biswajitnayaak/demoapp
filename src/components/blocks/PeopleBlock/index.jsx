import { PeoplesDataProvider,usePeoples,usePeoplesContext } from './Providers';
import PeopleListWrapper from './View/PeopleListWrapper';

const PeopleBlock = () => {
    const [peopleState, { getPeoples, dispatch }] = usePeoplesContext();

    return (
        <div>
            <PeopleListWrapper />
        </div>
    );
};

export default PeopleBlock;