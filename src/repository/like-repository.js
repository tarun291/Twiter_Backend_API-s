import Like from '../model/like.js'
import CrudRepository from './crud-repository'
class LikeRepository extends CrudRepository{
    constructor(){
        super(Like)
    }
}

export default LikeRepository;