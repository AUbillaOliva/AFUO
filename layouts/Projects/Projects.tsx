import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styled from "styled-components";
import { FormattedMessage } from 'react-intl';

// Components
import Carousel from "../../components/Carousel/Carousel";

// Styles
import styles from './styles/Projects.module.css';

const StyledSection = styled.section`
	background-color: ${(props: any) => props.theme.SURFACE_COLOR};
	color: ${(props: any) => props.theme.TEXT_COLOR};
`;

const StyledDivider = styled.hr`
	background-color: ${(props: any) => props.theme.DIVIDER_COLOR};
`;

interface IProject {
	_id: string | undefined;
	title: string;
	descriptions: any | undefined;
	url: string | undefined;
	date: string | undefined;
	images: string[] | undefined;
	tags: string[] | undefined;
}

const Projects = () => {

	const [projects, setProjects] = useState<IProject[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	const getProjects = async () => {
		try {
			const url = 'http://192.168.0.5:5000/api/projects'; //TODO: Replace with online URI
			const response = await axios.get(url);
			setProjects(response.data);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		getProjects()
		return () => setIsLoading(false);
	}, []);

	return (
		<StyledSection className={styles.projectsSection}>
			<div className={styles.containerFluid}>
				<h4 className={styles.projectsSectionTitle}>
					<FormattedMessage id="projects.projects-section-title"
						defaultMessage="Projectos populares"
						description="projects section title"
					/>
				</h4>
				<StyledDivider />
			</div>
			<Carousel items={projects} />
		</StyledSection>
	)
}

export default Projects;
