import { ResultItem, AlbumInfo } from "./definitions";

const getAlbumData = async function (token: string, userId: string) {
    const url = `https://api.discogs.com/users/${userId}/collection/folders/1/releases?per_page=${process.env.PER_PAGE_MAX}&token=${token}`;
    const options = {
        headers: {
            "User-Agent": "SpinMe/0.1",
            "Cache-Control": "no-store",
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