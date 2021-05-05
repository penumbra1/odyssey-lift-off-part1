import { gql } from "@apollo/client";
import { RouteComponentProps } from "@reach/router";
import { Layout, QueryResult } from "../components";
import TrackCard from "../containers/track-card";
import { useTracksQuery } from "../generated/graphql";

export const TRACKS = gql`
  query Tracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        id
        name
        photo
      }
    }
  }
`;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = (props: RouteComponentProps) => {
  const { loading, error, data } = useTracksQuery();

  return (
    <Layout grid>
      <QueryResult loading={loading} error={error} data={data}>
        {data?.tracksForHome?.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
