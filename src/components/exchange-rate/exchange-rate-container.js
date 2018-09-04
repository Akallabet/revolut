import { connect } from 'react-redux'
import ExchangeRate from './exchange-rate'

const mapStateToProps = ({exchangeFrom, exchangeTo, availableCurrencies, currencySymbols}) =>
  ({availableCurrencies, exchangeFrom, exchangeTo, currencySymbols})
const mapDispatchToProps = null

const ExchangeRateContainer = connect(mapStateToProps, mapDispatchToProps)(ExchangeRate)

export default ExchangeRateContainer
