import { connect } from 'react-redux'
import { startFetchRates } from './exchange-rate-actions'
import ExchangeRate from './exchange-rate'

const mapStateToProps = ({exchangeRates, availableCurrencies, exchangeFrom, exchangeTo}) =>
  ({exchangeRates, availableCurrencies, exchangeFrom, exchangeTo})
const mapDispatchToProps = () => ({
  startFetchRates
})

const ExchangeRateContainer = connect(mapStateToProps, mapDispatchToProps)(ExchangeRate)

export default ExchangeRateContainer
