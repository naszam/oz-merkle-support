let catchRevert = require("./exceptionsHelpers.js").catchRevert
const MerkleTree = require('./merkleTree.js').MerkleTree
var MyContract= artifacts.require('./MyContract')

contract('MyContract', function(accounts) {

  const owner = accounts[0]
  const random = accounts[1]
  const redeemer = accounts[2]
  const addresses = [owner, random, redeemer]

  const merkleTree = new MerkleTree(addresses);
  const root = merkleTree.getHexRoot();
  //console.log(root)
  const proof = merkleTree.getHexProof(redeemer);
  //console.log(proof)

  let instance

  // Before Each
  beforeEach(async () => {
    instance = await MyContract.new()
  })

  describe("Functions", () => {

    describe("claim()", async () => {

      it("check redeemer account via MerkleProof verify()", async () => {
        const result = await instance.claim(proof, root, {from:redeemer})
        assert.isTrue(result, "MerkleProof not working")
      })

    }) 
  })
})
