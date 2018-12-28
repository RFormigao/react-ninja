'use strict'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'

import address from './index'
import { UPDATE_ADDRESS } from './actions'

it('should address be a function', () => {
  expect(address).to.be.a('function')
})

it('should action UPDATE_ADDRESS update address', () => {
  const before = deepFreeze({
    address: '',
    city: '',
    code: '',
    district: '',
    state: '',
    status: undefined
  })

  const action = deepFreeze({
    type: UPDATE_ADDRESS,
    payload: {
      address: 'Rua Domingos Moyana',
      city: 'Jaú',
      code: '17204-670',
      district: 'Jardim Santa Helena',
      state: 'SP',
      status: 1
    }
  })

  const after = {
    address: 'Rua Domingos Moyana',
    city: 'Jaú',
    code: '17204-670',
    district: 'Jardim Santa Helena',
    state: 'SP',
    status: 1
  }

  expect(address(before, action)).to.be.deep.equal(after)
})
