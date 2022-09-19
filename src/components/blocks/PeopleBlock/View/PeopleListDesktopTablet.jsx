import {useState , useMemo, useReducer, useEffect} from 'react';
import styled from 'styled-components';
import { PeopleListColumns} from './../Helpers';
import { usePeoplesContext ,actionTypes} from '../Providers';
import localization from './../../../../localization';
import PeopleRow from './PeopleRow';

const PeopleListDesktopTablet = () => {
    const [peopleState, { getPeoples, dispatch }] = usePeoplesContext();
    const { list } = localization.people;

   
    const PAGE_COUNT = 5 //This can be configurable
    const [filterBy,setFilterBy] = useState('');
    const [ page, setPage ] = useState(0); 
    
    const peoplesData = useMemo(() => { 
        const completeList = peopleState?.data?.peoples;
        if(filterBy)
        {
            const filteredByList = completeList?.filter(people => people.name.toLocaleLowerCase().includes(filterBy.toLocaleLowerCase()) || 
            people.hair_color.toLocaleLowerCase().includes(filterBy.toLocaleLowerCase()));

            console.log(filteredByList);

            if(filteredByList.length > PAGE_COUNT)
            {
                return filteredByList?.slice(page*PAGE_COUNT, (page*PAGE_COUNT)+PAGE_COUNT);
            }
            return filteredByList;
        }
        else 
            return completeList?.slice(page*PAGE_COUNT, (page*PAGE_COUNT)+PAGE_COUNT);
   },[peopleState?.data?.peoples,page,filterBy])

    const nextPage = () => {
        setPage(prev => prev+1);
    };

    const prevPage = () => {
        setPage(prev => prev > 0 ? prev-1 : prev);
    }

    const handleFilterBychange = (event) => {
        setFilterBy(event.target.value);
    }
    
    //PageSize COnfiguration
    //TODO:Show no record found
    return (
       <>
       <StyledHeader>
            <h2>{ list.headerText }</h2>
       </StyledHeader>
       <div>

        <StyledFilterBy>
            <label>
                Filter By
            </label>
            <input id="filterby" type="text" onChange={handleFilterBychange}></input>
        </StyledFilterBy>
    
        {

        peopleState.isLoading ? "Loading...":
        (
            <StyledTable id='peopleList'>
                    <StyleTableHead>
                        <tr>
                            {
                                PeopleListColumns.map(
                                    ({propName,columnName} , index) => (
                                        <th>
                                            {columnName}
                                        </th>
                                    )
                                )
                            }
                            </tr>
                    </StyleTableHead>
                    <StyleTableBody>
                        {
                            (
                                peoplesData?.map(
                                    (people,index) => people && (
                                        <PeopleRow index={index} people={people} ></PeopleRow>
                                    )
                                )
                            )
                        }      
                    </StyleTableBody>
            </StyledTable>  )

        } 
       </div>
       <br />
       <div>
        <button onClick={prevPage}>Prev</button>
        <button onClick={nextPage}>Next</button>
       </div>
       </>
    );

};

export default PeopleListDesktopTablet;

const StyledHeader= styled.div`
    vertical-align: middle;
`;

const StyledFilterBy= styled.div`
    vertical-align: middle;
`;

const StyledTable = styled.table`
    color: black;
    table-layout: auto;
    width: 100%;
`;


const StyleTableHead = styled.thead`
    color: black;
    font-size: 1rem;
    font-weight: bold;
    vertical-align: middle;
`;

const StyleTableBody = styled.tbody`
    color: black;
    font-size: 1rem;
    font-weight: regular;
    vertical-align: middle;
`;