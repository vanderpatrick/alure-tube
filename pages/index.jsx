import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
  return (
    <>
      <CSSReset />
      <div>
        <Menu />
        <Header />
        <TimeLine playlists={config.playlists} />
      </div>
    </>
  );
}
export default HomePage;

const Styledheader = styled.div`
  img {
    height: 80px;
    width: 80px;
    border-radius: 50%;
  }
  .user-info {
    margin-top: 50px;
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
  const playListNames = Object.keys(props.playlists);
  return (
    <StyledTimeline>
      {playListNames.map((playlistname) => {
        const video = props.playlists[playlistname];
        return (
          <section>
            <h2>{playlistname}</h2>
            <div>
              {video.map((video) => {
                return (
                  <a href={video.url}>
                    <img src={video.thumb} />
                    <span>{video.title}</span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}
