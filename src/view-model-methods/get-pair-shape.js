// Function to return the "shape" ('singleton', 'normal', 
// 'compressed') of a pair component based on its generation
// in the tree view.

export const getPairShape = (location) => {
  if ( location === 'gen0root' ) {
    return 'singleton'
  } else if ( location[3] === '4' ) {
    return 'compressed'
  } else {
    return 'normal'
  }
}