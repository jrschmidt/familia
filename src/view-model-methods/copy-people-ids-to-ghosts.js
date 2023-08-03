// Copies the person IDs in the static people pairs to their corresponding ghost pair.

export const copyPeopleIdsToGhosts = (viewModel) => {
  const staticPeoplePairs = viewModel.peoplePairs.filter( (pair) => pair.label.slice(-5) != 'ghost')
  const ghostPeoplePairs = viewModel.peoplePairs.filter( (pair) => pair.label.slice(-5) === 'ghost')
  ghostPeoplePairs.forEach( (pair, index) => {
    pair.people = staticPeoplePairs[index].people
  })
}