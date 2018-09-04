import { connect } from 'react-redux'
import ExchangeTo from './exchange-to'
import {setExchangeTo} from './exchange-to-actions'

const mapStateToProps = ({exchangeTo}) => ({exchangeTo})
const mapDispatchToProps = dispatch => {
  return {
    setExchangeTo: code => dispatch(setExchangeTo(code))
  }
}

const ExchangeToContainer = connect(mapStateToProps, mapDispatchToProps)(ExchangeTo)

export default ExchangeToContainer
