import { connect } from 'react-redux'
import { startFetchRates } from './exchange-rate-actions'
import ExchangeRate from './exchange-rate'

const mapStateToProps = ({exchangeRates, availableCurrencies, exchangeFrom, exchangeTo, currencySymbols}) =>
  ({exchangeRates, availableCurrencies, exchangeFrom, exchangeTo, currencySymbols})
const mapDispatchToProps = () => ({
  startFetchRates
})

const ExchangeRateContainer = connect(mapStateToProps, mapDispatchToProps)(ExchangeRate)

export default ExchangeRateContainer
