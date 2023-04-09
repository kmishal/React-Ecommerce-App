import Header from './Components/Header/Header';
import DrawerManager from './Components/Common/Drawer/DrawerManager';
import Collections from './Pages/Collections/Collections';
import './App.scss';
import AppContext from './Helpers/Context/AppContext';
import CollectionList from './Pages/CollectionsList/CollectionList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <AppContext>
                <DrawerManager />
                <Header />
                <Routes>
                    <Route exact path="/" element={<CollectionList />}></Route>
                    <Route
                        exact
                        path="/collection/:category"
                        element={<Collections />}
                    ></Route>
                </Routes>
            </AppContext>
        </Router>
    );
}

export default App;
