import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ContactsTable from "./pages/ContactsTable";
import Solution from "./pages/Solution";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Homepage */}
          <Route path="/adminlead" element={<ContactsTable />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
