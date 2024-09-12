import { Route, Routes } from "react-router-dom"
import { HomePage } from "./Screens/HomePage"
import Layout from "./Components/Layout"
import MacBookScreen from "./Screens/MacBookScreen"



function App() {

  return (

    <div>

      <Routes >

        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />


        <Route
          path="/mac-book"
          element={
            <Layout>
              <MacBookScreen />
            </Layout>
          }
        />


        <Route
          path="/ashish"
          element={
            <Layout>
              <p>Ashish</p>
            </Layout>
          }
        />


      </Routes>


    </div>
  )
}

export default App
