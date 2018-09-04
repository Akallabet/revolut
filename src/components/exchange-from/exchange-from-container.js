import { connect } from 'react-redux'
import ExchangeFrom from './exchange-from'
import {
  changeCurrency
} from './exchange-from-actions'

const mapStateToProps = ({exchangeFrom}) => ({exchangeFrom})
const mapDispatchToProps = () => ({
  changeCurrency: code => changeCurrency(code)
})

const ExchangeFromContainer = connect(mapStateToProps, mapDispatchToProps)(ExchangeFrom)

export default ExchangeFromContainer
