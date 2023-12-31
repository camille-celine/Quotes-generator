import React, { Component } from "react";
import "./Quote.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

class Quote extends Component {

  render() {
    return (
      <div className='Quote'>
        <div className='Quote-text'>{this.props.text}</div>
        <div className="Quote-author">
          <p>- {this.props.author} -</p>
        </div>
      </div>
    );
  }
}
export default Quote;
