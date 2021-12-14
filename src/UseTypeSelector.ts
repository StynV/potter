import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { RootState } from './redux/reducers/CombineReducer'

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
