const INITIAL_STATE = {
  popupToggler: false,
}

const TOGGLE_POPUP = 'TOGGLE_POPUP'

export const headerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_POPUP:
      return {
        ...state,
        popupToggler: !state.popupToggler,
      }
    default:
      return state
  }
}

export const togglePopupActionCreator = () => ({
  type: TOGGLE_POPUP,
})
