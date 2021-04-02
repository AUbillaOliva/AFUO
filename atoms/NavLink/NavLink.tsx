import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const NavLink = ({ href, children }) => {
	const child = React.Children.only(children);

	let className = child.props.className || '';
	className = `${className}`.trim();

	return <Link href={href}>{React.cloneElement(child, { className })}</Link>;
};

NavLink.propTypes = {
	href: PropTypes.string,
	children: PropTypes.node.isRequired
};

NavLink.defaultProps = {
	href: '',
};

export default NavLink;
