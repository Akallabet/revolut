import { connect } from 'react-redux'
import currencySelection from './currency-selection'

const mapStateToProps = ({availableCurrencies}) => ({currencies: availableCurrencies})
const mapDispatchToProps = null

const currencySelectionContainer = connect(mapStateToProps, mapDispatchToProps)(currencySelection)

export default currencySelectionContainer
