/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import styled, { css } from "styled-components";

import { mobile, tablet } from "../../../assets";
import love from "../../../assets/icons/love.png";
import defaultImg from "../../../assets/images/mypage/defaultImg.jpg";
import NoImage from "./NoImage";
import { recentPlace } from "./RecentDummyData";

const SContainer = styled.div`
  font-family: "ONE-Mobile-Regular";
  display: flex;
  overflow-x: hidden;
  flex-direction: column;
  width: 100%;
  margin-bottom: 40px;
  cursor: pointer;

  height: auto;
  padding: 20px 40px 20px 40px;

  @media (max-width: 900px) {
    justify-content: center;
    height: auto;
    width: 500px;
  }

  ${mobile(css`
    justify-content: center;
    width: 250px;
    height: auto;
    padding: 40px 0px 0px 25px;
  `)}
`;

const SItemContainer = styled.div`
  width: 690px;
  display: flex;
  overflow-x: auto;
`;

const SHeader = styled.div`
  display: flex;
  flex-direction: row;
  height: 10%;
  width: auto;
  padding-left: 10px;
  gap: 5px;
  margin-bottom: 15px;

  & > img {
    width: 24px;
    height: 24px;
  }
  & > div {
    font-size: 20px;
  }
`;

const SCardContainer = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
`;

const SCard = styled.div`
  width: 220px;
  height: 315px;
  margin: 5px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.black050};

  :hover {
    opacity: 0.6;
  }

  & > img {
    object-fit: cover;
    justify-content: space-between;
    width: 100%;
    height: 68%;
    flex-direction: column;
  }
`;

const STextInfo = styled.div`
  padding-top: 10px;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const SCategory = styled.div`
  font-weight: bold;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.orange500};
`;

const SAddress = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black400};
`;

const SStoreName = styled.div`
  font-size: 16px;
  line-height: 23px;
`;

const RecentList = () => {
  const cutStringLength = (str: string, maxLength: number) => {
    if (str === undefined || str === null) {
      return "";
    }
    if (str.length > maxLength) {
      str = `${str.substring(0, maxLength)}...`;
    }
    return str;
  };

  const getRecentList = window.localStorage.getItem("recentPlace");

  const localstorageData = getRecentList ? (
    JSON.parse(getRecentList)
  ) : (
    <NoImage
      title="최근 본 동반장소가 없습니다."
      body1="나의 반려동물들과 함께 다닐 수 있는"
      body2="다양한 펫 플레이스를 확인하세요!"
    />
  );
  // console.log(EmptyList);
  // console.log(localstorageData);
  return (
    <SContainer>
      <SHeader>
        <img sizes="24" alt="강아지아이콘" src={love} />
        <div>최근본동반장소</div>
      </SHeader>
      <SItemContainer>
        {localstorageData.length > 0
          ? localstorageData.map((place: any) => (
              <SCardContainer key={place.storeId}>
                <SCard>
                  <img
                    src={
                      place.storeImages.length >= 1
                        ? place.storeImages[0].storeImage
                        : defaultImg
                    }
                    alt="장소이미지"
                    key={place.storeId}
                  />
                  <STextInfo>
                    <SCategory>{place.category}</SCategory>
                    <SAddress>{place.addressName}</SAddress>
                    <SStoreName>
                      {cutStringLength(place.storeName, 13)}
                    </SStoreName>
                  </STextInfo>
                </SCard>
              </SCardContainer>
            ))
          : localstorageData}
      </SItemContainer>
    </SContainer>
  );
};

export default RecentList;
