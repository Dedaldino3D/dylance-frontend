import { DEFAULT_SCOPE, showLoading, hideLoading } from '../reducers/loadingBar'


const REQUEST ='REQUEST';
const SUCCESS ='SUCCESS';
const FAILURE = 'FAILURE';

// const defaultTypeSuffixes = [ REQUEST, SUCCESS, FAILURE ]


export const loadingBarMiddleware = ({ dispatch }) => next => action => {
  if (action.type) {

    const isPending = new RegExp(`${REQUEST}$`, 'g')
    const isFulfilled = new RegExp(`${SUCCESS}$`, 'g')
    const isRejected = new RegExp(`${FAILURE}$`, 'g')

    const actionScope = DEFAULT_SCOPE

    if (action.type.match(isPending)) {
      dispatch(showLoading(actionScope))
    } else if (action.type.match(isFulfilled)
                || action.type.match(isRejected)) {
      dispatch(hideLoading(actionScope))
    }
  }

  next(action)
}

export default loadingBarMiddleware
