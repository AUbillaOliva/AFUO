import React from 'react';
import Head from 'next/head'
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

// Components
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navb'

// Layouts
import Projects from '../layouts/Projects/Projects';
import Landing from '../layouts/Landing/Landing';
import Repos from '../layouts/Repos/Repos';
import About from '../layouts/About/About';

const Home = () => {
  const theme = useSelector((state: any) => state.persistedThemeReducer.theme);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Álvaro Ubilla Oliva</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://kit.fontawesome.com/f64f2ca3f9.js" crossOrigin="anonymous"></script>
      </Head>
      <Header title="afuo" subtitle="de proyectos y codigo..." />
      <Navbar />
      <main>
        <Landing />
        <Projects />
        <Repos />
        <About />
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default Home;
