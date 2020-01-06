export function configSaveRequest(protocol, address, door, route, password) {
  return {
    type: '@config/SAVE_REQUEST',
    payload: {protocol, address, door, route, password},
  };
}

export function configSaveSuccess() {
  return {
    type: '@config/SAVE_SUCCESS',
  };
}

export function configSaveFailure() {
  return {
    type: '@config/SAVE_FAILURE',
  };
}
