import { Route, Routes } from "react-router-dom";
import SharedLayout from "./componets/SharedLayout/SharedLayout";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import OurStore from "./pages/OurStore";
import Contact from "./pages/Contact";
import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { productsData } from "./features/cart/CartSlice";

function App() {
   const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productsData());
  }, [dispatch]); 

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<OurStore />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
