import React from "react";
import styled from "styled-components";

const HorizontalMargin = styled.span<{margin: string}>`
  display: flex;
  width: ${({ margin }) =>
    typeof margin === "string" ? margin : `${margin}px`};
`;

const VerticalMargin = styled.span<{margin: string}>`
  display: flex;
  height: ${({ margin }) =>
    typeof margin === "string" ? margin : `${margin}px`};
`;

function Marginer(props: any) {
  const { direction } = props;

  if (direction === "horizontal") return <HorizontalMargin {...props} />;
  else {
    return <VerticalMargin {...props} />;
  }
}

Marginer.defaultProps = {
  direction: "horizontal",
};

export { Marginer };