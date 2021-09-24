console.log('sets');

class customSet extends Set{

    createNewSet(set) {
        const newSet = new customSet()
        for(let value of set) {
            newSet.add(value);
        }
        for(let value of this) {
            newSet.add(value);
        }
        return newSet;
    }

    getIntersectionSet(set) {
        const newSet = new customSet()
        for(let value1 of set) {
            for(let value2 of this) {
                if(value1 === value2) {
                    newSet.add(value1);
                }
            }
        }
        return newSet;
    }

    getIntersectionSet(set) {
        const newSet = new customSet()
        for(let valueFromAnotherSet of set) {
            for(let thisValue of this) {
                if(valueFromAnotherSet === thisValue) {
                    newSet.add(thisValue);
                }
            }
        }
        return newSet;
    }

    getDifferenceSet(set) {
        const newSet = new customSet()
        for(let thisValue of this) {
            newSet.add(thisValue)
            for(let valueFromAnotherSet of set) {
                if(thisValue === valueFromAnotherSet) {
                    newSet.delete(thisValue);
                }
            }
        }
        return newSet;
    }

    isEqual(set) {
        const newSet = this.getDifferenceSet(set)

        if(newSet.size === 0 && this.size === set.size) {
            return true;
        } else {
            return false
        }
    }

}
const set1 = new customSet();
const set2 = new customSet();

set1.add(1)
set1.add(2)
set1.add(3)
set1.add(4)
console.log('set1',set1);

set2.add(1)
set2.add(0)
set2.add(-1)
set2.add(-2)
console.log('set2',set2);

const set3 = set1.createNewSet(set2)
console.log('add set2 to set1',set3);

const set4 = set1.getIntersectionSet(set2)
console.log('intersection Set',set4);

const set5 = set1.getDifferenceSet(set2)
console.log('different Set',set5);
console.log('is equal',set1.isEqual(set2));





