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

interface PaginationInfo {
    page: string,
    pages: number,
    items: number,
}

const getCollectionData = async function (page: string) {
    let dataArray = [];
    const url = `https://api.discogs.com/users/adarkknight/collection/folders/1/releases?page=${page}&per_page=${process.env.PER_PAGE_MIN}&sort=artist&sort_order=asc&token=${process.env.DISCOGS_TOKEN}`;

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