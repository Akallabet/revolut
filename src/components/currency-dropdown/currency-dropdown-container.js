import { connect } from 'react-redux'
import CurrencyDropdown from './currency-dropdown'

const mapStateToProps = ({availableCurrencies}) => ({currencies: availableCurrencies})
const mapDispatchToProps = null

const CurrencyDropdownContainer = connect(mapStateToProps, mapDispatchToProps)(CurrencyDropdown)

export default CurrencyDropdownContainer
