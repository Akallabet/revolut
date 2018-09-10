import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './root-reducer'

const initialStage = JSON.parse(localStorage.getItem('exchange')) || {}

const store = createStore(
  rootReducer,
  initialStage,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

store.subscribe(() => {
  const state = store.getState()
  localStorage.setItem('exchange', JSON.stringify(state))
})

export default store
