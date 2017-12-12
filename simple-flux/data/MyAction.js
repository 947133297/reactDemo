import dispatcher from "./MyDispatcher"
const action = {
    add:function(data){
        dispatcher.dispatch({
            type:"add",
            data:"9"
        });
    }
}

export default action