import styled from "@emotion/styled";

export const EbComponentStyle = styled.div`
  width: 100%;
  height: 100dvh;
  margin: 0;
  color: white;
  font-family: "Noto Sans KR", sans-serif;

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 100px;
    font-size: 18px;
    font-weight: 600;

    .nav {
      display: flex;
      align-items: center;

      .nav-link {
        display: flex;
        align-items: center;
        padding: 23px 25px;
      }
    }
  }

  section {
    background-color: black;
  }

  .section3 {
    width: 100%;

    img {
      max-width: 100%;
      height: auto;
    }
  }
`;
