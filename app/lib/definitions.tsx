export interface ResultItem {
    basic_information: {
        artists: (ArtistsEntity)[];
        title: string;
        cover_image: string;
    }
}

export interface ArtistsEntity {
    name: string;
}

export interface AlbumInfo {
    coverImage: string;
    title: string;
    artist: string;
}

export interface PaginationInfo {
    page: string,
    pages: number,
    items: number,
}

export interface Album {
    artist: string;
    title: string;
    coverImage: string;
}

export interface RecommendationUpdate {
    updateAlbumData: (index: number) => void;
    data: AlbumInfo[];
}
