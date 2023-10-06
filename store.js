const redux = require("redux");


const counterReducer = (state={counter:0}, action) => {
  if(action.type==="incrementby2")
  return {
    counter: state.counter +2,
  }
  else if(action.type==="decrementby2")
  return{
  counter:state.counter-2
}
};

const store = redux.legacy_createStore(counterReducer);

const counterSubsriber=()=>{
    const latestState=store.getState()
    console.log(latestState)

}

store.subscribe(counterSubsriber)


store.dispatch({type:'incrementby2'})
store.dispatch({type:'decrementby2'})