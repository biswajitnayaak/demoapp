
import React , {useState} from 'react';
import { uniqueId, kebabCase } from 'lodash';
import styled from 'styled-components';
import localization from './../../../../localization';
export const PeopleDetails = ({people,handleClose}) => {
    const {detail} = localization.people;
    const [uuid, setuuid] = useState(null);

    const fields = [
        {
            label: "Name",
            value: people.name,
        },
        {
            label:"height",
            value: people.height,
        },
        {
            label: "mass",
            value: people.mass,
        },
        {
            label:"haircolor",
            value: people.hair_color,
        },
        {
            label: "skincolor",
            value: people.skin_color,
        },
        {
            label: "eyecolor",
            value: people.eye_color,
        },
        {
            label: "birthYear",
            value: people.birth_year,
        },
        {
            label: "gender",
            value: people.gender,
        }
    ];

    const mappedRows = fields?.map(
        (fieldRow, index) =>
            fieldRow.value && (
                
                <React.Fragment key={`${uuid}_${index}`}>
                    <dt data-testid={`${fieldRow.label}-label`}>
                        {fieldRow.label}
                    </dt>
                    <dd data-testid={`${fieldRow.label}-value`}>
                        {fieldRow.value}
                    </dd>
                </React.Fragment>
            )
    );


    return (

        <>
            <StyledWrapper>
                <Styleddl>
                    {mappedRows}
                </Styleddl>
                <StyledCloseButton onClick={handleClose}>
                    {detail.closeButtonText}
                </StyledCloseButton>
            </StyledWrapper>
        </>
    );

};
const StyledCloseButton = styled.button`
    width: 10rem;
    margin-left: 30rem;
`;

const Styleddl = styled.dl`
    display: flex;
    flex-flow: row wrap;
    margin-top: 0;
    > dt {
        font-size: 20px;
        font-weight: bold;
        flex: 3 1 40%;
        margin-bottom: 0.95rem;
    }
    > dd {
        font-size: 20px;
        flex: 1 1 40%;
        margin-left: 0;
        margin-bottom: 0.95rem;
        text-align: right;
        word-break: break-word;
    }
`;

const StyledWrapper = styled.div`
    border:1px solid black;
    padding: 1.5rem;
    border-radius: 0.3125rem;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    div {
        color: black;
    }
`;