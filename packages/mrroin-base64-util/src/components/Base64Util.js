import React from "react";
import Base64Decode from "./Base64Decode";
import Base64Encode from "./Base64Encode";
import { ConfigProvider } from "antd";
import { Tabs } from "antd";
import { FileExclamationTwoTone, FileTextTwoTone } from "@ant-design/icons";

import "antd/dist/antd.css";

ConfigProvider.config({
  prefixCls: "custom",
  theme: {
    primaryColor: "#25b864",
  },
});

class Base64Util extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEncode: true,
    };
  }

  render() {
    return (
      <ConfigProvider>
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane
            tab={
              <span>
                <FileExclamationTwoTone />
                Encode
              </span>
            }
            key="1"
          >
            <Base64Encode />
          </Tabs.TabPane>
          <Tabs.TabPane
            tab={
              <span>
                <FileTextTwoTone />
                Decode
              </span>
            }
            key="2"
          >
            <Base64Decode />
          </Tabs.TabPane>
        </Tabs>
      </ConfigProvider>
    );
  }
}

export default Base64Util;
