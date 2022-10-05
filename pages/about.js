import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Title from '../components/Title';
import styles from '../styles/Home.module.css';

const AboutPage = () => {
	const [value, setValue] = useState(10);
	const [inputValue, setInputValue] = useState('');

	useEffect(() => {
		setValue(value + 10);
	}, [inputValue]);

	function increaseValue() {
		setValue(value + 1);
	}
	const decreaseValue = () => {
		setValue(value - 1);
	};
	return (
		<div className={styles.main}>
			<Title title='About'>About Page</Title>
			<input
				placeholder='input'
				value={inputValue}
				onChange={e => {
					setInputValue(e.target.value);
				}}
			/>

			<Link href='/'>
				<div
					style={{
						cursor: 'pointer',
						backgroundColor: 'whitesmoke',
						padding: '1rem 2rem',
					}}>
					<p>Redirect to home page</p>
				</div>
			</Link>
			<h3>Value: {value}</h3>
			<h3>Input: {inputValue}</h3>

			<div style={{ display: 'flex', gap: 8 }}>
				<div
					onClick={decreaseValue}
					style={{
						padding: '1rem',
						backgroundColor: 'whitesmoke',
						cursor: 'pointer',
					}}>
					<p>-</p>
				</div>
				<div
					onClick={increaseValue}
					style={{
						padding: '1rem',
						backgroundColor: 'whitesmoke',
						cursor: 'pointer',
					}}>
					<p>+</p>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
