import {observable,action} from 'mobx'
class  RootStore {
    @observable
    name="悟空";
    @action
    changeName(name){
        this.name=name;
    }
}
export default  new RootStore()
