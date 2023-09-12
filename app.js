// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello from React"
// );

/*
      <div id = "parent">
            <div id = "child">
                  <h1>Hello from h1 tag</h1>
            </div>
      
      </div>
*/

const div = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello from h1 tag"),
    React.createElement("h2", {}, "Hello from h2 tag"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);

console.log(div);
