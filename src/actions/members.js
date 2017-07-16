import { getMembers } from '../data';

export const MEMBERS_LOADING = 'MEMBERS_LOADING';
export const MEMBERS_LOADED = 'MEMBERS_LOADED';
export const MEMBERS_FAILED = 'MEMBERS_FAILED';

const membersLoading = () => ({
  type: MEMBERS_LOADING,
  payload: true
});

const membersLoaded = data => ({
  type: MEMBERS_LOADED,
  payload: data
});

const membersFailed = error => ({
  type: MEMBERS_FAILED,
  payload: error
});

export const getMembersList = () => dispatch => {
  dispatch(membersLoading());
  return getMembers()
    .then(response => {
      dispatch(membersLoaded(response));
    })
    .catch(error => dispatch(membersFailed(error)));
};