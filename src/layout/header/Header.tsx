import React, {useState} from 'react';
import {HeaderMenu} from "./HeaderMenu";
import Icon from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";
import {MobileMenu} from "./MobileMenu";
import {S} from './Header_Styles';

export const Header: React.FC = () => {
    let menuItems = ['Home', 'Work', 'Contact']

    let [width, setWidth] = useState(window.innerWidth)
    const breakpoint = 768

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleWindowResize)

        return () => window.removeEventListener('resize', handleWindowResize)
    }, [])

    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <S.NavLink to={'home'}>
                        <S.Logo>
                            <Icon iconId='logo' viewBox={'0 0 40 40'} width={'40'} height={'40'}/>
                            <S.Title>Portfolio</S.Title>
                        </S.Logo>
                    </S.NavLink>
                    {width < breakpoint ? <MobileMenu menuItems={menuItems}/> : <HeaderMenu menuItems={menuItems}/>}
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};

