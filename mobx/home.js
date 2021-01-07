import {observable,action} from 'mobx'
class  HomeStore  {
    @observable
    homename="这是商品的名字";
    @action
    ChangeName(name){
        this.homename=name
    }
}
export default  new HomeStore()
