import config from "../config.json"

function HomePage() {
  return (
    <div>
        <Menu />
        <Header />
        <TimeLine />
    </div>
  ) 
}
export default HomePage;

function Menu() {
    return (
        <div>Menu</div>
    )
}


function Header(){
    return (
        <div>
            <img src="banner" />
            <img src={`https://github.com/${config.github}.png`} />
            {config.name}
            {config.job}
            {config.github}
        </div>
    )
}

function TimeLine(){
    return (
        <div>
            Timeline
        </div>
    )
}