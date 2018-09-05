import { connect } from 'react-redux'
import ExchangeFrom from './exchange-from'
import {
  updateAndConvert,
  changeCurrency
} from './exchange-from-actions'

const mapStateToProps = ({exchangeFrom}) => ({exchangeFrom})
const mapDispatchToProps = () => ({
  changeCurrency: code => changeCurrency(code),
  updateAndConvert: amount => updateAndConvert(amount)
})

const ExchangeFromContainer = connect(mapStateToProps, mapDispatchToProps)(ExchangeFrom)

export default ExchangeFromContainer
