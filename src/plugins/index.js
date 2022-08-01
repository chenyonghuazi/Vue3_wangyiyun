import {Button, Swipe, SwipeItem, Cell, CellGroup} from 'vant';

let plugins = [Button, Swipe, SwipeItem, Cell, CellGroup]

export default function getVant(app){
    plugins.forEach((item)=> app.use(item))
}