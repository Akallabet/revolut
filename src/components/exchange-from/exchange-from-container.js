import { connect } from 'react-redux'
import ExchangeFrom from './exchange-from'
import {
  setExchangeFrom
} from './exchange-from-actions'

const mapStateToProps = ({exchangeFrom}) => ({exchangeFrom})
const mapDispatchToProps = dispatch => {
  return {
    setExchangeFrom: code => dispatch(setExchangeFrom(code))
  }
}

const ExchangeFromContainer = connect(mapStateToProps, mapDispatchToProps)(ExchangeFrom)

export default ExchangeFromContainer
