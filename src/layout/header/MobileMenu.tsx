import React from 'react';
import { S } from './Header_Styles';
import {Menu} from "./Menu";

type MobileMenuPropsType = {
    menuItems: Array<string>
}

export const MobileMenu: React.FC<MobileMenuPropsType> = (props) => {
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={false}>
                <span></span>
            </S.BurgerButton>
            <S.StyledPopup isOpen={false}>
                <Menu menuItems={props.menuItems}/>
            </S.StyledPopup>
        </S.MobileMenu>
    );
};