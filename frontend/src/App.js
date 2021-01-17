import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import MemberList from './components/MemberList'
import MemberCreate from './components/MemberCreate'
import MemberEdit from './components/MemberEdit'
import EventList from './components/EventList'
import EventCreate from './components/EventCreate'
import EventEdit from './components/EventEdit'

const App = () => {
    return (
        <Admin dataProvider={restProvider('http://localhost:3000')}>
            <Resource name='members' list={MemberList} create={MemberCreate} edit={MemberEdit}/>
            <Resource name='events' list={EventList} create={EventCreate} edit={EventEdit}/>
        </Admin>
    );
}

export default App;
