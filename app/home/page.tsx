import Hero from '../hero'
import getAlbumData from '../api/getAlbumData';
import { currentUser } from '@clerk/nextjs';

export default async function Home() {
  const user = await currentUser();
  const discogsToken = user?.privateMetadata.discogsToken as string;
  const discogsUserId = user?.privateMetadata.discogsUserId as string;
  const data = await getAlbumData(discogsToken, discogsUserId);
  
  return (
    <main>
      <Hero data={data} />
    </main>
  )
}
