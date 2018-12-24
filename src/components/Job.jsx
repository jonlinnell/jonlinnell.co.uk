import React, { PureComponent, Fragment } from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import qh from 'quick-hash'

import SeeMoreButton from './SeeMoreButton'

const Post = styled.p`
  font-size: 24px;
  font-weight: 400;
`

const Employer = styled.p`
  font-size: 18px;
`

const Dates = styled.p`
  font-size: 14px;
  font-weight: 200;
`

const JobContainer = styled.li`
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
    const {
      organisation,
      post,
      location,
      startDate,
      endDate,
      description,
    } = this.props

    const { isOpen } = this.state

    let dates

    if (startDate === endDate) {
      dates = <span>startDate</span>
    } else if (endDate === 'Invalid date') {
      dates = (
        <Fragment>
          <span>{ startDate }</span>
          &nbsp;&mdash;&nbsp;
          <em>present</em>
        </Fragment>
      )
    } else {
      dates = (
        <Fragment>
          <span>{ startDate }</span>
          &nbsp;&mdash;&nbsp;
          <span>{ endDate }</span>
        </Fragment>
      )
    }

    return (
      <JobContainer>
        <Post onClick={this.toggleOpen}>{ post }</Post>
        <Employer>{ organisation }</Employer>
        <p>{ location }</p>
        <Dates>
          { dates }
        </Dates>
        <DetailsWrapper pose={isOpen ? 'open' : 'closed'}>
          {
            description.map(paragraph => (<p key={qh(paragraph)}>{ paragraph }</p>))
          }
        </DetailsWrapper>
        {
          description.length > 0
            ? (
              <SeeMoreButton responsiveShift onClick={this.toggleOpen}>
                { isOpen ? 'See less...' : 'See more...' }
              </SeeMoreButton>
            )
            : <div style={{ height: '18px' }}>&nbsp;</div>
        }
      </JobContainer>
    )
  }
}

export default Job
