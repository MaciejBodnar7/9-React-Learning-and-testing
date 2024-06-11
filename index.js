import React from "react"
import ReactDOM from "react-dom/client"
import Toggle from "./components/Toggle/index"
import { BsStar, BsStarFill } from "react-icons/bs"

import Menu from "./components/Menu/index"

function App() {
  return (
    <>
      <Toggle>
        <Toggle.Button>
          <Toggle.On>
            <BsStarFill className="star filled" />
          </Toggle.On>
          <Toggle.Off>
            <BsStar className="star" />
          </Toggle.Off>
        </Toggle.Button>
      </Toggle>

      <Menu>
        <Toggle>
          <Toggle.Button>
            <Menu.Button>Menu</Menu.Button>
          </Toggle.Button>
          <Toggle.On>
            <Menu.Dropdown>
              <Menu.Item>first</Menu.Item>
              <Menu.Item>second</Menu.Item>
              <Menu.Item>third</Menu.Item>
            </Menu.Dropdown>
          </Toggle.On>
        </Toggle>
      </Menu>
    </>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)
