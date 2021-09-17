import React, { useContext, useEffect, useReducer, useState } from 'react';
import reducer from './reducer';
import { IInitialState, IAlbumData, IAlbumDataPlusAmount } from './types';

const initialState: IInitialState = {
	isSidebarOpen: false,
	loading: false,
	picCord: 2,
	classNameImg: 'second-image',
	albumData: [],
	memberDetails: [],
	bag: [],
	total: 0,
	totalAlbums: 0,
	songs: [],
	url: 'https://albumdata.herokuapp.com/albumData',
	membersUrl: 'https://albumdata.herokuapp.com/memberDetails',
	songsUrl: 'https://albumdata.herokuapp.com/results',
	searchTerm: '',
	rightSlide: () => {},
	leftSlide: () => {},
	openSidebar: () => {},
	closeSidebar: () => {},
	intoTheBag: () => {},
	incAmount: () => {},
	decAmount: () => {},
	deleteAnItem: () => {},
	deleteYourBag: () => {},
};

const AppContext = React.createContext(initialState);

const AppProvider = ({ children }: any) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const rightSlide = () => {
		dispatch({ type: 'RIGHT' });
	};
	const leftSlide = () => {
		dispatch({ type: 'LEFT' });
	};
	const openSidebar = () => {
		dispatch({ type: 'OPEN_SIDEBAR' });
	};
	const closeSidebar = () => {
		dispatch({ type: 'CLOSE_SIDEBAR' });
	};
	const intoTheBag = (id: number) => {
		dispatch({ type: 'TO_THE_BAG', payload: id });
	};
	const incAmount = (id: number) => {
		dispatch({ type: 'INCREASE_AMOUNT', payload: id });
	};
	const decAmount = (id: number) => {
		dispatch({ type: 'DECREASE_AMOUNT', payload: id });
	};
	const deleteAnItem = (id: number) => {
		dispatch({ type: 'DELETE_AN_ITEM', payload: id });
	};

	const deleteYourBag = () => {
		dispatch({ type: 'DELETE_YOUR_BAG' });
	};

	const fetchData = async () => {
		dispatch({ type: 'LOADING' });
		try {
			const response = await fetch(state.url);
			const fetchData = await response.json();
			await fetchData.forEach(
				(element: IAlbumDataPlusAmount) => (element.amount = 0)
			);

			dispatch({ type: 'DISPLAY_DATA', payload: fetchData });
		} catch (err) {
			console.log(err);
		}
	};
	const fetchMembers = async () => {
		dispatch({ type: 'LOADING' });
		try {
			const response = await fetch(state.membersUrl);
			const membersData = await response.json();
			dispatch({ type: 'DISPLAY_MEMBERS_DATA', payload: membersData });
		} catch (err) {
			console.log(err);
		}
	};

	const fetchSongs = async () => {
		dispatch({ type: 'LOADING' });
		try {
			const response = await fetch(state.songsUrl);
			const songsData = await response.json();
			dispatch({ type: 'DISPLAY_SONGS', payload: songsData });
		} catch (err) {
			console.log(err);
		}
	};

	//useEffects
	useEffect(() => {
		dispatch({ type: 'IMG_CHANGE' });
	}, [state.picCord]);

	useEffect(() => {
		let slider = setInterval(() => {
			dispatch({ type: 'RIGHT' });
		}, 10000);
		return () => {
			clearInterval(slider);
		};
	}, [state.picCord]);

	//api fetching

	useEffect(() => {
		fetchData();
	}, []);
	useEffect(() => {
		fetchMembers();
	}, []);
	useEffect(() => {
		fetchSongs();
	}, []);

	return (
		<AppContext.Provider
			value={{
				...state,
				rightSlide,
				leftSlide,
				openSidebar,
				closeSidebar,
				intoTheBag,
				incAmount,
				decAmount,
				deleteAnItem,
				deleteYourBag,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const UseGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
