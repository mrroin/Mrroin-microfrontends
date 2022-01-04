import React from "react";
import { ObjectInspector } from "react-inspector";
import "../index.css";

class JSONPrettyUtil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prettyJsonString: undefined,
      prettyJsonComponent: undefined,
      error: undefined,
      colorButtonCopy: "bg-blue-500  hover:bg-blue-700",
    };
  }

  prettyJson = () => {
    console.log("prettyJson");
    const info = document.getElementById("jsonString");
    console.log(info.value);
    this.setState({
      error: undefined,
    });
    if (info.value) {
      let jsonObject = "";
      try {
        jsonObject = JSON.parse(info.value);
        this.setState({
          loading: false,
          prettyJsonString: JSON.stringify(jsonObject, undefined, 4),
        });
      } catch {
        this.setState({
          error: "invalid JSON string",
          prettyJsonString: "",
        });
      }
    }
  };

  copyPrettyJson = () => {
    const { prettyJsonString } = this.state;
    if (prettyJsonString) {
      this.setState({
        colorButtonCopy: "bg-green-500  hover:bg-green-700",
      });
      navigator.clipboard.writeText(prettyJsonString);
      setTimeout(
        () =>
          this.setState({
            colorButtonCopy: "bg-blue-500  hover:bg-blue-700",
          }),
        3000,
      );
    }
  };

  render() {
    const { prettyJsonString, error, colorButtonCopy } = this.state;
    return (
      <div className="grid grid-rows-5 grid-flow-col space-x-4 h-96 mt-8">
        <div className="row-span-5 w-50 h-96 col-span-1 justify-center rounded-lg skew-y-2 bg-gradient-to-r from-slate-200 via-gray-300 to-stone-500 shadow-lg shadow-indigo-500/40">
          <br />
          <p className="indent-2">Paste your json string</p>
          <br />
          <textarea
            id="jsonString"
            className="w-5/6 col-span-2 mt-1 block rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            rows="10"
            style={{ overflow: "auto", resize: "none", margin: "auto" }}
          ></textarea>
        </div>
        <div className="w-50 flex items-center">
          <button
            className="bg-sky-500 px-8 py-2 text-white"
            onClick={this.prettyJson}
          >
            Process
          </button>
        </div>
        <div className="row-span-4 w-50">
          <p className="text-red-500 text-xs italic block">
            {error ? error : <>&nbsp;</>}
          </p>

          <div className="bg-white max-w-sm p-5 rounded shadow-md mb-3 w-full">
            <button
              className={`${colorButtonCopy} float-right text-white font-bold py-2 px-4 border border-blue-700 rounded`}
              onClick={this.copyPrettyJson}
            >
              Copy
            </button>
            <textarea
              value={prettyJsonString}
              className="w-5/6 mt-1 block rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              rows="12"
              style={{ overflow: "auto", resize: "none", margin: "auto" }}
              disabled
            ></textarea>
            <>
              {prettyJsonString ? (
                <ObjectInspector data={JSON.parse(prettyJsonString)} />
              ) : null}
            </>
          </div>
        </div>
      </div>
    );
  }
}

export default JSONPrettyUtil;
