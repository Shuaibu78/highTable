import styled from "styled-components";
import { media } from "../styles/theme";

export const TopNavBackground = styled.div`
  background-color: ${props => props.theme.secondaryColor};
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TitleContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  ${media.mobile}{
    justify-content: center;
  }
`;

export const TopNavTitle = styled.h3`
  color: rgba(255, 244, 231, 0.8);
  font-size: ${props => props.theme.sm};
  margin: 0;

  ${media.mobile}{
    font-size: ${props => props.theme.xs};
  }
`;
