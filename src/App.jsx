import React, { Suspense, lazy } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'

const Header = lazy(() => import('./components/Header/Header'));
const Footer = lazy(() => import('./components/Footer/Footer'));
const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./components/NotFound/NotFound'));
import Loader from './components/Loader/Loader'

function App() {

  return (
 <Suspense fallback={<Loader />}>
   <BrowserRouter>
   <Header />
  <Routes>
    <Route path='/' exact element={<Home />}/>
    <Route path='*' exact element={<NotFound />}/>
  </Routes>
  <Footer />
  </BrowserRouter>
 </Suspense>
  )
}

export default App
