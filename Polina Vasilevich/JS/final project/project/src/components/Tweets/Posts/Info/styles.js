import styled from "styled-components";

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContentContainer = styled.div`
  display: flex;
`;

const setBackgroundImageAvatar = (props) =>
  props.backgroundImage
    ? `background: url(${props.backgroundImage}) center center`
    : "";

export const Avatar = styled.div`
  margin-right: 20px;

  height: 51px;
  width: 51px;

  border-radius: 50%;
  ${setBackgroundImageAvatar};
  background-size: cover;
`;

export const TagsContainer = styled.div``;
