import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import MemberList from './components/MemberList'
import MemberCreate from './components/MemberCreate'
import MemberEdit from './components/MemberEdit'

const App = () => {
    return (
        <Admin dataProvider={restProvider('http://localhost:3000')}>
            <Resource name='members' list={MemberList} create={MemberCreate} edit={MemberEdit}/>
        </Admin>
    );
}

export default App;
