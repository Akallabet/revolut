import { connect } from 'react-redux'
import {
  swapCurrencies
} from './swap-currencies-actions'
import SwapCurrencies from './swap-currencies'

const mapStateToProps = null
const mapDispatchToProps = () => {
  return ({
    swapCurrencies: () => swapCurrencies()
  })
}

const SwapCurrenciesContainer = connect(mapStateToProps, mapDispatchToProps)(SwapCurrencies)

export default SwapCurrenciesContainer
