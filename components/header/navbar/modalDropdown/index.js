import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { debounce, uniqueId } from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

import { Container } from '../../../common'
import LinkRenderer from '../../../common/utility/linkRenderer'

const NavElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  z-index: auto;
  align-self: center;
  cursor: pointer;
`

const NavElement = styled.div`
  z-index: auto;
  font-family: Arimo;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.04em;
  text-align: left;
  color: white;
  margin: 0px;
`

const SubNavElement = styled.p`
  font-family: Arimo;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.04em;
  text-align: left;
  color: white;
  margin: 0px;
  margin-left: 20px;
`

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border-radius: 26px;
  background-color: #434AB0;
  padding: 25px;
  height: auto;
  min-width: 200px;
  z-index: 1;
  box-shadow: -5px 5px 10px -6px black;
  position: fixed;
  margin: 45px auto;
`

const Title = styled.p`
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Knockout;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 45px;
  letter-spacing: 0.04em;
  text-align: center;
  color: #D9584B;
  margin: 0 10px;
`
  
const renderSubNavElements = subNavElements => subNavElements.map(subNavElement => {
  const { name, url } = subNavElement
  const key = uniqueId(name)
  return (
    <SubNavElement key={key}>
      <LinkRenderer url={url}>
        {name}
      </LinkRenderer>
    </SubNavElement>
  )
})

const renderNavElement = navElement => {
  const { name, url, subNavElements } = navElement
  const key = uniqueId(name)
  return (
    <NavElement key={key}>
      <LinkRenderer url={url}>
        {name}
      </LinkRenderer>
      {subNavElements &&
        renderSubNavElements(subNavElements)
      }
    </NavElement>
  )
}

const ModalDropdown = ({ title, url, navOptions }) => {  
  const key = uniqueId(title)
  const [isShown, setIsShown] = useState({ shown: false, key: '' })
 
  const debouncedHandleMouseEnter = () => {
    console.log("run in")
    return debounce(() => setIsShown({ shown: true, key }), 250)
  }
      
  const handleMouseLeave = () => {
    console.log(debouncedHandleMouseEnter)
    setIsShown({ shown: false, key: '' })
    
  }

  return (
    <NavElementContainer
      className='modal-menu' key={key}
      onMouseEnter={() => debouncedHandleMouseEnter}
      onMouseLeave={() => handleMouseLeave}
    >
      <Container>
        <LinkRenderer url={url}>
          <Title>{title}</Title>
        </LinkRenderer>
        <FontAwesomeIcon icon={faCaretDown} color="#D9584B" style={{ margin: 'auto' }} />
      </Container>
      {isShown.isShown && isShown.key === key &&
        (
          <Modal
          onMouseEnter={() => debouncedHandleMouseEnter}
          onMouseLeave={() => handleMouseLeave}
          >
            {navOptions &&
              navOptions.map((navElement) => renderNavElement(navElement))
            }
          </Modal>
        )
      }
    </NavElementContainer>
  )
}

export default ModalDropdown
