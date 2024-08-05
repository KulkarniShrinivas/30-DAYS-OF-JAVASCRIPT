//Use clsores to create a simple module for managing a collection of items. Implement methods to add, remove, and list items

function createModule(){
    const items = [];

    return {
        add: function(item){
            items.push(items);
        },
        remove: function(index){
            items.splice(index, 1);
        },
        list: function(){
            return items.slice();
        }

    }


}

const module = createModule();
module.add('item1');
module.add('item2');
module.add
module.remove
module.list(); //Logs: ['item1', 'item2']
