import React from "react";
import { useParams } from "react-router-dom";

function Videos(props) {
  const { keyword } = useParams();

  return <div>videos {keyword} </div>;
}

export default Videos;
