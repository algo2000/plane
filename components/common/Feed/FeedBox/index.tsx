import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useSize from "@react-hook/size";

type FeedType = {
  feedWidth: number;
  feedLeftList: number[];
  feedTopList: number[];
};

type props = {
  children: JSX.Element[];
};

const Card = styled.div<{ width: number; top: number; left: number }>`
  width: ${(props) => props.width}px;
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  border-radius: ${(props) => props.theme.commonStyle.borderRadius.default}px;
`;

const Box = styled.div<{ height?: number }>`
  position: relative;
  padding: 0px 40px;
  height: ${(props) => props.height}px;
  @media only screen and (max-width: 768px) {
    padding: 0px 8px;
  }
`;

export default function FeedBox({ children }: props): JSX.Element {
  const boxModalEl = useRef<HTMLDivElement>(null);
  const [boxWidth] = useSize(boxModalEl);
  const [feedData, setFeedData] = useState<FeedType>({
    feedWidth: 0,
    feedTopList: [],
    feedLeftList: [],
  });

  const [hight, setHeight] = useState<number>(0);

  let itemTop: number[] = [];

  useEffect(() => {
    if (boxWidth) {
      setFeedData(getColWidth(boxWidth, 8, 8));
    }
  }, [boxWidth]);

  useEffect(() => {
    return () => {
      console.log(itemTop);
      setHeight(Math.max(...itemTop));
    };
  }, []);

  return (
    <Box ref={boxModalEl}>
      {children.map((Element: JSX.Element, index) => {
        if (index == 0) {
          itemTop = [...feedData.feedTopList];
        }
        const modalEl = useRef<HTMLDivElement>(null);
        const colI = itemTop.indexOf(Math.min(...itemTop));
        const left: number = feedData.feedLeftList[colI];
        const top = itemTop[colI];
        if (modalEl.current) {
          itemTop[colI] += modalEl.current?.clientHeight + 20;
        }
        return (
          <Card
            width={feedData.feedWidth}
            top={top}
            left={left}
            key={index}
            ref={modalEl}
          >
            {Element}
          </Card>
        );
      })}
    </Box>
  );
}

const getColWidth = (
  width: number,
  sideMargin: number,
  betweenMargin: number
): FeedType => {
  let colCount = 2;

  if (width > 768) {
    sideMargin = sideMargin * 5;
    betweenMargin = betweenMargin * 2;
    colCount = 4;
  }

  if (width > 1280) {
    width = 1280;
  }

  const feedWidth: number =
    (width - sideMargin * 2 - betweenMargin * (colCount - 1)) / colCount;

  const feedLeftList: number[] = [];

  for (let i = 0; i < colCount; i++) {
    feedLeftList.push(sideMargin + i * feedWidth + i * betweenMargin);
  }

  const feedTopList: number[] = new Array(colCount).fill(0);

  const returnData: FeedType = { feedWidth, feedLeftList, feedTopList };

  return returnData;
};
