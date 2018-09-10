
export const routeKeys = {
  pockets: 'pockets',
  currencyExchange: 'exchange'
}

const routes = [{
  key: routeKeys.pockets,
  path: '/pockets',
  label: 'Pockets',
  default: true
},
{
  key: routeKeys.currencyExchange,
  path: '/currency-exchange',
  label: 'Exchange',
  default: false
}]

export default routes
