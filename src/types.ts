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
	albumDataUrl: 'https://rammstein-data-api.herokuapp.com/albumData';
	membersUrl: 'https://rammstein-data-api.herokuapp.com/memberDetails';
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
	birthdate: string;
	place_of_birth: string;
	role: string;
	height: string;
	weight: string;
	eye_color: string;
	hair_color: string;
	distinguishing_features: string;
	usual_spot_on_stage: string;
	former_band: string;
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
