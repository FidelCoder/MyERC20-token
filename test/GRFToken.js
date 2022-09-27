const GRFToken = artifact.require('GRFToken.sol')

contract('GRFToken', (accounts) => {
    before(async () =>{
        GRFToken = await GRFToken.deployed()
    })
    it('if it is 10000000', async () => {
        let balance = await GRFToken.balanceOf([0])
    })
});