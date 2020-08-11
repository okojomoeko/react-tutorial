import React from 'react'

export default function Square(props: any) {
  return (
    <button className="square">
      {props.value}
    </button>
  );
}
