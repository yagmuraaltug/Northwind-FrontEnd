import React from 'react'
import { Button, Menu } from "semantic-ui-react";
export default function SignedOut({signIn}) {
    return (
        <div>
            <Menu.Item>
            <Button onClick={signIn} primary>LogIn</Button>
            <Button primary style={{marginLeft:"5px"}}>Register</Button>
            </Menu.Item>
        </div>
    )
}
