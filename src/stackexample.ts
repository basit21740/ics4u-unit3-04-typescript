/*
* This program test stack class.
*
* @author  Abdul Basit Butt
* @version 1.0
* @since   2022-02-03
*/

import { MrCoxallStack } from "./index"

const aStack = new MrCoxallStack()

aStack.push('331')
aStack.push(12)

console.log('Initial Stack:')
aStack.showStack()

console.log('Peak Stack:')
const peakVal: unknown = aStack.peak()
console.log(peakVal)

console.log('Show Stack:')
aStack.showStack()

console.log('Clear Stack:')
aStack.clear()
aStack.showStack()

console.log('\nDone.')
