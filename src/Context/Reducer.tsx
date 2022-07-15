export default (state: any, action: any) => {
  switch (action.type) {
    case 'UPDATE_SELECTED_SUBJECT_TYPE':
      return { ...state, selectedSubjectType: action.payload };
    case 'UPDATE_SELECTED_DEPARTMENTS':
      return { ...state, selectedDepartments: action.payload };
    case 'UPDATE_SELECTED_GENDERS':
      return { ...state, selectedGenders: action.payload };
    default:
      return { ...state };
  }
};
