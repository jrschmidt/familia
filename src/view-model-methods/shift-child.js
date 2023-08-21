// This method rearranges people in the rows array when a
// 'shift to child' (male or female root) change is triggered.

export const shiftChildPeople = (viewModel, familyTree, shiftMode) => {

  let generations = viewModel.generations
  let rows = [...viewModel.rows]

  const oldRoot = rows[0][0]
  const child = familyTree.people[oldRoot].childId
  const spouse = familyTree.people[oldRoot].spouseId

  // Delete oldest generation.
  rows.pop()

  // Add child as new root.
  rows.unshift( [child] )

  // Add spouse's ancestors.
  let next = [spouse]

  for (let i=1; i<generations; i++) {
    let newGen = []
    next.forEach( (p) => {
      newGen.push(familyTree.people[p].fatherId)
      newGen.push(familyTree.people[p].motherId)
    })

    rows[i] = ( shiftMode === 'toChildMaleRoot' ) ?
    rows[i].concat(next) :
    next.concat(rows[i])
    
    next = newGen
  }
  
  return rows
}