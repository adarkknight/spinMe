import data from '../../mock/mockData.json'

interface ResultItem {
    basic_information: {
        artists: (ArtistsEntity)[];
        title: string;
        cover_image: string;
    }
}

interface ArtistsEntity {
    name: string;
}

interface AlbumInfo {
    coverImage: string;
    title: string;
    artist: string;
}

const getAlbumData = function () {
    // const url = `https://api.discogs.com/users/adarkknight/collection/folders/1/releases?per_page=${process.env.PER_PAGE}&token=${process.env.DISCOGS_TOKEN}`;
    // const options = {
    //     headers: {
    //         "User-Agent": "SpinMe/0.1",
    //     },
    //     "Cache-Control": "no-store",
    // };
    // const response = await fetch(url, options);
    // const data = await response.json();
    const releaseInfo = data;

    const formattedData = releaseInfo.map((item: ResultItem): AlbumInfo => {
        return {
            artist: item.basic_information.artists[0].name,
            title: item.basic_information.title,
            coverImage: item.basic_information.cover_image,
        }
    })
    return formattedData;
}

export default getAlbumData;