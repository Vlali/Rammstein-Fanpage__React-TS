export interface IInitialState {
	isSidebarOpen: boolean;
	loading: boolean;
	picCord: number;
	classNameImg: string;
	albumData: [];
	memberDetails: [];
	bag: Array<IAlbumData>;
	total: number;
	totalAlbums: number;
	songs: [];
	url: 'https://albumdata.herokuapp.com/albumData';
	membersUrl: 'https://albumdata.herokuapp.com/memberDetails';
	songsUrl: 'https://albumdata.herokuapp.com/results';
	searchTerm: string;
	rightSlide: () => void;
	leftSlide: () => void;
	openSidebar: () => void;
	closeSidebar: () => void;
	intoTheBag: (arg0: number) => void;
	incAmount: (arg0: number) => void;
	decAmount: (arg0: number) => void;
	deleteAnItem: (arg0: number) => void;
	deleteYourBag: () => void;
}

export interface IAction {
	type: string;
	payload?: any;
}

export interface IAlbumData {
	id: number;
	albumName: string;
	price: number;
	releaseDate: string;
	img: string;
	details: string;
}
export interface IAlbumDataPlusAmount extends IAlbumData {
	amount?: number;
}
export interface IMemberData {
	id: number;
	name: string;
	birthname: string;
	birthdate: string;
	nickname: string;
	birthplace: string;
	height: string;
	bloodtype: string;
	img: string;
}
export interface ISingleMember extends IMemberData {
	position?: number;
}
export interface ISingleSong {
	artworkUrl100: string;
	trackName: string;
	artistName: string;
	previewUrl: string;
}
