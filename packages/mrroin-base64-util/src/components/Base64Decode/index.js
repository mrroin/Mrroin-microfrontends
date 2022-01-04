import React from "react";
import { Typography, Input, Divider, Button, Tooltip } from "antd";
import { CopyOutlined } from "@ant-design/icons";

class Base64Decode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEncode: true,
      loading: false,
      decodeString: undefined,
      colorButtonCopy: "rgba(0,0,0,.45)",
    };
  }

  decodeBase64 = () => {
    this.setState({
      loading: true,
    });
    const info = document.getElementById("base64InputDecode");
    console.log(info.value);
    this.setState({
      loading: false,
      decodeString: window.atob(info.value),
    });
  };

  copyBase64 = () => {
    this.setState({
      colorButtonCopy: "green",
    });
    navigator.clipboard.writeText(this.state.decodeString);
    setTimeout(
      () =>
        this.setState({
          colorButtonCopy: "rgba(0,0,0,.45)",
        }),
      3000,
    );
  };

  render() {
    const { loading, decodeString, colorButtonCopy } = this.state;
    return (
      <>
        <Divider orientation="right">
          <Typography.Text code>Paste you string to decode</Typography.Text>
        </Divider>

        <Input.TextArea id="base64InputDecode" rows={10} />
        <Button
          type="primary"
          loading={loading}
          onClick={() => this.decodeBase64()}
        >
          Decode
        </Button>
        <Divider orientation="left">
          <Typography.Text code>Result</Typography.Text>
        </Divider>
        <Input.Group compact>
          <Input.TextArea rows={10} value={decodeString} disabled />
          <Tooltip title="copy">
            <Button
              style={{
                marginLeft: -31,
                zIndex: 99999,
              }}
              icon={<CopyOutlined style={{ color: colorButtonCopy }} />}
              onClick={this.copyBase64}
            />
          </Tooltip>
        </Input.Group>
      </>
    );
  }
}

export default Base64Decode;
