import styled from 'styled-components';
import { Search } from '../Search/Search';

const HeaderBox = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding: 10px 100px;
    border-bottom: 1px solid #e2e2e2;
    margin-bottom: 20px;
    @media screen and (min-width: 769px) {
        padding: 10px 100px;
    }
    
    @media screen and (min-width: 481px) and (max-width: 768px) { 
        padding: 10px 20px;
    }
    
    @media only screen and (max-width: 480px) {
        padding: 10px;
    }
`

const LeftBox = styled.div`
    font-family: fantasy;
    font-size: 20px;
    letter-spacing: 2px;
`

const RightBox = styled.div`
    font-size: 16px;
    font-family: fantasy;
    letter-spacing: 1px;
    cursor: pointer;
`

type HeaderProps = {
    title? : string
}

export const Header = (props: HeaderProps) => {
    const showNavigation = props.title ? false : true;
    return (
        <HeaderBox>
            <LeftBox>
                {props.title ? props.title : 'Instagram'}
            </LeftBox>
            {
                showNavigation && <>
                    <a href="/liked">
                        <RightBox>
                            View Liked Photos
                        </RightBox>
                    </a>
                </>
            }
        </HeaderBox>
    )
}