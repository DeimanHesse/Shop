import {makeAutoObservable} from "mobx";

export default class BasketStore {
    constructor() {
        this._devices = []
        this._price = []
        this._title = []
        this._count = []
        this._totalCount = 0
        makeAutoObservable(this)
    }

    setDevices(devices) {
        this._devices = devices
    }
    setPrice(price) {
        this._price = price
    }
    setTitle(title) {
        this._title = title
    }
    setCount(count) {
        this._count = count
    }
    setTotalCount(totalCount) {
        this._totalCount = totalCount
    }

    

    get devices() {
        return this._devices
    }
    get price() {
        return this._price
    }
    get title() {
        return this._title
    }
    get count() {
        return this._count
    }
    get totalCount() {
        return this._totalCount
    }
    
}
