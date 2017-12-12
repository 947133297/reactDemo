import React from 'react';

function App(props){
    return <div>
        <div>{props.data}</div>
        <button onClick={props.add}>添加</button>
    </div>
}

export default App;