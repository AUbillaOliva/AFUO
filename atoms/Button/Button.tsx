import React from 'react'
import styled, { ThemeProvider } from 'styled-components';

// Store
import store from '../../src/redux/store';

// Styles
import styles from './styles/Button.module.css';

const StyledButton = styled.div`
	background-color: ${(props: any) => props.theme.COLOR_ACCENT}; 
`;

const StyledText = styled.p`
	color: ${(props: any) => props.theme.BUTTON_TEXT_COLOR};
`;

const Button = ({ text, url }) => {
	return (
		<ThemeProvider theme={store.getState().persistedThemeReducer.theme}>
			<StyledButton className={styles.btn}>
				<a className={styles.btnLink} href={url}><StyledText className={styles.btnText}>{text}</StyledText></a>
			</StyledButton>
		</ThemeProvider>
	)
}

export default Button;
