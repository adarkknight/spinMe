import Hero from "../hero";
import getAlbumData from "../lib/getAlbumData";
import { currentUser } from "@clerk/nextjs";
import Placeholder from "./placeholder";
import placeHolderData from "../lib/placeholder-data"

export default async function Home() {
  let authorized = false;
  let discogsToken;
  let discogsUserId;
  let data;
  const user = await currentUser();

  if (
    user?.privateMetadata.discogsToken &&
    user?.privateMetadata.discogsUserId
  ) {
    authorized = true;
    discogsToken = user?.privateMetadata.discogsToken as string;
    discogsUserId = user?.privateMetadata.discogsUserId as string;
    data = await getAlbumData(discogsToken, discogsUserId);
  } else {
    // For demo purposes, if user is not authorized with Discogs,
    // show hardcoded data
    data = placeHolderData;
  }

  // To Do: Place holder for discogs syncing
  // return <main>{authorized ? <Hero data={data} /> : <Placeholder />}</main>;
  return (
    <main>
      <Hero data={data} />
    </main>
  );
}
