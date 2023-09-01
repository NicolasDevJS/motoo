import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes';

import AuthProvider from './src/context/auth';

export default function App() {
	return (
		<AuthProvider>
			<Routes />
		</AuthProvider>
	);
}
