'use strict'

import createReducer from '../create-reducer'
import { UPDATE_ADDRESS } from './actions'

const initialState = {
  address: '',
  city: '',
  code: '',
  district: '',
  state: '',
  status: undefined
}

const address = createReducer(initialState, {
  [UPDATE_ADDRESS]: (_, action) => action.payload
})

export default address
