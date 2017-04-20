const expect = require('chai').expect
const kiloToLibras  = require('..').kilosToLibras
const librasToKilos =  require('..').librasToKilos

describe('#kilos_to_libras',function(){
  it('Convertir de kilos a libras',function(){
    const conversion = kiloToLibras(1)
    expect(conversion).to.equal(2.20462)
  })
  it('Convertir de libras a kilos', function(){
    const conversion = librasToKilos(2.5)
    expect(conversion).to.equal(1.13398)
  })
})
