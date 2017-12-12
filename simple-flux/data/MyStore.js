import {ReduceStore} from 'flux/utils';
import MyDispatcher from './MyDispatcher';

class MyStore extends ReduceStore {

    // 重新渲染会再次通过这个函数获取数据
    getState(){
        return this.data;
    }
    constructor() {
        super(MyDispatcher);
        this.data = [1,2,3];
    }

    getInitialState() {
        return [];
    }

    // dsipatch 会触发这个函数的执行，这个函数要求是纯函数，即不能对state和action进行修改
    // store应该配合 immutable 这个库来使用，让reduce返回 state的拷贝，areEqual的默认实现会对比两个state的引用
    // 就会发现state与reduce返回的state，属于不同的对象，会返回false，触发re-render
    reduce(state, action) {
        console.log(state)
        console.log(action)
        state.push(action.data)
        return {
            a:123
        }
    }

    // 仅当这个函数返回false，上面的getState才会执行
    // 第一个参数是reduce中state，第二个参数是reduce的返回值
    areEqual(state1,state2){
        return true;
    }
}

export default new MyStore();