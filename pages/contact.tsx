import React from 'react'
import Head from "next/head";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navb'

import 'bootstrap/dist/css/bootstrap.min.css';

const contact = () => {

	const theme = useSelector((state: any) => state.persistedThemeReducer.theme);

	return (
		<ThemeProvider theme={theme}>
			<Head>
				<title>Contacto</title>
				<meta name="description" content="Me puedes encontrar por diversas redes sociales, como tambien por acá en mi página." /> 
			</Head>
			<Header title="afuo" subtitle="de proyectos y codigo..." />
			<Navbar />
		</ThemeProvider>
	)
}

export default contact;
