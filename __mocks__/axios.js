import ratesResponses from './rates_responses.json'

const buildAxiosResponse = data => ({data})

const axios = {
  create: () => ({
    get: request => ({
      then: cb => {
        switch (request) {
          case '?from=EUR&to=USD,GBP':
            return cb(buildAxiosResponse(ratesResponses.EUR))
          case '?from=USD&to=EUR,GBP':
            return cb(buildAxiosResponse(ratesResponses.USD))
          case '?from=GBP&to=EUR,USD':
            return cb(buildAxiosResponse(ratesResponses.GBP))
        }
      }
    })
  })
}

export default axios
