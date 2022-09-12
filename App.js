import { Routes, Route } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetups";

function App() {
  return (
    <Layout>

      <Routes>
      <Route path='/' element={<AllMeetupsPage/>}/>
      <Route path='/new-meetups' element={<NewMeetupsPage/>}/>
      <Route path='/favorites' element={<FavoritesPage/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
