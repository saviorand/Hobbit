import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function PaymentView (props) {
   if (props.displayUri.length !== 0){   
	return (
		<WebView source={{ uri: props.displayUri }} /> 
		);
} else {return null}
};