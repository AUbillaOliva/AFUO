import React from 'react'
import { useSelector } from "react-redux";

import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navb'

import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'styled-components';

const software = () => {

	const theme = useSelector((state: any) => state.persistedThemeReducer.theme);

	return (
		<ThemeProvider theme={theme}>
			<Header title="afuo" subtitle="de proyectos y codigo..." />
			<Navbar />
		</ThemeProvider>
	)
}

export default software;
