// Function returns an array of arrays with person IDs arranged by
// generation according to their place in the family tree.

export const rowsPopulate = (familyTree, generations, rootPersonId) => {
    // Start with an array of empty arrays.
    let rows = []
    
    // Inject root person into rows.
    rows.push( [rootPersonId] )

    // For subsequent rows, inject parents of people in previous rows.
    let previousRow = rows[0]

    for (let gen = 0; gen < generations - 1; gen++) {
      let row = []
      previousRow.forEach( (personId) => {
        let personInfo = familyTree.people[personId]
        row.push(personInfo.fatherId)
        row.push(personInfo.motherId)
      })

      rows.push(row)
      previousRow = row
    }

    return rows
}