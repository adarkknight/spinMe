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