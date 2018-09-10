import { connect } from 'react-redux'
import Pocket from './pocket'
import {
  selectPocketCurrency,
  setCurrencyAmount
} from './pocket-actions'

const mapStateToProps = ({pocketCurrency}) => ({pocketCurrency})
const mapDispatchToProps = () => ({
  selectPocketCurrency: currency => selectPocketCurrency(currency),
  setCurrencyAmount: ({code, amount}) => {
    setCurrencyAmount({currency: code, amount})
  }
})

const PocketContainer = connect(mapStateToProps, mapDispatchToProps)(Pocket)

export default PocketContainer
