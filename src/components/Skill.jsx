import React, { PureComponent, Fragment } from 'react'
import styled from 'styled-components'
import posed from 'react-pose'

import SeeMoreButton from './SeeMoreButton'

const SkillWrapper = styled.li`
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-items: center;

  width: 100%;
`

const Title = styled.h2`
  font-weight: 400;
  font-size: 24px;
`

const Details = styled.div`
  overflow: hidden;

  & > p {
    margin-bottom: 6px;
  }
`

const PosedDetails = posed.div({
  open: { height: 'auto' },
  closed: { height: 0 },
})

class Skill extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: props.isOpen,
    }

    this.toggleOpen = this.toggleOpen.bind(this)
  }

  componentWillReceiveProps(newProps) {
    this.setState({ isOpen: newProps.isOpen })
  }

  toggleOpen() {
    const { isOpen } = this.state

    this.setState({ isOpen: !isOpen })
  }

  render() {
    const { title, children } = this.props
    const { isOpen } = this.state

    return (
      <SkillWrapper>
        <TitleWrapper>
          <Title onClick={this.toggleOpen}>{ title }</Title>
          {
            children
              ? (
                <SeeMoreButton onClick={this.toggleOpen}>
                  { isOpen ? '-' : '+' }
                </SeeMoreButton>
              )
              : null
          }
        </TitleWrapper>
        <Details>
          <PosedDetails pose={isOpen ? 'open' : 'closed'}>
            { children }
          </PosedDetails>
        </Details>
      </SkillWrapper>
    )
  }
}

export default Skill
