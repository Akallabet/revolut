import { connect } from 'react-redux'
import ExchangeFrom from './exchange-from'

const mapStateToProps = ({exchangeFrom}) => ({exchangeFrom})
const mapDispatchToProps = null

const ExchangeFromContainer = connect(mapStateToProps, mapDispatchToProps)(ExchangeFrom)

export default ExchangeFromContainer
