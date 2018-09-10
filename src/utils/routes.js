
export const routeKeys = {
  wallet: 'wallet',
  currencyExchange: 'exchange'
}

const routes = [{
  key: routeKeys.wallet,
  path: '/wallet',
  label: 'Wallet',
  default: true
},
{
  key: routeKeys.currencyExchange,
  path: '/currency-exchange',
  label: 'Exchange',
  default: false
}]

export default routes
