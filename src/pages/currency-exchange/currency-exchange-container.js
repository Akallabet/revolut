import { connect } from 'react-redux'
import CurrencyExchange from './currency-exchange'

const mapStateToProps = ({currencyCodes}) => ({currencyCodes})
const mapDispatchToProps = null

const CurrencyExchangeContainer = connect(mapStateToProps, mapDispatchToProps)(CurrencyExchange)

export default CurrencyExchangeContainer
