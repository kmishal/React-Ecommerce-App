import Header from './Components/Header/Header';
import DrawerManager from './Components/Common/Drawer/DrawerManager';
import Collections from './Pages/Collections/Collections';
import './App.scss';
import AppContext from './Helpers/Context/AppContext';
import CollectionList from './Pages/CollectionsList/CollectionList';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';

function App() {
    return (
        <Router>
            <AppContext>
                <DrawerManager />
                <Header />
                <Routes>
                    <Route
                        exact
                        path="/collectionList"
                        element={<CollectionList />}
                    ></Route>
                    <Route
                        exact
                        path="/collection/:category"
                        element={<Collections />}
                    ></Route>
                    <Route
                        path="/"
                        element={<Navigate to="/collection/all" />}
                    ></Route>
                </Routes>
            </AppContext>
        </Router>
    );
}

export default App;
