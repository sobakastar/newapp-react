// import React from "react";
import { useEffect, useRef, useState } from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

// import "./Form.styles.css";

export const Counter = ({ randomNumber }) => {
  const [count, setCount] = useState(0);
  // const countState = useState(0);
  // const count = countState[0];
  // const setCount = countState[1];

  useEffect(() => {
    console.log("like did mount");
  }, []);

  useEffect(() => {
    console.log("like did mount + did update");
    return () => {
      console.log("like will unmount no dependencies array");
    };
  });

  useEffect(() => {
    console.log("like did mount + count update");
  }, [count]);

  useEffect(() => {
    console.log("like did mount + randomNumber update");
  }, [randomNumber]);

  useEffect(() => {
    console.log("like did mount + count update or randomNumber update");
    return () => {
      console.log("like will unmount [count, randomNumber]");
    };
  }, [count, randomNumber]);

  useEffect(() => {
    return () => {
      console.log("like will unmount");
    };
  }, []);

  return (
    <div>
      <h4>{count}</h4>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click!
      </button>
      <div>{randomNumber}</div>
    </div>
  );
};

// export class Child extends React.Component {
//   constructor(props) {
//     super(props);

//     console.log("child constructor");
//     this.state = {
//       count: 10,
//       name: "Alex",
//     };
//   }

//   componentDidMount() {
//     console.log("child did mount");
//   }

//   componentWillUnmount() {
//     console.log("child will unmount");
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log("child did update", prevProps, prevState);
//   }

//   render() {
//     console.log("child render");
//     return (
//       <div>
//         <h4>Child component</h4>
//       </div>
//     );
//   }
// }

// export class Counter extends React.Component {
//   // state = {
//   //   count: 0,
//   //   name: "Alex",
//   // };

//   constructor(props) {
//     super(props);

//     console.log("constructor");
//     this.state = {
//       count: 10,
//       name: "Alex",
//       showChild: false,
//     };
//   }

//   componentDidMount() {
//     console.log("component did mount");
//   }

//   componentWillUnmount() {
//     console.log("component will unmount");
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log("component did update", prevProps, prevState);
//   }

//   increase = () => {
//     this.setState(
//       (oldState) => ({ count: oldState.count + 1 }),
//       () => {
//         console.log("2nd arg", this.state.count);
//       }
//     );
//   };

//   decrease = () => {
//     this.setState(
//       (oldState) => ({ count: oldState.count - 1 }),
//       () => {
//         console.log("2nd arg", this.state.count);
//       }
//     );
//   };

//   toggleChild = () => {
//     this.setState((prevState) => ({
//       showChild: !prevState.showChild,
//     }));
//   };

//   render() {
//     console.log("render");
//     return (
//       <div>
//         <h4>{this.state.count}</h4>
//         <button onClick={this.toggleChild}>Click!</button>
//         {this.state.showChild && <Child />}
//       </div>
//     );
//   }
// }

export const MyButton = ({ text, onClick, children }) => {
  console.log(children);
  return (
    <div role="button" onClick={onClick}>
      {children}
    </div>
  );
};

export const ExampleForm = ({ onSubmit, render }) => {
  const [value, setValue] = useState("");

  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(value);
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    console.log("did mount", inputRef);
    inputRef.current?.focus();

    return () => {
      console.log("will unmount");
    };
  }, []);

  return (
    <form onSubmit={handleSubmit}>
   {/*<TextField value={value} onChange={handleChange} inputRef={inputRef} />
      <Button className="mybtn" type="submit" variant="contained">
        Submit
      </Button> */}
      {render(value, handleChange)}
    </form>
  );
};
