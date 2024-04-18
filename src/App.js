import Layout from "./components/Layouts/Layout";
import { Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/register' element={<Registration />} />

        </Routes>
      </Layout>
    </>

  );
}

export default App;
