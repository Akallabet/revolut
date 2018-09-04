import { connect } from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/react-redux'
import {
  switchCurrencies
} from './switch-currencies-actions'
import SwitchCurrencies from './switch-currencies'

const mapStateToProps = null
const mapDispatchToProps = () => {
  return ({
    switchCurrencies: () => switchCurrencies()
  })
}

const SwitchCurrenciesContainer = connect(mapStateToProps, mapDispatchToProps)(SwitchCurrencies)

export default SwitchCurrenciesContainer
