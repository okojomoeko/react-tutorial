import React from 'react'

export default function Square(props: any) {
  const [state, setState] = React.useState("");

  return (
    <button className="square" onClick={() => props.onClick()} style={props.style}>
      {props.value}
    </button>
  );
}
