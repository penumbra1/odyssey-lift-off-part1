import { render, RenderOptions } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MockedProvider, MockedProviderProps } from "@apollo/client/testing";
import { ReactNode } from "react-markdown";

const renderApollo = (
  node: ReactNode,
  {
    mocks,
    addTypename,
    defaultOptions,
    cache,
    resolvers,
    ...options
  }: Pick<
    MockedProviderProps,
    "mocks" | "addTypename" | "defaultOptions" | "cache" | "resolvers"
  > &
    RenderOptions
) => {
  return render(
    <MockedProvider
      mocks={mocks}
      addTypename={addTypename}
      defaultOptions={defaultOptions}
      cache={cache}
      resolvers={resolvers}
    >
      {node}
    </MockedProvider>,
    options
  );
};

export * from "@testing-library/react";
export { renderApollo };
