import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { upsideDownText, formatText } from "./textModifier";

class TextOutput extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.selectContent = this.selectContent.bind(this);
  }

  selectContent(){
      const node = this.inputRef.current;
      node.setSelectionRange(0, node.value.length);
      return;
  }

  render() {
    return (
      <div className="text-box">
        <input
          type="text"
          onClick={this.selectContent}
          value={formatText(this.props.text, this.props.upper_shift, this.props.lower_shift)}
          ref={this.inputRef}
          readOnly></input>
      </div>
    );
  }
}

class UpsideDownTextOut extends TextOutput {

  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  render() {
    return (
      <div className="text-box">
        <input
          type="text"
          value={upsideDownText.convertText(this.props.text)}
          ref={this.inputRef}
          onClick={this.selectContent}
          readOnly
          ></input>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "𝓤𝙣𝙞𝙛𝙤𝙧𝙢:",
      sub_title: "𝚄𝚗𝚒𝚌𝚘𝚍𝚎 𝓣𝓮𝔁𝓽 𝖲𝗍𝗅𝗒𝖾𝗋",
      user_text: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ user_text: event.target.value });
  }
  render() {
    return (
      <div className="main">
        <div id="title">
          <h1>{this.state.title}</h1>
          <h3>{this.state.sub_title}</h3>
        </div>
        <div id="input">
          <textarea
            placeholder="Enter some text here!"
            rows="3"
            cols="35"
            value={this.state.user_text}
            onChange={this.handleChange}></textarea>
        </div>
        <Output text={this.state.user_text}></Output>
        <footer>
          <a
            href="https://github.com/MilanDonhowe/uniform"
            target="_blank"
            rel="noopener noreferrer">
            <svg
              id="i-github"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              width="32"
              height="32">
              <path
                strokeWidth="0"
                fill="#4fe287"
                d="M32 0 C14 0 0 14 0 32 0 53 19 62 22 62 24 62 24 61 24 60 L24 55 C17 57 14 53 13 50 13 50 13 49 11 47 10 46 6 44 10 44 13 44 15 48 15 48 18 52 22 51 24 50 24 48 26 46 26 46 18 45 12 42 12 31 12 27 13 24 15 22 15 22 13 18 15 13 15 13 20 13 24 17 27 15 37 15 40 17 44 13 49 13 49 13 51 20 49 22 49 22 51 24 52 27 52 31 52 42 45 45 38 46 39 47 40 49 40 52 L40 60 C40 61 40 62 42 62 45 62 64 53 64 32 64 14 50 0 32 0 Z"
              />
            </svg>
          </a>
        </footer>
      </div>
    );
  }
}

function Output(props) {
  return (
    <div className="output">
      <div className="col">
        <TextOutput
          text={props.text}
          upper_shift={9333}
          lower_shift={9327}></TextOutput>
        <TextOutput
          text={props.text}
          upper_shift={119951}
          lower_shift={119945}></TextOutput>
        <TextOutput
          text={props.text}
          upper_shift={120107}
          lower_shift={120101}></TextOutput>
        <TextOutput
          text={props.text}
          upper_shift={120211}
          lower_shift={120205}></TextOutput>
      </div>
      <div className="col">
        <TextOutput
          text={props.text}
          upper_shift={120263}
          lower_shift={120257}></TextOutput>
        <TextOutput
          text={props.text}
          upper_shift={120315}
          lower_shift={120309}></TextOutput>
        <TextOutput
          text={props.text}
          upper_shift={120367}
          lower_shift={120361}></TextOutput>
        <UpsideDownTextOut text={props.text}></UpsideDownTextOut>
      </div>
    </div>
  );
}

ReactDOM.render(<App></App>, document.getElementById("root"));
