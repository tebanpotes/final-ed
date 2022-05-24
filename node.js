class treeNode {

    constructor(data ){
        this.data = data;
        this.leftChild = null;
        this.rightChild = null;
    }



    preOrder(){
        console.log(this.data);

        if(this.leftChild){

            this.leftChild.preOrder();

        }

        if(this.rightChild){

            this.rightChild.preOrder();

        }

    }


    InOrder(){

        if(this.leftChild){

            this.leftChild.InOrder();

        }

        console.log(this.data);

        if(this.rightChild){

            this.rightChild.InOrder();

        }

    }

    postOrder(){

        if(this.leftChild){

            this.leftChild.postOrder();

        }

        if(this.rightChild){

            this.rightChild.postOrder();

        }

        console.log(this.data);

    }

    Insert(data){
    
        if(this.data){
            if(data < this.data) {
                if(!this.leftChild){
                    this.leftChild = new treeNode(data);
                }else{
                    this.leftChild.Insert(data);
                }
            }else if(data >= this.data){
                if(!this.rightChild){
                    this.rightChild = new treeNode(data);
                }else{
                    this.rightChild.Insert(data);
                }

            }
        }else{
            this.data = data;
        }
    }

    //Search


    Search(data){

        if(!data){
            console.log('Error: not exists data, fill field data')
        }else{
            if(data < this.data){
                if(!this.leftChild){
                    return false;
                }
                return this.leftChild.Search(data);
            }else if(data > this.data){
                if(!this.rightChild){
                    return false;
                }else{
                    return this.rightChild.Search(data);
                }
            }else{
                return true;
            }
        }

    }






}






module.exports =treeNode;



