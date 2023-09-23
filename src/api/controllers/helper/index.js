/**
 * @param {object} query
 * @returns {object<array>}  
 */

const sortByAllowedValues = ['id', 'reads', 'likes', 'popularity']
const directionAllowedValues = ['desc', 'asc']

exports.querySelector = (query) => {
   
    const nonExist = []
    Object.keys(query).forEach((key, index) => {
      
        if(!query[key] ) {
            nonExist.push(key)
        } else if(key !== 'tags') {
            if(key === 'sortBy' &&!sortByAllowedValues.includes(query[key]) ) {
                nonExist.push(key)
            }
            if(key === 'direction' && !directionAllowedValues.includes(query[key]) ) {
                nonExist.push(key)
            }
        } 
    })

    return {nonExist}
}

exports.sortingFunc = async (data, sortBy, direction) => {
    if (direction === "asc") {
      return data.sort((p1, p2) => (p1[sortBy] > p2[sortBy]) ? 1 : (p1[sortBy] < p2[sortBy]) ? -1 : 0) ;
    }
      return data.sort((p1, p2) => (p1[sortBy] < p2[sortBy]) ? 1 : (p1[sortBy] > p2[sortBy]) ? -1 : 0) ;
  };