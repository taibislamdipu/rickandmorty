import { RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "./routes/routes";
import ScrollToTop from "react-scroll-to-top";
import { useEffect, useState } from "react";
import preLoader from "./assets/loading.gif";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Simulating a 3s loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="App">
      {isLoading ? (
        <div className="flex h-screen items-center justify-center bg-white">
          <img src={preLoader} alt="...loading"></img>
        </div>
      ) : (
        <>
          <RouterProvider router={routes} />
          <ScrollToTop smooth />
        </>
      )}
    </div>
  );
}

export default App;
