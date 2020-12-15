import createSelector from "reselect";

const sk = (state) => state.users.skills;
export const getSkills = createSelector(sk, (skill) => skill);
