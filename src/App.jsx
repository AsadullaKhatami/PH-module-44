import { Suspense } from "react";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import Pricing from "./components/Pricing/Pricing";
import DaisyNav from "./components/DaisyNavbar/DaisyNav";

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

        <Suspense
          fallback={
            <span className="loading loading-spinner loading-lg"></span>
          }
        >
          <DaisyNav pricingPromise={pricingPromise}></DaisyNav>
        </Suspense>
      </main>
    </>
  );
}

export default App;
