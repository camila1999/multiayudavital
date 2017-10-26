import React from 'react'
import PropTypes from 'prop-types'
import { MobileForm } from 'components'
import { createStructuredSelector, createSelector } from 'reselect'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CounterActions from 'actions/counter'

class HomePage extends React.Component {

  render() {
    return (
      <div>Bienvenido a VidaVital</div>
    )
  }
}


export default connect()(HomePage)
