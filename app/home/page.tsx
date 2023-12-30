import Hero from '../hero'
import getAlbumData from '../api/getAlbumData';
import { currentUser } from '@clerk/nextjs';
import Placeholder from './placeholder';

export default async function Home() {
  let authorized = false;
  let discogsToken;
  let discogsUserId;
  let data;
  const user = await currentUser();

  if (user?.privateMetadata.discogsToken && user?.privateMetadata.discogsUserId) {
    authorized = true;
    discogsToken = user?.privateMetadata.discogsToken as string;
    discogsUserId = user?.privateMetadata.discogsUserId as string;
    data = await getAlbumData(discogsToken, discogsUserId);
  }

  return (
    <main>
      {authorized ? (
        <Hero data={data} />
      ) : (
        <Placeholder />
      )

      }

    </main>
  )
}
