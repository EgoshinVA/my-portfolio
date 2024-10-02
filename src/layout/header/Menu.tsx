import React from 'react';
import { S } from './Header_Styles';

type MenuPropsType = {
    menuItems: Array<string>
}

export const Menu: React.FC<MenuPropsType> = (props) => {
    return (
        <ul>
            {props.menuItems.map((item, index) =>
                <li key={index}>
                    <S.NavLink to={item.toLowerCase()} smooth={true} isDynamic={true}>
                        {item}
                    </S.NavLink>
                </li>
            )}
        </ul>
    );
};