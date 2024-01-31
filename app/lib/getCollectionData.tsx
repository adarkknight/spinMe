import { ResultItem, AlbumInfo, PaginationInfo } from "./definitions";

const getCollectionData = async function (page: string, token: string, userId: string) {
    let dataArray = [];
    const url = `https://api.discogs.com/users/${userId}/collection/folders/1/releases?page=${page}&per_page=${process.env.PER_PAGE_MIN}&sort=artist&sort_order=asc&token=${token}`;

    const options = {
        headers: {
            "User-Agent": "SpinMe/0.1",
            "Cache-Control": "no-store",
        },
        
    };
    const response = await fetch(url, options);
    const data = await response.json();
    const releaseInfo = data.releases;
    const paginationData: PaginationInfo = {
        page: data.pagination.page,
        pages: data.pagination.pages,
        items: data.pagination.items
    };

    const formattedData = releaseInfo.map((item: ResultItem): AlbumInfo => {
        return {
            artist: item.basic_information.artists[0].name,
            title: item.basic_information.title,
            coverImage: item.basic_information.cover_image,
        }
    })

    dataArray = [paginationData, formattedData];

    return dataArray;
}

export default getCollectionData;