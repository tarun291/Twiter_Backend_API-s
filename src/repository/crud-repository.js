
class CrudRepository{
    constructor(model){
        this.model=model;
    }
    async create(data){
        try {
            console.log(data)
            const result=await this.model.create(data);
            return result;        
        } catch (error) {
            console.log('Something went wrong in crud repo');
            console.log(error.message);
            throw error;
        }
    }
    async destroy(id){
        try {
            const result=await this.model.findByIdAndDelete(id);
            return result;        
        } catch (error) {
            console.log('Somthing went wrong in crud repo')
        }
    }
    async get(id){
        try {
            console.log(id);
            const result=await this.model.findById(id);
            console.log(result);
            return result;        
        } catch (error) {
            console.log(error);
            console.log('Somthing went wrong in crud repo')
        }
    }
    async getAll(){
        try {
            const result=await this.model.find();
            return result;        
        } catch (error) {
            console.log('Somthing went wrong in crud repo')
        }       
    }
    async update(id,data){
        try {
            const result=await this.model.findByIdAndUpdate(id,data,{new:true});
            return result;
        } catch (error) {
            console.log('Something went wrong in  crud repo')
            throw error
        }
    }

}

export default CrudRepository;