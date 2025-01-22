import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faYoutube, faLine, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../styles/components/Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-inner inner'>
        {/* 첫 번째 섹션*/}
        <div className='footer-section'>
          <Link className='footer-logo'><img src="/assets/images/logo.png" alt="로고" /></Link>
          <p>
            법인명: 굿디몰디자인 대표자: 굿디몰디자인 <br />
            사업자등록번호: 202-67-00083 [사업자정보확인]
            통신판매업 신고 2016-성남분당-0137 <br />
            전화: 031-628-6380 팩스: 031-628-6381 <br />
            주소: 13494 경기 성남시 분당구 대왕판교로 670 유스페이스2 <br />
            개인정보관리책임: 굿디몰디자인(help@goodymall.co.kr) <br />
            Hosting by 가제24 Copyright © 2022 굿디몰디자인. All rights reserved.
            Designed by Goodymall <br />
          </p>
        </div>
        {/* 두 번째 섹션*/}
        <div className='footer-section'>
          <h3>고객문의 대표전화</h3>
          <p className='footer-phone'>031-628-6380</p>
          <p>입금계좌안내</p>
          <p>우리 1002-355-664254</p>
          <p>신한 1234-123-123456</p>
          <p>예금주: 굿디몰디자인</p>
        </div>
        {/* 세 번째 섹션*/}
        <div className='footer-section'>
          <ul>
            <li><Link>회사소개</Link></li>
            <li><Link>이용약관</Link></li>
            <li><Link>개인정보처리방침</Link></li>
            <li><Link>이용안내</Link></li>
          </ul>
          <div className='footer-icons'>
            <span><FontAwesomeIcon icon={faFacebookF} /></span>
            <span><FontAwesomeIcon icon={faInstagram} /></span>
            <span><FontAwesomeIcon icon={faLine} /></span>
            <span><FontAwesomeIcon icon={faYoutube} /></span>
          </div>
        </div>

        {/* 오른쪽 고정 */}
        <div className='footer-scroll'>
          <div className="scroll-btn">
            <Link><FontAwesomeIcon icon={faChevronUp} /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer