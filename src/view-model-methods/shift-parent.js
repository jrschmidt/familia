// This method rearranges people in the rows array when a
// 'shift to father or 'shift to mother'' change is triggered.

export const shiftParentPeople = (viewModel, familyTree, shiftMode) => {

  let generations = viewModel.generations

  let rows = [...viewModel.rows]

  // Delete youngest generation.
  rows.shift()

  // Cut other generations in half, to remove spouse's ancestors.
  rows.forEach( (row, index, rows) => {
    rows[index] =
      ( shiftMode === 'toFather' ) ?
      row.slice(0, row.length/2) :
      row.slice(row.length/2)
  })

  // Add next older generation.
  let newRow = []
  rows[generations - 2].forEach( (personId) => {
    newRow.push(familyTree.people[personId].fatherId)
    newRow.push(familyTree.people[personId].motherId)
  })
  rows.push(newRow)

  return rows
}