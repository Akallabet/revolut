import { connect } from 'react-redux'
import Pocket from './pocket'
import {
  selectPocketCurrency,
  increaseCurrencyAmount
} from './pocket-actions'

const mapStateToProps = ({pocketCurrency}) => ({pocketCurrency})
const mapDispatchToProps = () => ({
  selectPocketCurrency: currency => selectPocketCurrency(currency),
  increaseCurrencyAmount: ({code, amount}) => {
    increaseCurrencyAmount({currency: code, amount})
  }
})

const PocketContainer = connect(mapStateToProps, mapDispatchToProps)(Pocket)

export default PocketContainer
