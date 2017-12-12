import AppView from "../views/AppView.jsx"
import MyAction from "../data/MyAction"
import MyStore from "../data/MyStore"
import {Container} from 'flux/utils';

// 这里的数据会被添加到 AppView的 props中
function getState(){
    return {
        add:MyAction.add,

        data: MyStore.getState(),
    }
}

function getStores(){
    return [MyStore]
}

export default Container.createFunctional(AppView, getStores, getState);