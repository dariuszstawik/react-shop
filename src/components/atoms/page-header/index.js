import React from "react";
import { SectionTitle } from "../section-title";
import { StyledPageHeader } from "./StyledPageHeader";

const PageHeader = ({ content }) => {
  return (
    <StyledPageHeader>
      <SectionTitle>{content}</SectionTitle>
    </StyledPageHeader>
  );
};

export default PageHeader;
