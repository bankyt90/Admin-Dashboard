import { ChatBubbleOutlineOutlined, DarkModeOutlined, FullscreenExitOutlined, LanguageOutlined, ListOutlined, NotificationsNoneOutlined } from "@mui/icons-material"
import "./navbar.scss"
import  SearchOutlinedIcon from "@mui/icons-material/Search"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlined />
            English
          </div>
          <div className="item">
            <DarkModeOutlined/>
          </div>
          <div className="item">
            <FullscreenExitOutlined/>
          </div>
          <div className="item">
            <NotificationsNoneOutlined/>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlined/>
          </div>
          <div className="item">
            <ListOutlined/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar