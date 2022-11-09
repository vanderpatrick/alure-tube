import config from "../config.json";
import styled from "styled-components";


function HomePage() {
  return (
    <div>
      <Menu />
      <Header />
      <TimeLine playlists={config.playlist} />
    </div>
  );
}
export default HomePage;

function Menu() {
  return <div>Menu</div>;
}

const Styledheader = styled.div`
  img {
    height: 80px;
    width: 80px;
    border-radius: 50%;
  }
  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;

function Header() {
  return (
    <Styledheader>
      {/* <img src="banner" /> */}
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </Styledheader>
  );
}

function TimeLine(props) {
  return <div>Timeline</div>;
}
