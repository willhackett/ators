import { toFpCurry } from './_convert'
import evaluate from '../evaluate'

return toFpCurry(evaluate, [1, 0, 2])