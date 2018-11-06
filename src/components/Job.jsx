import React, { PureComponent } from 'react'
import styled from 'styled-components'

const Company = styled.p`
  font-size: 24px;
  font-weight: 400;
`

const Post = styled.p`
  font-size: 18px;
`

const Dates = styled.p`
  font-size: 18px;
  font-weight: 200;
`

const Present = styled.span`
  font-style: italic; 
`

const JobContainer = styled.li`
  margin-bottom: 12px;
`

const JobHeader = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: center;
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
      children,
    } = this.props

    const { isOpen } = this.state

    return (
      <JobContainer>
        <JobHeader>
          <Company>{company}</Company>
          <button type="button" onClick={this.toggleOpen}>yes</button>
        </JobHeader>
        <Post>{post}</Post>
        <Dates>
          <span>
            {start}
          </span>
          &mdash;
          {
            end === 'present'
              ? <Present>present</Present>
              : end}
        </Dates>
        {
          isOpen
            ? <div>{children}</div>
            : null
        }
        
      </JobContainer>
    )
  }
}

export default Job
