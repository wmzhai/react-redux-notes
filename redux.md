# Redux

## Principles

## Actions

## Reducers

Things you should **never** do inside a reducer.

* Mutate its arguments
* Perform side effects like API calls and routing transitions
* Call non-pure functions, e.g. Date.now() or Math.random()

**the reducer must be pure**:
 Given the same arguments, it should calculate the next state and return it. No surprises. No side effects. No API calls. No mutations. Just a calculation.

```javascript
function todoApp(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      })
    default:
      return state
  }
}
```
**NOTE**:

1. **We don't mutate the state**. We create a copy with Object.assign(). Object.assign(state, { visibilityFilter: action.filter }) is also wrong: it will mutate the first argument. You must supply an empty object as the first parameter. You can also enable the object spread operator proposal to write { ...state, ...newState } instead.

2. **We return the previous state in the default case**. It's important to return the previous state for any unknown action.




All combineReducers() does is generate a function that calls your reducers with the slices of state selected according to their keys, and combining their results into a single object again. 


## Store


## Middleware


 It provides a third-party extension point between dispatching an action, and the moment it reaches the reducer.
 
 * [Understanding Redux Middleware](https://medium.com/@meagle/understanding-87566abcfb7a) 很不错，可以看看 
