import { Routes, Route } from "react-router-dom";

import RootLayout from "./_root/RootLayout";
import Home from "@/_root/pages/Home";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
