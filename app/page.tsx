import Image from 'next/image'
import Hero from './hero'

// interface ArtistsEntity {
//   name: string;
// }

// interface AlbumInfo {
//       cover_image: string;
//       title: string;
//       artists?: (ArtistsEntity)[] | null;
//     }

async function fetchData() {
  const url = `https://api.discogs.com/users/adarkknight/collection/folders/1/releases?token=${process.env.DISCOGS_TOKEN}`;
  const options = {
    headers: {
      "User-Agent": "SpinMe/0.1",
    },
  };
  const response = await fetch(url, options);
  const data = await response.json();
  const releaseInfo = data.releases;

  const formattedData = releaseInfo.map((item) => {
    return {
      artist: item.basic_information.artists[0].name,
      title: item.basic_information.title,
      coverImage: item.basic_information.cover_image,
    }
  })
  return formattedData;


}

export default async function Home() {
  const data = await fetchData();
  return (
    <main>
      <Hero data={data} />
    </main>
  )
}
