import React from "react";
import { Link } from "react-router-dom";

export default ({ link }) => (
  <div>
    <Link to={link}>modify this recipe</Link>
  </div>
);
