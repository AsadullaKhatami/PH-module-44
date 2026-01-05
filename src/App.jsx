import { Suspense } from "react";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import Pricing from "./components/Pricing/Pricing";

const pricingPromise = fetch('priceData.json').then(res => res.json());

function App() {
  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>

      <main>
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-lg"></span>
          }
        >
          <Pricing pricingPromise={pricingPromise}></Pricing>
        </Suspense>
      </main>
    </>
  );
}

export default App;
