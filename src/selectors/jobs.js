import createSelector from "reselect";

const jobs = (state) => state.jobs.jobs;

export const getJobs = createSelector(jobs, (jobs) => jobs);
