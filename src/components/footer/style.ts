import styled from 'styled-components'

export const Container = styled.footer`
    margin-top: 10vh;
    height: 30vh;
    display: flex;
    flex-direction: column;
    background-color: #2B2C2D;

    > p {
        align-self: center;
        color: #FFFFFF;
        
        > a svg {
            font-size: 1.5rem;
            margin-left: 1rem;
            cursor: pointer;
            transition: color .5s;
            color: #FFFFFF;

            &:hover {
                color: purple;
            }
        }
    }
`

export const Logo = styled.div`
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: flex-end;
    
  > img {
    width: 100px;
    height: auto;
  }

  > h2 {
    text-transform: uppercase;
    font-family: 'Kalam';
    color: #FFFFFF
  }
`

export const About = styled.ul`
  align-self: center;
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  gap: 1rem;
  color: #FFFFFF
`
export const Items = styled.li`
  font-size: 1.3rem;
  cursor: pointer;
  font-weight: bold;
  transition: filter .5s ease;

  &:hover {
    filter: opacity(70%)
  }
`

export const SocialMedias = styled.div`
    display: flex;
    gap: 2rem;
    align-self: center;
    color: #FFFFFF;
    padding: 0 0 1.8rem 0;

    > svg {
        font-size: 1.7rem;
        cursor: pointer;
        transition: filter .5s ease;

        &:hover {
            filter: opacity(70%)
        }
    }
`