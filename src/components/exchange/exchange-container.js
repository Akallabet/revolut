import { connect } from 'react-redux'
import Exchange from './exchange'

const mapStateToProps = ({availableCurrencies, currencySymbols}) => ({availableCurrencies, currencySymbols})
const mapDispatchToProps = null

const ExchangeContainer = connect(mapStateToProps, mapDispatchToProps)(Exchange)

export default ExchangeContainer
