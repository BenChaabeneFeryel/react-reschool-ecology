import React, { Component, Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'
import DefaultLayout from './layout/DefaultLayout'
import Login from './components/Login'
import Page404 from './views/pages/page404/Page404'
import Page500 from './views/pages/page500/Page500'

const loading = (
  <div className="pt-3 text-center">
    <center>
      <div className="sk-spinner sk-spinner-pulse"></div>
    </center>
  </div>
)

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/login" name="Login" element={<Login />} />
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<Page500 />} />
            <Route path="*" name="Accueil" element={<DefaultLayout />} />
          </Routes>
        </Suspense>
      </HashRouter>
    )
  }
}

export default App
