import React from "react";
import "react-awesome-slider/dist/styles.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseReferencesIndex,
  increaseReferencesIndex,
} from "../../redux/actions";
import { DecoratedText } from "../atoms/decorated-text";
import { SectionParagraph } from "../atoms/section-paragraph";
import { referencesData } from "./referencesData";
import {
  ItemWrapper,
  ReferencesWrapper,
  StyledArrow,
  StyledLi,
  StyledUl,
} from "./StyledReferences";
import { SectionTitle } from "../atoms/section-title";

const References = () => {
  const SelectedReferencesIndex = useSelector((state) => state.referencesIndex);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <ReferencesWrapper>
          <ItemWrapper
            onClick={() => {
              dispatch(decreaseReferencesIndex());
            }}
          >
            <StyledArrow>v</StyledArrow>
          </ItemWrapper>
          <div>
            <DecoratedText isAlignedCenter>Talking about us</DecoratedText>
            <SectionTitle isAlignedCenter>References</SectionTitle>
            <StyledUl>
              {referencesData.map((item, i) => {
                return (
                  <StyledLi
                    className={i === SelectedReferencesIndex && "isActive"}
                  >
                    <DecoratedText>{item.content}</DecoratedText>
                    <SectionParagraph>{item.name}</SectionParagraph>
                  </StyledLi>
                );
              })}
            </StyledUl>
          </div>

          <ItemWrapper>
            <StyledArrow
              right
              onClick={() => {
                dispatch(increaseReferencesIndex());
              }}
            >
              v
            </StyledArrow>
          </ItemWrapper>

          {/* <SectionParagraph>
            {referencesData[SelectedReferencesIndex].content}
          </SectionParagraph>
          <DecoratedText>
            {referencesData[SelectedReferencesIndex].name};
          </DecoratedText> */}
        </ReferencesWrapper>
        {/* <span
          onClick={(e) => {
            dispatch(changeReferencesIndex());
            // e.target.animate(animation, animationDetails);
          }}
        >
          ++++
        </span> */}
      </div>
    </>
  );
};

export default References;
