import React, { PureComponent } from 'react'
import styled from 'styled-components'
import posed from 'react-pose'

const Post = styled.p`
  font-size: 24px;
  font-weight: 400;
`

const Company = styled.p`
  font-size: 18px;
`

const Dates = styled.p`
  font-size: 14px;
  font-weight: 200;
`

const Present = styled.span`
  font-style: italic; 
`

const JobContainer = styled.li`
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const SeeMoreButton = styled.button`
  border: none;
  background: none;
  color: rgb(140, 140, 140);
  font-style: italic;
  padding: 0;
  margin-left: auto;
`

const Details = posed.div({
  open: { height: 'auto' },
  closed: { height: 0 },
})

const DetailsWrapper = styled(Details)`
  overflow: hidden

  & > p {
    margin-bottom: 6px;
  }
`

class Job extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
    }

    this.toggleOpen = this.toggleOpen.bind(this)
  }

  toggleOpen() {
    const { isOpen } = this.state

    this.setState({ isOpen: !isOpen })
  }

  render() {
    const {
      start,
      end,
      company,
      post,
      location,
      children,
    } = this.props

    const { isOpen } = this.state

    return (
      <JobContainer>
        <Post>{post}</Post>
        <Company>{company}</Company>
        <p>{ location }</p>
        <Dates>
          <span>
            {start}
          </span>
          &mdash;
          {
            end === 'present'
              ? <Present>present</Present>
              : end
          }
        </Dates>
        <DetailsWrapper pose={isOpen ? 'open' : 'closed'}>
          { children }
        </DetailsWrapper>
        <SeeMoreButton onClick={this.toggleOpen}>
          { isOpen ? 'See less...' : 'See more...' }
        </SeeMoreButton>
      </JobContainer>
    )
  }
}

export default Job
