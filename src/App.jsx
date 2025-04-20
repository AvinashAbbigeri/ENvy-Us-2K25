import { Fragment } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import Event from './pages/Event';
import Venue from './pages/Venue';
import Layout from './layout/Layout';
import Feedback from './components/Team/Feedback';

const App = () => {
  return (
    <Fragment>
      <Layout>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/events' element={<Events />} />
          <Route exact path='/events/:category/:id' element={<Event />} />
          <Route exact path='/venue' element={<Venue />} />
          <Route exact path='/feedback' element={<Feedback />} />
        </Routes>
      </Layout>
    </Fragment>
  );
}

export default App;