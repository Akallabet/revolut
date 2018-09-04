import { connect } from 'react-redux'

import App from './app'

const mapStateToProps = ({currencyCodes}) => ({currencyCodes})
const mapDispatchToProps = null

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

export default AppContainer
