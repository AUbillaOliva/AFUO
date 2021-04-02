import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Language from '../../src/translations/translations.json';

// Components
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Atoms
import Switch from '../../atoms/Switch/Switch';
import ActiveLink from '../../atoms/ActiveLink/ActiveLink';

// Styles
import styles from './styles/Navb.module.css';

// Store
import store from '../../src/redux/store';

type mLink = {
	title: string;
	route: string;
	index?: number;
	pathname?: string;
}

const ActiveNavLink = styled(ActiveLink)`
	color: ${(props: any) => props.theme.COLOR_ACCENT};
	background-color:  ${(props: any) => props.theme.COLOR_ACCENT};

	&:hover {
		color: ${(props: any) => props.theme.COLOR_ACCENT};
	}
`;


const NavLink = styled(ActiveLink)`
color: ${(props: any) => props.theme.TEXT_COLOR};
&:hover {
	color: ${(props: any) => props.theme.COLOR_ACCENT};
}
`;

const LinkItem = (links: mLink) => {
	if (links.pathname === links.route) {
		return (
			<ActiveNavLink href={links.route} activeClassName={"active"}><p className={styles.navLink}>{links.title}</p></ActiveNavLink>
		)
	} else {
		return (
			<ActiveNavLink href={links.route} ><p className={styles.navLink}>{links.title}</p></ActiveNavLink>
		)
	}
}

const StyledNav = styled(Nav)`
	.active {
		color: ${(props: any) => props.theme.COLOR_ACCENT};
	}

	p {
		&:hover{
			color: ${(props: any) => props.theme.COLOR_ACCENT};
		}
	}
`;

const StyledNavbar = styled(Navbar)`
	background-color: ${(props: any) => props.theme.PRIMARY_BACKGROUND_COLOR};
	color: ${(props: any) => props.theme.TEXT_COLOR};
`;

const StyledNavbarBrand = styled.a`
	color: ${(props: any) => props.theme.TEXT_COLOR};
	&:hover {
		color: ${(props: any) => props.theme.TEXT_COLOR};
		cursor: pointer;
	}
`;

const Navb = () => {

	const [isScrolled, setIsScrolled] = useState(false);
	const [links, setLinks] = useState([]);
	const router = useRouter();

	const handleScroll = () => {
		if (window.pageYOffset <= 110) {
			setIsScrolled(false);
		} else {
			setIsScrolled(true);
		}
	}

	const handleLinksItems = () => {
		let auxList: mLink[] = [];
		Array.of(Language).map((lang: any) => {
			lang[router.locale]['navbar.navbar-link'].forEach((item: any, index: number) => {
				auxList.push({ title: item.title, route: item.route, index: index });
			})
		});
		setLinks(auxList);
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		handleLinksItems();
		return () => {
			window.removeEventListener("scroll", handleScroll);
		}
	}, []);

	return (
		<StyledNavbar className={isScrolled ? styles.scrolled : styles.notScrolled} expand="lg" sticky="top" variant={store.getState().persistedThemeReducer.theme.mode}>
			{ isScrolled ? <StyledNavbarBrand className={styles.navbarBrand + " mx-auto"}>afuo</StyledNavbarBrand> : null}
			<Navbar.Toggle className={styles.navbarToggler} aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<StyledNav className={styles.navList}>
					{
						links.map((item: mLink, index: number) => {
							if (router.pathname !== "/") {
								return <LinkItem pathname={router.pathname} key={index} route={`${item.route}`} title={`${item.title.toUpperCase()}`} />
							} else {
								if (index !== 0) {
									return <LinkItem pathname={item.pathname} key={index} route={`${item.route}`} title={`${item.title.toUpperCase()}`} />
								}
							}
						})
					}
				</StyledNav>
				<Switch />
			</Navbar.Collapse>
		</StyledNavbar>
	)
}

export default Navb;
