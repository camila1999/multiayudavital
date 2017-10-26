import React from 'react'
import PropTypes from 'prop-types'
import {MobileForm} from 'components'
import { createStructuredSelector, createSelector } from 'reselect'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as EmergencyActions from 'actions/reportEmergency'

class WelcomeContainer extends React.Component {


  reportEmergencyGrave = () => {
    this.props.reportEmergencyGrave()
  }
  reportEmergencyGravisimo = () => {
    this.props.reportEmergencyGravisimo()
  }

  render() {
    return (
      <MobileForm
        value='toche'
        reportEmergencyGrave={this.reportEmergencyGrave}
        reportEmergencyGravisimo={this.reportEmergencyGravisimo}
      />
    )
  }
}



const mapStateToProps = createStructuredSelector({
  counter: createSelector(state => state.counter, counterState => counterState),
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(EmergencyActions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(WelcomeContainer)
