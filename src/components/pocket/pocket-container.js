import { connect } from 'react-redux'
import Pocket from './pocket'
import {
  selectPocketCurrency
} from './pocket-actions'

const mapStateToProps = ({pocketCurrency}) => ({pocketCurrency})
const mapDispatchToProps = () => ({
  selectPocketCurrency: currency => selectPocketCurrency(currency)
})

const PocketContainer = connect(mapStateToProps, mapDispatchToProps)(Pocket)

export default PocketContainer
