import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

export const InfoContainer = styled.div`
  text-align: center;
  margin-top: 75px;
}`;

export const PriceContainer = styled.div`
  text-align: center;
  padding: 70px 0;
  border: 1px solid #eaeaea;
  border-radius: 3px;
`;

export const ItemInfoContainer = styled.div`
  padding: 22px 10%;
  display: inline-block;
  width: 61%;
  border-bottom: 1px solid #eaeaea;
`;

export const Title = styled.h3`
  margin-bottom: 12px;
  font-family: OpenSans;
  font-weight: 600;
  color: #333333;
`;

export const Text = styled.p`
  font-family: OpenSans;
  font-size: 14px;
  line-height: 30px;
  font-weight: 400;
  color: #999999;
`;

export const TextContainer = styled.div`
  margin-bottom: 23px;
  border-top: 1px solid #eaeaea;
  border-bottom: 1px solid #eaeaea;
`;
