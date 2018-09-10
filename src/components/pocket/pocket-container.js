import { connect } from 'react-redux'
import Pocket from './pocket'
import {
  selectPocketCurrency,
  increaseCurrencyAmount
} from './pocket-actions'

const mapStateToProps = ({availableCurrencies, pocketCurrency}) => ({availableCurrencies, pocketCurrency})
const mapDispatchToProps = () => ({
  selectPocketCurrency: currency => selectPocketCurrency(currency),
  increaseCurrencyAmount: ({currency, amount}) => {
    increaseCurrencyAmount({currency, amount})
  }
})

const PocketContainer = connect(mapStateToProps, mapDispatchToProps)(Pocket)

export default PocketContainer
