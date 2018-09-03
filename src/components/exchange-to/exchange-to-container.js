import { connect } from 'react-redux'
import ExchangeTo from './exchange-to'

const mapStateToProps = ({exchangeTo}) => ({exchangeTo})
const mapDispatchToProps = null

const ExchangeToContainer = connect(mapStateToProps, mapDispatchToProps)(ExchangeTo)

export default ExchangeToContainer
