import styled from "styled-components";
import { Swiper } from "swiper/react";

export const ProductSwiper = styled(Swiper)`
  width: 727px;
  max-height:  650px;
  overflow: scroll-x;

  .swiper-pagination {
    display: none;
  }

  .swiper-slide {
    flex-shrink: 1;
  }
`;