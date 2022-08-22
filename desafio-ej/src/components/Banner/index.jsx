import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Cont = styled.div`
  display: flex;
  margin-top: 25px;
  margin-bottom: 50px;

  > img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const Banner = () => {
  return (
    <Cont>
        <img src={`banner.png`} alt="Banner" />
    </Cont>
  );
};

export default Banner;