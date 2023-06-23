// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    const HqBlock = 42;
    return Math.abs(blocks - HqBlock)
}

function distanceFromHqInFeet(blocks) {
    const HqBlock = 42;
    const feetperBlock = 264;
    const distanceInBlocks = Math.abs(blocks - HqBlock);
    return distanceInBlocks * feetperBlock;
}

function distanceTravelledInFeet(startBlock, endBlock) {
    const feetperBlock = 264;
    const distanceInBlocks = Math.abs(endBlock - startBlock);
    return distanceInBlocks * feetperBlock;
}

function calculatesFarePrice(start, destination) {
    const feetperBlock = 264;
    const distanceInBlocks = Math.abs(destination - start);
    const distanceInFeet = distanceInBlocks * feetperBlock;

    if (distanceInFeet <= 400){
        return 0;
    } else if (distanceInFeet <= 2000){
        const farePrice = (distanceInFeet - 400) * 0.02;
        return farePrice;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
        return 25;
    } else {
        return "cannot travel that far"
    }
}

