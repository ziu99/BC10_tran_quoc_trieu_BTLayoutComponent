import React, { Component } from "react";
import Banner from "./Banner";
import Item from "./Item";


export default class Body extends Component {
  render() {
    return (
      <div>
        <div>
          <Banner />
        </div>
        <div>
          <Item />
        </div>
      </div>
    );
  }
}
