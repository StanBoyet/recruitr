import {
  getJobApplication,
  getJobApplications,
  newJobApplication,
  setRecruiter,
  update
} from "../services/jobApplicationService";

const INITIAL_STATE = { jobApplications: [], currentJobApplication: null };

export function fetchJobApplications(positionId) {
  return dispatch => {
    return getJobApplications(positionId).then(jobApplications => {
      return dispatch({ type: "SET_JOB_APPLICATIONS", jobApplications });
    });
  };
}

export function fetchJobApplication(jobApplicationId) {
  return dispatch => {
    return getJobApplication(jobApplicationId).then(jobApplication => {
      return dispatch({ type: "SET_JOB_APPLICATION", jobApplication });
    });
  };
}

export function createJobApplication(params, positionId) {
  return dispatch => {
    return newJobApplication(params, positionId).then(jobApplication => {
      dispatch({
        type: "SET_JOB_APPLICATION",
        jobApplication
      });
      return jobApplication;
    });
  };
}

export function matchRecruiter(jobApplicationId, recruiterId) {
  return dispatch => {
    return setRecruiter(jobApplicationId, recruiterId).then(jobApplication => {
      return dispatch({ type: "SET_JOB_APPLICATION", jobApplication });
    });
  };
}

export function updateJobApplication(jobApplicationId, changes) {
  return dispatch => {
    return update(jobApplicationId, changes).then(jobApplication => {
      return dispatch({ type: "SET_JOB_APPLICATION", jobApplication });
    });
  };
}

export const applicantReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_JOB_APPLICATIONS":
      return {
        ...state,
        jobApplications: action.jobApplications,
        currentJobApplication: null
      };
    case "SET_JOB_APPLICATION":
      return { ...state, currentJobApplication: action.jobApplication };
    default:
      return state;
  }
};

export default applicantReducer;
