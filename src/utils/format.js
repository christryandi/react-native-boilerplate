import { NavigationActions, StackActions } from 'react-navigation'
export const timeouttime = 15000

export const login = StackActions.reset({
  index: 0,
  key: null,
  actions: [
    NavigationActions.navigate({
      routeName: 'Login',
    }),
  ],
})

export function formatMoney(value) {
  return value
    .toString()
    .replace(/\D/g, '')
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

export function numberOnly(value) {
  return value.toString().replace(/[^0-9]/g, '')
}

export function charAndSpaceOnly(value) {
  return value.toString().replace(/[^A-Za-z\s]/, '')
}

export function regionFrom(lat, lon, distance) {
  distance = distance / 2
  const circumference = 40075
  const oneDegreeOfLatitudeInMeters = 111.32 * 1000
  const angularDistance = distance / circumference

  const latitudeDelta = distance / oneDegreeOfLatitudeInMeters
  const longitudeDelta = Math.abs(
    Math.atan2(
      Math.sin(angularDistance) * Math.cos(lat),
      Math.cos(angularDistance) - Math.sin(lat) * Math.sin(lat),
    ),
  )

  return (result = {
    latitude: lat,
    longitude: lon,
    latitudeDelta,
    longitudeDelta,
  })
}

export function roundToKm(d) {
  let distance = d / 1000
  distance = distance.toFixed(1)
  distance = distance.toString() + ' km'
  return distance
}

export function timeout(ms, promise) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      reject(new Error('timeout'))
    }, ms)
    promise.then(resolve, reject)
  })
}

export async function fetchJSONPost(
  url,
  data,
  token,
  useJSON = true,
  withToken = true,
) {
  let responseJSON
  let headers = {
    Accept: 'application/json',
  }

  if (useJSON) {
    headers = {
      ...headers,
      'Content-Type': 'application/json',
    }
  }

  if (withToken) {
    headers = {
      ...headers,
      Authorization: 'Bearer ' + token,
    }
  }

  await timeout(
    timeouttime,
    fetch(url, {
      method: 'POST',
      headers: headers,
      body: data,
    }),
  )
    .then(async function(response) {
      if (response.status == 500) {
        responseJSON = {
          status: 'failed',
          message: ['Terjadi kendala. Silahkan coba beberapa saat lagi.'],
        }
      } else if (response.status == 401) {
        responseJSON = {
          status: 'failed',
          message: ['Terjadi kendala. Silahkan coba beberapa saat lagi.'],
        }
      } else {
        responseJSON = await response.json()
      }
    })
    .catch(function(error) {
      responseJSON = {
        status: 'failed',
        message: ['Terjadi kendala. Silahkan coba beberapa saat lagi.'],
      }
    })
  return responseJSON
}

export async function fetchJSONGet(url, token, withToken = true) {
  let responseJSON
  let headers = {
    Accept: 'application/json',
  }

  if (withToken) {
    headers = {
      ...headers,
      Authorization: 'Bearer ' + token,
    }
  }

  await timeout(
    timeouttime,
    fetch(url, {
      headers: headers,
    }),
  )
    .then(async function(response) {
      if (response.status == 500) {
        responseJSON = {
          status: 'internal',
        }
      } else if (response.status == 401) {
        responseJSON = {
          status: 'oauth',
        }
      } else {
        responseJSON = await response.json()
      }
    })
    .catch(function(error) {
      responseJSON = {
        status: 'timeout',
      }
    })
  return responseJSON
}

export function responseStatusChecker(response, responseKey) {
  let responseJSON
  if (response.status == 'internal' || response.status == 'timeout') {
    responseJSON = {
      status: 'error',
      data: responseKey,
    }
  } else if (response.status == 'oauth') {
    responseJSON = {
      status: 'oauth',
      data: responseKey,
    }
  } else {
    responseJSON = {
      status: 'success',
      data: response,
    }
  }
  return responseJSON
}
