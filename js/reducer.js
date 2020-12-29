function changeState(state, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}

function dispatch(action) {
  state = changeState(state, action)
  // return state
  renderState()
}

function renderState() {
  document.body.textContent = state.count
}


let state = {count: 0}
let action = {type: 'INCREASE_COUNT'}

// changeState(state, action)

// changeState(state, {type: 'INCREASE_COUNT'})
// renderState()
// // => {count: 1}
// changeState(state, {type: 'INCREASE_COUNT'})
// renderState()
// // => {count: 1}
// changeState(state, {type: 'INCREASE_COUNT'})
// renderState()
// => {count: 1}

// dispatch({type: 'INCREASE_COUNT'})
// // renderState()
// // => {count: 1 }
// dispatch({type: 'INCREASE_COUNT'})
// // renderState()
// //  => {count: 2}
// dispatch({type: 'INCREASE_COUNT'})
renderState()
//  => {count: 3}

