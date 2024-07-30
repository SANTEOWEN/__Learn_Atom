import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import { useState, Suspense } from 'react'
import { appRoute } from './components/route'

import './App.css'

function App() {
  const [userName, setUsername] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const location = useLocation();

  return (
    <SwitchTransition mode="out-in" component={null}>
      <CSSTransition timeout={300} classNames="fade" unmountOnExit key={location.pathname}>

        <Suspense fallback={() => <h1>LOADING....</h1>}>

          <Routes location={location}>
            {appRoute.map((route) => {
              if (route.requiredAuth && !isLogged) {
                return (
                  <Route key={route.path} exact path={route.path} element={<Navigate replace to={"/login"} />} />
                )
              } else {
                return (
                  <Route key={route.path} exact path={route.path} element={<route.component setIsLogged={setIsLogged} setUsername={setUsername} username={userName} />} />
                )
              }
            })}
          </Routes>


        </Suspense>

      </CSSTransition>
    </SwitchTransition>

  )
}

export default App
