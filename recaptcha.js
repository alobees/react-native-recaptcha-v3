import React, { PureComponent } from "react";
import WebView from "react-native-webview";
import recaptchaHtml from "./config/config";

class ReactNativeRecaptchaV3 extends PureComponent {
  onWebViewLoad = () => {
    console.log("Recaptcha WebView loaded");
  };
  onWebViewMessage = (event) => {
    console.log(
      "Received message from Recaptcha WebView:",
      event.nativeEvent.data
    );
  };
  onWebViewError = (syntheticEvent) => {
    const { nativeEvent } = syntheticEvent;
    console.error("Recaptcha WebView error: ", nativeEvent);
  };
  render() {
    const { onCheck, url, siteKey, actionName } = this.props;
    const recaptchaHtmlWithKey = recaptchaHtml
      .replace("[SITEKEY]", siteKey)
      .replace("[ACTION_NAME]", actionName);

    return (
      <WebView
        originWhitelist={["*"]}
        style={{ width: 0, height: 0 }}
        startInLoadingState
        javaScriptEnabledAndroid
        javaScriptEnabled
        source={{ html: recaptchaHtmlWithKey, baseUrl: url }}
        onMessage={(event) => {
          this.onWebViewMessage(event);
          onCheck(event.nativeEvent.data);
        }}
        onLoad={this.onWebViewLoad}
        onError={this.onWebViewError}
      />
    );
  }
}

export default ReactNativeRecaptchaV3;
