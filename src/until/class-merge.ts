/**
 * 合并className
 * @param classes ...className
 * @return className
 */
function classMerge(...classes: string[]) {
  return classes
    .filter(name => typeof name === 'string' || name === '')
    .map(name => name.trim())
    .join(' ')
}

export default classMerge