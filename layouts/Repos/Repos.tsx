import React, { useState, useEffect } from 'react'
import axios from 'axios';
import styled from "styled-components";
import { FormattedMessage } from 'react-intl';

// Styles
import styles from './styles/Repos.module.css';

// Components
import RepoCard from '../../atoms/RepoCard/RepoCard';

// Models
import { Repos as Repo } from '../../src/models/Repos';

const StyledSection = styled.section`
	background-color: ${(props: any) => props.theme.PRIMARY_BACKGROUND_COLOR};
	color: ${(props: any) => props.theme.TEXT_COLOR};
`;

const StyledDivider = styled.hr`
	background-color: ${(props: any) => props.theme.DIVIDER_COLOR};
`;

const Repos = () => {

	const [isLoading, setIsLoading] = useState(true);
	const [repos, saveRepos] = useState([]);

	const getUserRepos = async () => {
		try {
			const url = `https://api.github.com/users/AUbillaOliva/repos`;
			const response = await axios(url, { headers: { "Authorization": `Bearer ${process.env.GITHUB_TOKEN}` } });
			saveRepos(response.data);
		} catch (err) {
			console.error(err);
		}
	}

	useEffect(() => {
		getUserRepos();
		return () => setIsLoading(false);
	}, []);

	return (
		<StyledSection className={styles.reposSection}>
			<div className={styles.containerFluid}>
				<h4 className={styles.repoSectionTitle}>
					<FormattedMessage id="repos.repos-section-title"
						defaultMessage="Repositorios públicos de Github"
						description="repo section title"
					/>
				</h4>
				<StyledDivider />
				<div className={styles.repoListContainer}>
					{
						repos.map((repos: Repo, index: number) => {
							return (
								<div className={styles.repoItem} key={index}>
									<RepoCard title={repos.name} description={repos.description} url={repos.html_url} language={repos.language} />
								</div>
							)
						})
					}
				</div>
			</div>
		</StyledSection>
	)
}

export default Repos;
