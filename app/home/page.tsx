import Hero from '../hero'
import getAlbumData from '../api/getAlbumData';

export default async function Home() {
  const data = await getAlbumData();
  return (
    <main>
      <Hero data={data} />
    </main>
  )
}
