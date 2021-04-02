import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

// Store
import store from '../../src/redux/store';

// Action
import { switchTheme } from '../../src/redux/actions/themeActions';

// Themes
import { lightTheme, darkTheme } from '../../src/theme/theme';

// Styles
import styles from './styles/Switch.module.css';

const StyledSwitch = styled.input`
	&:checked + .slider {
		background-color: ${(props: any) => props.theme.COLOR_ACCENT};
	}
`;

const Switch = () => {
	
	const dispatch = useDispatch();

	const handleSwitch = () => {
		if (store.getState().persistedThemeReducer.theme.mode === "light") {
			dispatch(switchTheme(darkTheme));
		} else {
			dispatch(switchTheme(lightTheme));
		}
	}

	return (
		<label className={styles.switch}>
			<StyledSwitch type="checkbox" onChange={() => handleSwitch()} checked={store.getState().persistedThemeReducer.theme.mode === "light" ? false : true} />
			<span className={styles.slider + " slider " + styles.round}> 🌜  🌞</span>
		</label>
	)
}

export default Switch;
