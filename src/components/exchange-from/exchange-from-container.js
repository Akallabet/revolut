import { connect } from 'react-redux'
import Exchange from '../exchange/exchange'
import {
  updateAndConvert,
  changeCurrency
} from './exchange-from-actions'

const mapStateToProps = ({exchangeFrom: {currency, amount}, availableCurrencies}) =>
  ({
    className: 'exchange-from',
    currency,
    amount,
    sign: '-',
    availableCurrencies
  })
const mapDispatchToProps = () => ({
  onCurrencySelection: code => changeCurrency(code),
  onAmountChange: amount => updateAndConvert(amount)
})

const ExchangeFromContainer = connect(mapStateToProps, mapDispatchToProps)(Exchange)

export default ExchangeFromContainer
