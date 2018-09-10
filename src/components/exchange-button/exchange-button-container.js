import { connect } from 'react-redux'
import ExchangeButton from './exchange-button'
import {
  exchange
} from './exchange-button-actions'

const mapStateToProps = ({availableCurrencies, exchangeFrom}) => ({availableCurrencies, exchangeFrom})
const mapDispatchToProps = () => ({
  exchange: () => exchange()
})

const ExchangeButtonContainer = connect(mapStateToProps, mapDispatchToProps)(ExchangeButton)

export default ExchangeButtonContainer
