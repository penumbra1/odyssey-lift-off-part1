import styled from "@emotion/styled";
import { LoadingSpinner } from "@apollo/space-kit/Loaders/LoadingSpinner";
import { ReactElement } from "react";

interface Props {
  loading?: boolean;
  error?: Error;
  data?: object;
  children?: ReactElement;
}

/**
 * Query Results conditionally renders Apollo useQuery hooks states:
 * loading, error or its children when data is ready
 */
const QueryResult = ({ loading, error, data, children }: Props) => {
  if (error) {
    return <p>ERROR: {error.message}</p>;
  }

  if (loading) {
    return (
      <SpinnerContainer>
        <LoadingSpinner data-testid="spinner" size="large" theme="grayscale" />
      </SpinnerContainer>
    );
  }
  if (!data) {
    return <p>Nothing to show...</p>;
  }

  return children ?? null;
};

export default QueryResult;

/** Query Result styled components */
const SpinnerContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh",
});
