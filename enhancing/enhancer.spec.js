const enhancer = require('./enhancer.js');
// test away!
const testDataOne = {
 name:'one',
 durability:50,
 enhancement:10
}

const testDataTwo = {
    name:'two',
    durability:60,
    enhancement:20
}

describe('test',()=>{
    it('to see if the test working',()=>{
 expect(true).toBe(true)
    })
})

describe('test enhancer function',()=>{
    it('repair',()=>{
    const result = enhancer.repair(testDataOne)
    expect(result.durability).toBe(100)
    })

    it('success less than 20',()=>{
    const result = enhancer.success(testDataOne)
    expect(result.enhancement).toBe(11)
    })

    it('success at 20',()=>{
    const result = enhancer.success(testDataTwo)
    expect(result.enhancement).toBe(20)
    expect(result.durability).toBe(60)
    })

    it('fail and enhancement less than 15',()=>{
    const result = enhancer.fail(testDataOne)
    expect(result.durability).toBe(45)
    })

    it('enhancement is 15 or more',()=>{
    const result = enhancer.fail(testDataTwo)
    expect(result.durability).toBe(50)
    expect(result.enhancement).toBe(19)
    })

    it('stretch get',()=>{
    const sample ={
        name:'sample',
        durability:100,
        enhancement:10
    }
    const result = enhancer.get(sample)
    
    expect(result.name).toBe('[+10] sample')
    
    })
})
