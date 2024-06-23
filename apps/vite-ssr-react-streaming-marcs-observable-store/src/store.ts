import MarcsObservable from "@bronifty/marcs-observable";
const [
  childObservableGetter,
  childObservableSetter,
  childObservableSubscriber,
] = MarcsObservable.useState(0);
const [parentObservableGetter] = MarcsObservable.useState(
  () => childObservableGetter() * 2
);
export {
  childObservableGetter,
  childObservableSetter,
  childObservableSubscriber,
  parentObservableGetter,
};
// const App = () => {
// let unsubscribe = () => {};
//   // subscribing react hook for ui update to observable value update inside a useEffect so it runs once on mount and doesn't get re-assigned every re-render
//   const [input1, setInput1] = React.useState(childObservableGetter());
//   React.useEffect(() => {
//     unsubscribe = childObservableSubscriber((newVal: any) => {
//       setInput1(newVal);
//     });
//     return () => {
//       unsubscribe();
//     };
//   }, []); // Empty dependency array ensures this effect runs only once on mount

//   const handleInputChange = (e: any) => {
//     childObservableSetter(e.target.value); // Update observable state
//   };

//   return (
//     <>
//       <section>
//         <h2>numeric input</h2>
//         <input type="number" value={input1} onChange={handleInputChange} />
//         <p>
//           childObservableGetter value (childObservableGetter()):{" "}
//           {childObservableGetter()}
//         </p>
//         <p>
//           parentObservableGetter value (parentObservableGetter()):{" "}
//           {parentObservableGetter()}
//         </p>
//         <button onClick={unsubscribe}>unsubscribe from ui updates</button>
//       </section>
//     </>
//   );
// };

// export default App;
