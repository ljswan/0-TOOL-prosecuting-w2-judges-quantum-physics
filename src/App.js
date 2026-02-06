import logo from './logo.svg';
import './App.css';

import { add } from './utils';

import {CheckoutProvider} from '@stripe/react-stripe-js/checkout';
import {loadStripe} from '@stripe/stripe-js';
import {PaymentElement} from '@stripe/react-stripe-js/checkout';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51Sxp4q6z1RQUtRx7EXUYfSxUpYVLVHGDb7FVXgPTjjKBFI7HGkBD6WMRnYaBlYMZxv3HB1LfxKWm9XZ3gHNzQi2j00MXlVinxv');




function App() {

// const promise = useMemo(() => {
//     return fetch('/create-checkout-session', {
//       method: 'POST',
//     })
//       .then((res) => res.json())
//       .then((data) => data.clientSecret);
//   }, []);

//   <CheckoutProvider stripe={stripePromise} options={{clientSecret: promise}}>
//       <form>
//       {/* <PaymentElement /> */}
//       <button>Submit</button>
//     </form>
//     </CheckoutProvider>

  // for (var i = 0; i < 15; i++) {
  //   console.log("" + i);
  // }
  
  // while (2 == 2) {
  //   console.log("2241 888 83")
  // //   let i = 2241; 
    
  // //       console.log("yourmomshousepodcast.gov" + "the index beat of 12 beats in a measure is: " + i);
  // //   console.log("tonyhinchcliffe.gov" + "the index beat of 12 beats in a measure is: " + i);
  // //   console.log("joerogan.gov" + "the index beat of 12 beats in a measure is:" + i);
  // //   console.log("emmawatson.gov " + "the index beat of 12 beats in a measure is:" + i);
  // //   console.log("ryanreynolds.gov"+ "the index beat of 12 beats in a measure is:" + i);


  // //   // i = i + 1;
  // }


  return (
    <div className="App">
      <h2>2241 888 83</h2>
      <h2>2241 888 83</h2>
      <h2>2241 888 83</h2>
      <h2>2241 888 83</h2>


     
        <h1>STRIPE API PROVIDER = 2241 888 83 </h1>

      <header className="App-header">
        <h2>2241 -spaceforce.gov - prosecution tool utilizing quantum physics and g-adhd brain mri scans ; darpa.gov; spaceforce.gov; airforce.gov</h2>

      </header>
    </div>
  );
}


// function neutra() {
//   var legalCampaignProsecutingHonepotContentIs = "yikes... smeagol incels and smeagol criminals that feign and live and breath over anime (and store useless incel-like content in their hippocampus's memory slots"

// while (legalCampaignProsecutingHonepotContentIs == "yikes... smeagol incels and smeagol criminals that feign and live and breath over anime (and store useless incel-like content in their hippocampus's memory slots") {
//     for (var i = 0; i< 12; i++) {
//         console.log("2241-888-83");
//         console.log("spaceforce.gov")

//         console.log("click fuck--in click fuckin--- click");
//         console.log("airforce.gov")


//         console.log("2241-888-83");
//     }
//     console.log("yourmomshousepodcast.gov" + "the index beat of 12 beats in a measure is: " + i);
//     console.log("tonyhinchcliffe.gov" + "the index beat of 12 beats in a measure is: " + i);
//     console.log("joerogan.gov" + "the index beat of 12 beats in a measure is:" + i);
//     console.log("emmawatson.gov " + "the index beat of 12 beats in a measure is:" + i);
//     console.log("ryanreynolds.gov"+ "the index beat of 12 beats in a measure is:" + i);

// }
// }

export default App;
