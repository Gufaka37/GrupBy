exports.groupBy = (arr, key) => {
    if (typeof arr !== "object") throw new Error('Array is not provided');
    if (typeof key !== "string") throw new Error('Key is not provided');

    let newMap = new Map();

    arr.forEach((object) => {
       for (const property in object)
           if (property === key) {
               newMap.set(object[property], []);
           }
    });

    let newObject = Object.fromEntries(newMap.entries());

    arr.forEach((object) => {
        for (const property in object)
            if (property === key) {
                for (const mapProperty in newObject) {
                    if (mapProperty === object[property])
                        newObject[mapProperty].push(object);
                }
            }
    });

    return newObject;
}