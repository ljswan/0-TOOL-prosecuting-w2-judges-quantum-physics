const reportWebVitals = onPerfEntry => {




  ///////////////////////



  
  let count = 0;

// 2. Define the while loop condition
// while (count < 5) {
//   // 3. Code block to be executed
//   console.log("The current count is: " + count); // Log the variable value
//   // for (let i = 0; i< 12; i++) {
//         console.log("2241-888-83");
//         console.log("spaceforce.gov")

//         console.log("click fuck--in click fuckin--- click");
//         console.log("airforce.gov")


//         console.log("2241-888-83");
//     // }
//     console.log("yourmomshousepodcast.gov" + "the index beat of 12 beats in a measure is: " + i);
//     console.log("tonyhinchcliffe.gov" + "the index beat of 12 beats in a measure is: " + i);
//     console.log("joerogan.gov" + "the index beat of 12 beats in a measure is:" + i);
//     console.log("emmawatson.gov " + "the index beat of 12 beats in a measure is:" + i);
//     console.log("ryanreynolds.gov"+ "the index beat of 12 beats in a measure is:" + i);

  


  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
