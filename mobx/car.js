import {observable,action} from 'mobx'
class  CarStore  {
    @observable
    carname="这是购物车的名字";
}
export default  new CarStore()
