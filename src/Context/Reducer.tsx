export default (state: any, action: any) => {
  switch (action.type) {
    case 'UPDATE_SELECTED_SUBJECT_TYPE':
      return { ...state, selectedSubjectType: action.payload };
    default:
      return { ...state };
  }
};
