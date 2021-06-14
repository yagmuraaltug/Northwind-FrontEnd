import React from "react";
import { Image, Menu, Dropdown } from "semantic-ui-react";

export default function SingedIn({signOut}) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://res.cloudinary.com/rain-consultancy/image/upload/v1623170183/npgs3xglhwbgxccigxdd.png"
        ></Image>
        <Dropdown pointing="top left" text="Yagmur">
          <Dropdown.Menu>
            <Dropdown.Item  text="Informations" icon="info"></Dropdown.Item>
            <Dropdown.Item onClick={signOut} text="LogOut" icon="sign-out"></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
