#!/usr/bin/env node

import { Command } from 'commander'

const program = new Command()

program
  .argument('<string>', 'string to log')
  .action((message: string) => {
    console.log(`Hello ${message}`)
  })
  .description('Say Hello')

program
  .command('add <numbers...>')
  .action((numbers: string[]) => {
    // const total = numbers.reduce((a, b) => a + b, 0)
    // console.log(`Total: ${total}`)
    let inc = 0
    for (let i = 0; i < numbers.length; i++) {
      const conv = parseInt(numbers[i]!)
      inc += conv
    }
    console.log(inc.toLocaleString())
  })
  .description('Add numbers and log the total')

program
  .command('get-max-number <numbers...>')
  .action((numbers: string[]) => {
    // let numbers2 = [...numbers]
    // for (let i = 0; i < numbers2.length; i++) {
    //   for (let j = 0; j < numbers2.length - 1 - i; j++) {
    //     if (numbers2[j] > numbers2[j + 1]) {
    //       const tmp = numbers2[j]
    //       numbers2[j] = numbers2[j + 1]
    //       numbers2[j + 1] = tmp
    //     }
    //   }
    // }
    // console.log(numbers2[numbers2.length - 1])
    const nums: number[] = numbers.map((s: string) => parseInt(s))
    let max = 0
    for (let i = 0; i < nums.length; i++) {
      if (nums[i]! > max) {
        max = nums[i]!
      }
    }
    console.log(max)
  })
  .description('Get the greatest number out of a set of numbers')

program.parse(process.argv)
