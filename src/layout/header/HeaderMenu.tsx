import React from 'react';
import { S } from './Header_Styles';
import {Menu} from "./Menu";

type HeaderMenuPropsType = {
    menuItems: Array<string>
}

export const HeaderMenu: React.FC<HeaderMenuPropsType> = (props) => {
    return (
        <S.HeaderMenu>
            <Menu menuItems={props.menuItems}/>
        </S.HeaderMenu>
    );
};