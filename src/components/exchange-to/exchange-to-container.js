import { connect } from 'react-redux'
import ExchangeTo from './exchange-to'
import {
  updateAndConvert,
  changeCurrency
} from './exchange-to-actions'

const mapStateToProps = ({exchangeTo}) => ({exchangeTo})
const mapDispatchToProps = () => ({
  changeCurrency: code => changeCurrency(code),
  updateAndConvert: amount => updateAndConvert(amount)
})

const ExchangeToContainer = connect(mapStateToProps, mapDispatchToProps)(ExchangeTo)

export default ExchangeToContainer
