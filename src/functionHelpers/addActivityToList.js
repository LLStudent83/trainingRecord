/* eslint-disable no-param-reassign */
function addActivityToList(stateActivityList, newActivity) {
  let item = false;
  const newStateActivityList = stateActivityList.map((activity) => {
    if (activity.date === newActivity.date) {
      item = true;
      activity.way += newActivity.way;
      return activity;
    }
    return activity;
  });
  if (item) {
    return newStateActivityList.sort((lastActivity, nextActivity) => Date.parse(nextActivity.date.split('.').reverse().join('-'))
          - Date.parse(lastActivity.date.split('.').reverse().join('-')));
  }
  return [...newStateActivityList, newActivity].sort((lastActivity, nextActivity) => Date.parse(nextActivity.date.split('.').reverse().join('-'))
          - Date.parse(lastActivity.date.split('.').reverse().join('-')));
}

export default addActivityToList;
