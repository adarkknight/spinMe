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

const getAlbumData = async function () {
    const url = `https://api.discogs.com/users/adarkknight/collection/folders/1/releases?token=${process.env.DISCOGS_TOKEN}`;
    const options = {
        headers: {
            "User-Agent": "SpinMe/0.1",
        },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    const releaseInfo = data.releases;

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