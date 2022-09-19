
import {useRoutes} from 'react-router-dom';
import PeopleBlock from '../../components/blocks/PeopleBlock';
// import {APPLICATION_ROUTES} from '../../routing/routes';
import { PeoplesDataProvider,usePeoples } from '../../components/blocks/PeopleBlock/Providers';



export const AppRoutes = () => {

    const peoplesState = usePeoples();

    const routes = useRoutes(
        [
          {path:'/people',element: 
          (
            <PeoplesDataProvider state={peoplesState}>
            < PeopleBlock />
            </PeoplesDataProvider>
          )
        },
        ]
      )
      return routes;
}