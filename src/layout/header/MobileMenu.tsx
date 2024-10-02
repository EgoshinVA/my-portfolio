import React, {useState} from 'react';
import { S } from './Header_Styles';
import {Menu} from "./Menu";

type MobileMenuPropsType = {
    menuItems: Array<string>
}

export const MobileMenu: React.FC<MobileMenuPropsType> = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={isOpen} onClick={()=>{setIsOpen(!isOpen)}}>
                <span></span>
            </S.BurgerButton>
            <S.StyledPopup isOpen={isOpen} onClick={()=>{setIsOpen(!isOpen)}}>
                <Menu menuItems={props.menuItems}/>
            </S.StyledPopup>
        </S.MobileMenu>
    );
};