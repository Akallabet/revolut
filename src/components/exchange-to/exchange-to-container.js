import { connect } from 'react-redux'
import ExchangeTo from './exchange-to'
import {changeCurrency} from './exchange-to-actions'

const mapStateToProps = ({exchangeTo}) => ({exchangeTo})
const mapDispatchToProps = () => ({
  changeCurrency: code => changeCurrency(code)
})

const ExchangeToContainer = connect(mapStateToProps, mapDispatchToProps)(ExchangeTo)

export default ExchangeToContainer
