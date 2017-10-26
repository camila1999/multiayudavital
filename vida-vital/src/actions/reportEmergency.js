import { SEND_REPORT } from 'constants/ActionTypes'
import { createAction } from 'redux-actions'

export const increment = createAction(SEND_REPORT)

export function sendReport(typeEmergency) {

  return (dispatch, getState) => {
    const { counter } = getState()

    console.log('mannnnn'+typeEmergency)

    dispatch(increment())
  }
}

export function reportEmergencyGrave(){
  console.log('mannnnn')
  return sendReport('grave');
}

export function reportEmergencyGravisimo(){
  console.log('mannnnn11')
  return sendReport('gravisimo');
}
