import Header from './Components/Header/Header';
import DrawerManager from './Components/Common/Drawer/DrawerManager';
import Collections from './Pages/Collections/Collections';
import './App.scss';
import AppContext from './Helpers/Context/AppContext';

function App() {
    return (
        <AppContext>
            <DrawerManager />
            <Header />
            <Collections />
        </AppContext>
    );
}

export default App;
