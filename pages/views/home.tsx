import React from "react";
import { NextPage } from "next";
import FeedBox from "components/common/Feed/FeedBox";
import styled from "styled-components";

const S = styled.div`
  width: 100%;
  background-color: gray;
  border-radius: 10px;
  padding: 10px;
  height: 200px;
`;
const M = styled.div`
  width: 100%;
  background-color: gray;
  border-radius: 10px;
  padding: 10px;
  height: 300px;
`;
const L = styled.div`
  width: 100%;
  background-color: gray;
  border-radius: 10px;
  padding: 10px;
  height: 500px;
  @media only screen and (max-width: 768px) {
    height: 300px;
  }
`;

const A = styled.div`
  width: 100%;
  background-color: gray;
  border-radius: 10px;
  padding: 10px;
`;

const Img = styled.img`
  width: 100%;
`;

const Home: NextPage = () => {
  return (
    <FeedBox>
      <S />
      <M />
      <A>
        <Img src="https://kream-phinf.pstatic.net/MjAyMTExMDRfNzUg/MDAxNjM1OTk3MDI5MDkz.Xa-R3Eh7Et3M19bcL7DgDCTIssLUhM5jkWTNQk6mQdcg.F4zYIGMvOM647KW7KlgQLPmaj9hdgEpNS775JdWgUHsg.JPEG/p_75cface6b1af403ab1af00396a5c0dd9.jpg?type=m" />
      </A>
      <M />
      <S />
      <M />
      <M />
      <L />
      <M />
      <S />
      <M />
      <L />
      <M />
      <S />
      <M />
      <M />
      <L />
      <M />
      <M />
      <S />
      <M />
      <M />
      <L />
      <M />
      <S />
      <M />
      <L />
      <M />
      <S />
      <M />
      <M />
      <L />
      <M />
      <S />
      <M />
      <L />
    </FeedBox>
  );
};

export default Home;
