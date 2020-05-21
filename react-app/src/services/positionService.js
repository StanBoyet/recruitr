import client from "./apiClient";

function extractData(res) {
  return res.data["positions"];
}

export function getPositions(params) {
  return client
    .get("/positions", { params })
    .then(extractData)
    .catch(error => console.log(error));
}

export function getPosition(positionId) {
  return client
    .get(`/positions/${positionId}`)
    .then(extractData)
    .catch(error => console.log(error));
}

export function getApplications(positionId) {
  return client
    .get(`/positions/${positionId}/applications`)
    .then(extractData)
    .catch(error => console.log(error));
}

export default { getPositions };
