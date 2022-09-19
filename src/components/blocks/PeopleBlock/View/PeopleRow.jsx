import {useState} from 'react';
import styled from 'styled-components';

import AppModal from '../../../controls/AppModal';
import { PeopleDetails } from './PeopleDetails';

const PeopleRow = ({index , people}) => {

    const [isModalOpen,setIsModalOpen] = useState(false);

    const openModel = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    }

return (
    <>
        <tr key={index}>
            <td>{people.name}</td>
            <td>{people.height}</td>
            <td>{people.mass}</td>
            <td>{people.hair_color}</td>
            <td>
                <div id={index}>
                    <button onClick={openModel}>
                        ViewDetails
                    </button>

                    <AppModal isOpen={isModalOpen}>
                        <div>
                            <PeopleDetails people={people} handleClose={closeModal} />
                        </div>
                    </AppModal>
                </div>
            </td>
        </tr>
    </>
);

}

export default PeopleRow;

 