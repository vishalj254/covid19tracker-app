import React from 'react';
import {WebView} from 'react-native-webview';

export default function Covid() {
  return <WebView source={{uri: 'http://www.campusshala.com:20000/'}} />;
}
