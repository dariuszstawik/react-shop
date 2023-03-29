import styled from "styled-components";
import { ReactComponent as SproutSvg } from "./sprout.svg";
import { ReactComponent as DeliverySvg } from "./delivery.svg";
import { ReactComponent as SatisfactionSvg } from "./happy-face.svg";
import { ReactComponent as PaymentSvg } from "./payment.svg";

export const StyledDeliverySvg = styled(DeliverySvg)`
  width: 160px;
  height: 160px;
`;

export const StyledSproutSvg = styled(SproutSvg)`
  width: 70px;
  height: 70px;
`;

export const StyledSatisfactionSvg = styled(SatisfactionSvg)`
  width: 70px;
  height: 70px;
`;

export const StyledPaymentSvg = styled(PaymentSvg)`
  width: 70px;
  height: 70px;
`;

export const StyledSectionWrapper = styled.div`
  width: 100%;
  padding: 100px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.lightGray};

  @media (min-width: ${({ theme }) => theme.media.desktop}) {
    flex-direction: row;
    justify-content: space-around;
    align-items: stretch;
  }
`;

export const StyledItemWrapper = styled.div`
  min-width: 200px;
  margin-bottom: 7%;
  display: grid;
  grid-template-rows: 40% 1fr;
  @media (min-width: ${({ theme }) => theme.media.desktop}) {
    max-width: 17%;
    margin-bottom: 0;
  }
`;

export const StyledImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledItemContent = styled.div``;

export const StyledTitle = styled.h3`
  text-transform: uppercase;
  text-align: center;
`;

export const StyledParagraph = styled.p`
  line-height: 1.7em;
  text-align: center;
`;
