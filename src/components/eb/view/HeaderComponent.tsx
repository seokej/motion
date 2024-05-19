import React from "react";
import { HeaderComponentStyle } from "../style/HeaderComponentStyle";
import Image from "next/image";

type Props = {};

const HeaderComponent = (props: Props) => {
  return (
    <HeaderComponentStyle>
      <div className="logo">
        <Image
          src="/images/eb/ebc_logo.svg"
          width={100}
          height={100}
          alt="logo"
        />
      </div>
      <div>
        <ul className="nav">
          <li>
            <a href="#" className="nav-link">
              시나리오보기
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              제휴문의
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill-rule="nonzero" fill="none">
                  <path
                    stroke="#FFF"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 15h5v5H4zM9 15h5v5H9zM14 15h5v5h-5zM14 5h5v5h-5zM14 10h5v5h-5zM9 10h5v5H9zM4 10h5v5H4z"
                  ></path>
                </g>
              </svg>
              KR
            </a>
          </li>
        </ul>
      </div>
    </HeaderComponentStyle>
  );
};

export default HeaderComponent;
