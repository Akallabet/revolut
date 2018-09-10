import { connect } from 'react-redux'
import Exchange from '../exchange/exchange'
import {
  updateAndConvert,
  changeCurrency
} from './exchange-to-actions'

const mapStateToProps = ({exchangeTo: {currency, amount}, availableCurrencies, currencySymbols}) =>
  ({
    className: 'exchange-to',
    currency,
    amount,
    availableCurrencies,
    currencySymbols
  })
const mapDispatchToProps = () => ({
  onCurrencySelection: code => changeCurrency(code),
  onAmountChange: amount => updateAndConvert(amount)
})

const ExchangeFromContainer = connect(mapStateToProps, mapDispatchToProps)(Exchange)

export default ExchangeFromContainer
