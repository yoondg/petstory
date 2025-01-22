import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/pages/CommunityPage.css';

const communityData = {
  "공지사항": {
    title: "공지사항",
    description: "펫스토리의 최신 공지사항을 확인하세요.",
    posts: [
      { id: 1, title: "2024년 신제품 출시 안내", date: "2024-12-01" },
      { id: 2, title: "반려동물 돌봄 캠페인 참여", date: "2024-11-20" }
    ]
  },
  "사용후기": {
    title: "상품 사용후기",
    description: "고객님들의 생생한 사용 후기를 만나보세요.",
    posts: [
      { id: 1, title: "마약방석 최고예요!", date: "2024-12-03" },
      { id: 2, title: "사료가 정말 신선하고 좋아요", date: "2024-11-25" }
    ]
  },
  "Q&A": {
    title: "상품 Q&A",
    description: "궁금한 점은 여기에 물어보세요.",
    posts: [
      { id: 1, title: "배송 관련 문의", date: "2024-11-18" },
      { id: 2, title: "제품 보증기간은 어떻게 되나요?", date: "2024-11-15" }
    ]
  },
  "자유게시판": {
    title: "자유게시판",
    description: "반려동물과 관련된 다양한 이야기를 나눠보세요.",
    posts: [
      { id: 1, title: "우리 집 강아지 이야기", date: "2024-12-04" },
      { id: 2, title: "고양이 장난감 추천!", date: "2024-11-29" }
    ]
  },
  "이벤트": {
    title: "이벤트",
    description: "현재 진행 중인 이벤트를 확인하세요.",
    posts: [
      { id: 1, title: "12월 크리스마스 특가 이벤트", date: "2024-12-01" },
      { id: 2, title: "반려동물 사료 체험단 모집", date: "2024-11-10" }
    ]
  }
};

const CommunityPage = () => {
  const { type } = useParams();
  const community = communityData[type];

  if (!community) {
    return <p>존재하지 않는 페이지입니다.</p>;
  }

  return (
    <div className="community-page">
      <h1>{community.title}</h1>
      <p className="description">{community.description}</p>
      <ul className="posts">
        {community.posts.map((post) => (
          <li key={post.id} className="post">
            <h2>{post.title}</h2>
            <p>{post.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommunityPage;
