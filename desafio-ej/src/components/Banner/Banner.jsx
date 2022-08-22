import styled from "styled-components";

export const Cont = styled.div`
  display: flex;
  margin-top: 0;
  margin-bottom: 50px;

  width: 100%;
  max-height: 500px;

  > img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const Banner = () => {
  return (
    <Cont>
        <img src={`Banner.png`} alt="Banner" />
    </Cont>
  );
};

export default Banner;