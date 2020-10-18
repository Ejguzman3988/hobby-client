import React from "react";

export default function Errors({ errors }) {
  const renderErrors = errors.map((error) => <li>{error}</li>);
  return <div>{renderErrors}</div>;
}
