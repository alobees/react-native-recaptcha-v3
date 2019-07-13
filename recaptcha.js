import React, { PureComponent } from 'react';
import { WebView } from 'react-native-webview';
import recaptchaHtml from './config/config';

class ReactNativeRecaptchaV3 extends PureComponent {
  render() {
    const { onCheck, url, siteKey } = this.props;
    const recaptchaHtmlWithKey = recaptchaHtml.replace('[SITEKEY]', siteKey);

    return (
      <WebView
        originWhitelist={['*']}
        style={{ width: 0, height: 0 }}
        startInLoadingState
        javaScriptEnabledAndroid
        javaScriptEnabled
        source={{ html: recaptchaHtmlWithKey, baseUrl: url }}
        onMessage={event => onCheck(event.nativeEvent.data)}
      />
    );
  }
}

export default ReactNativeRecaptchaV3;
