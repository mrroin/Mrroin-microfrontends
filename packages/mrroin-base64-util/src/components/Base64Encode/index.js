import React from "react";
import { Typography, Input, Divider, Button, Tooltip } from "antd";
import { CopyOutlined } from "@ant-design/icons";

class Base64Encode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEncode: true,
      loading: false,
      encodeString: undefined,
      colorButtonCopy: "rgba(0,0,0,.45)",
    };
  }

  encodeBase64 = () => {
    this.setState({
      loading: true,
    });
    const info = document.getElementById("base64Input");
    console.log(info.value);
    this.setState({
      loading: false,
      encodeString: window.btoa(info.value),
    });
  };

  copyBase64 = () => {
    this.setState({
      colorButtonCopy: "green",
    });
    navigator.clipboard.writeText(this.state.encodeString);
    setTimeout(
      () =>
        this.setState({
          colorButtonCopy: "rgba(0,0,0,.45)",
        }),
      3000,
    );
  };

  render() {
    const { loading, encodeString, colorButtonCopy } = this.state;
    return (
      <>
        <Divider orientation="right">
          <Typography.Text code>Paste you string to encode</Typography.Text>
        </Divider>

        <Input.TextArea id="base64Input" rows={10} />
        <Button
          type="primary"
          loading={loading}
          onClick={() => this.encodeBase64()}
        >
          Encode
        </Button>
        <Divider orientation="left">
          <Typography.Text code>Result</Typography.Text>
        </Divider>
        <Input.Group compact>
          <Input.TextArea rows={10} value={encodeString} disabled />
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

export default Base64Encode;
