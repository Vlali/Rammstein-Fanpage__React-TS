import { IInitialState, IAction, IAlbumDataPlusAmount } from './types';

const reducer = (state: IInitialState, action: IAction) => {
	switch (action.type) {
		case 'DISPLAY_DATA': {
			return { ...state, albumData: action.payload, loading: false };
		}
		case 'DISPLAY_MEMBERS_DATA': {
			return { ...state, memberDetails: action.payload, loading: false };
		}
		case 'DISPLAY_SONGS': {
			return { ...state, songs: action.payload, loading: false };
		}
		case 'LEFT': {
			let newValue = state.picCord - 1;
			if (newValue === 0) {
				newValue = 3;
			}

			return { ...state, picCord: newValue };
		}
		case 'RIGHT': {
			let newValue = state.picCord + 1;
			if (newValue === 4) {
				newValue = 1;
			}

			return { ...state, picCord: newValue };
		}
		case 'IMG_CHANGE': {
			let newIMG = '';
			switch (state.picCord) {
				case 1: {
					newIMG = 'first-image';
					break;
				}
				case 2: {
					newIMG = 'second-image';
					break;
				}
				case 3: {
					newIMG = 'third-image';
					break;
				}
			}
			return { ...state, classNameImg: newIMG };
		}
		case 'LOADING': {
			return { ...state, loading: true };
		}

		case 'OPEN_SIDEBAR': {
			return { ...state, isSidebarOpen: true };
		}
		case 'CLOSE_SIDEBAR': {
			return { ...state, isSidebarOpen: false };
		}
		case 'TO_THE_BAG': {
			let oldBag = state.bag;
			let newStuff: Array<IAlbumDataPlusAmount>;
			let currentAlbumData: Array<IAlbumDataPlusAmount> = state.albumData;

			newStuff = currentAlbumData.filter((item) => item.id === action.payload);

			let newStuffObj: IAlbumDataPlusAmount = newStuff[0];

			if (newStuffObj.amount || newStuffObj.amount === 0) {
				newStuffObj.amount += 1;
				if (newStuffObj.amount > 1) {
					const index = oldBag.indexOf(newStuffObj);
					if (index > -1) {
						oldBag.splice(index, 1);
					}
				}
			}

			state.total += newStuffObj.price;
			state.totalAlbums += 1;

			oldBag.push(newStuffObj);

			return {
				...state,
				bag: oldBag,
			};
		}
		case 'INCREASE_AMOUNT': {
			let oldBag: Array<IAlbumDataPlusAmount> = state.bag;
			state.totalAlbums += 1;
			let tempBag = oldBag.map((bagItem) => {
				if (bagItem.amount || bagItem.amount === 0) {
					if (bagItem.id === action.payload) {
						state.total += bagItem.price;
						return { ...bagItem, amount: bagItem.amount + 1 };
					}
				}

				return bagItem;
			});
			return {
				...state,
				bag: tempBag,
			};
		}
		case 'DECREASE_AMOUNT': {
			let newAmount: number;
			let oldBag: Array<IAlbumDataPlusAmount> = state.bag;
			let tempBag = oldBag.map((bagItem) => {
				if (bagItem.amount || bagItem.amount === 0) {
					if (bagItem.id === action.payload && bagItem.amount > 0) {
						state.total -= bagItem.price;
						if (state.totalAlbums > 0) {
							state.totalAlbums -= 1;
							newAmount = bagItem.amount - 1;
							console.log(newAmount);
						}

						return { ...bagItem, amount: newAmount };
					}
				}
				return bagItem;
			});
			return {
				...state,
				bag: tempBag,
			};
		}
		case 'DELETE_AN_ITEM': {
			let oldbag: Array<IAlbumDataPlusAmount> = state.bag;
			let deletedValue = oldbag.filter((item) => item.id === action.payload);
			if (deletedValue[0].amount || deletedValue[0].amount === 0) {
				state.totalAlbums -= deletedValue[0].amount;
				state.total =
					state.total - deletedValue[0].amount * deletedValue[0].price;

				let tempCart = state.bag.filter((item) => item.id !== action.payload);
				let tempAlbumsData: Array<IAlbumDataPlusAmount> = state.albumData.map(
					(item: IAlbumDataPlusAmount) => {
						if (item.id === action.payload) {
							return { ...item, amount: 0 };
						}
						return item;
					}
				);

				return {
					...state,
					bag: tempCart,
					albumData: tempAlbumsData,
				};
			}
			return state;
		}
		case 'DELETE_YOUR_BAG': {
			let currentAlbumData: Array<IAlbumDataPlusAmount> = state.albumData;
			state.totalAlbums = 0;

			currentAlbumData.forEach((item) => (item.amount = 0));
			return {
				...state,
				bag: [],
				total: 0,
			};
		}

		default:
			return state;
	}
};

export default reducer;
