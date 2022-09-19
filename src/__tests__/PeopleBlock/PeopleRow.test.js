import {render,act,screen,fireevent} from '@testing-library/react';
import PeopleRow from '../../components/blocks/PeopleBlock/View/PeopleRow';


const newPeople = {
    name: 'test123'
}

describe ( 'People Row', () => {
    it('renders people row component' , () => {
        let wrapperContainer;
        

            wrapperContainer = render(

                <PeopleRow index={1} people={newPeople} ></PeopleRow>
            );

            const { unmount} = wrapperContainer;
        // expect(
        //     wrapperContainer.querySelector('[data-testid="continueStopPayBtn"]')
        // ).toHaveTextContent('Continue');

        unmount();
    });
});

