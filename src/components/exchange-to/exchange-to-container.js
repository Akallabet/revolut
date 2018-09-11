import { connect } from 'react-redux'
import Exchange from '../exchange/exchange'
import {
  updateAndConvert,
  changeCurrency
} from './exchange-to-actions'

const mapStateToProps = ({exchangeTo: {currency, amount}, availableCurrencies}) =>
  ({
    className: 'exchange-to',
    currency,
    amount,
    sign: '+',
    availableCurrencies
  })
const mapDispatchToProps = () => ({
  onCurrencySelection: code => changeCurrency(code),
  onAmountChange: amount => updateAndConvert(amount)
})

const ExchangeFromContainer = connect(mapStateToProps, mapDispatchToProps)(Exchange)

export default ExchangeFromContainer
