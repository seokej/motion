import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { EbComponentStyle } from "@/styles/EbComponentStyle";

const EbComponentJs = () => {
  gsap.registerPlugin(ScrollTrigger);

  const section1Ref = useRef();
  const section2Ref = useRef();
  const section3Ref = useRef();
  const pinDistance = 1000;

  // let texts = gsap.set(".section2 p", { autoAlpha: 0 });
  // let texts = gsap.utils.toArray(".text p");
  const texts = gsap.utils.toArray(".text p");
  let transitionDuration = 0.5;
  let stayDuration = 1;

  texts.forEach((texts, i) => {
    let text = texts[i],
      time = (transitionDuration + stayDuration) * i;
    if (i) {
      tl.to(
        texts[i - 1],
        {
          autoAlpha: 0,
          y: -50,
          ease: "power1.in",
          duration: transitionDuration,
        },
        time
      );
    }
    tl.fromTo(
      [text],
      { autoAlpha: 0, y: 100 },
      { autoAlpha: 1, y: 0, stagger: 0.2 },
      time
    );
  });
  tl.to({}, { duration: stayDuration }); // dummy tween to fill space at the end.

  useEffect(() => {
    var sections = gsap.utils.toArray("section");

    const sectionAni = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "ease",
      scrollTrigger: {
        trigger: section1Ref.current,
        pin: true,
        markers: true,
        scrub: 1,
        end: "+=" + pinDistance,
      },
    });

    return () => sectionAni.revert(); // clean up
  }, []); // <- Scope!

  useEffect(() => {
    let sections = gsap.utils.toArray(".section1");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "ease",
      scrollTrigger: {
        trigger: section1Ref.current,
        pin: true,
        markers: true,
        scrub: 1,
        end: "+=" + pinDistance,
      },
    });

    gsap.to(section2Ref.current, {
      scrollTrigger: {
        trigger: section2Ref.current,
        markers: true,
        start: "center center",
      },
    });

    gsap.to(section3Ref.current, {
      scrollTrigger: {
        trigger: section3Ref.current,
        markers: true,
        start: "center center",
      },
    });
  }, []);

  return (
    <EbComponentStyle>
      {/* <header>
        <nav>
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
        </nav>
      </header> */}
      <section className="section1" ref={section1Ref}>
        <video loop autoPlay muted playsInline className="vid">
          {/* ios,safari용 video source */}
          <source
            src="/images/eb/Archivo-VariableFont_Medium_C_PC.mp4"
            type="video/mp4"
          />

          {/* 768px 이하 */}
          <source
            src="/images/eb/Archivo-VariableFont_Medium_C_MO.mp4"
            type="video/mp4"
            media="(max-width:768px)"
          />
        </video>
      </section>

      <section className="section2" ref={section2Ref}>
        <p className="section2-text1">
          DATA ID는 나만의 데이터 아이덴티티입니다.
        </p>
        <p className="section2-text2">
          이용자 개인이 데이터 소유권을 갖고 언제 어디서든 나를 증명하는 데이터
          패스포트이자
        </p>
        <p>다양한 서비스 이용을 가능하게 하는 패스워드리스 접속 방식입니다.</p>
        <p className="section2-text3">
          증명하기 어려운 개인의 창작 활동과 프리랜서 경험을 보호하고 신뢰할
          만한 자산으로 측정하기 위해서는 어떻게 관리해야 할까요?
        </p>
      </section>

      <section className="section3" ref={section3Ref}>
        <img src="/images/eb/img-showcase01-pc.jpg" alt="기록하는모습" />
        <p className="section3-text1">기록하고</p>
        <p className="section3-text2">증명하고</p>
        <p className="section3-text3">성장하기</p>
        <img src="/images/eb/img-showcase02-pc.jpg" alt="플룻" />
        <img src="/images/eb/img-showcase03-pc.jpg" alt="자전거" />
        <p>
          엔터프라이즈블록체인은 블록체인 네트워크 <br />
          DATA ID를 활용해 그 문제를 해결하고 새로운 방식을 <br />
          제안하고자 합니다.
        </p>
      </section>
    </EbComponentStyle>
  );
};

export default EbComponentJs;
