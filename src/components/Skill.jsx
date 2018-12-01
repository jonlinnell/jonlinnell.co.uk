import React, { PureComponent } from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import qh from 'quick-hash'

import { Icon } from 'bloomer'

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
  align-items: center;
  justify-items: center;

  width: 100%;
`

const Title = styled.h2`
  font-weight: 400;
  font-size: 20px;
`

const Details = styled.div`
  overflow: hidden;

  & p {
    margin-bottom: 12px;
  }

  & p:last-of-type {
    margin-bottom: 0;
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
    const { title, description } = this.props
    const { isOpen } = this.state

    return (
      <SkillWrapper>
        <TitleWrapper>
          <Title onClick={this.toggleOpen}>{ title }</Title>
          {
            description.length > 0
              ? (
                <SeeMoreButton onClick={this.toggleOpen}>
                  <Icon className={`fa ${isOpen ? 'fa-minus' : 'fa-plus'}`} />
                </SeeMoreButton>
              )
              : null
          }
        </TitleWrapper>
        <Details>
          <PosedDetails pose={isOpen ? 'open' : 'closed'}>
            { description.map(line => <p key={qh(line)}>{ line }</p>) }
          </PosedDetails>
        </Details>
      </SkillWrapper>
    )
  }
}

export default Skill
