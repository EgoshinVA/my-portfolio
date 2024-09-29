import React from 'react';

type MenuPropsType = {
    menuItems: Array<string>
}

export const Menu: React.FC<MenuPropsType> = (props) => {
    return (
        <ul>
            {props.menuItems.map((item, index) =>
                <li key={index}>
                    <a href=''>
                        {item}
                    </a>
                </li>
            )}
        </ul>
    );
};