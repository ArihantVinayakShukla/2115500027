class AverageCalculator{
    constructor(windowSize){
        this.windowSize = windowSize;
        this.numbers = [];
    }

    addNumber(num){
        if(this.numbers.length >= this.windowSize){
            this.numbers.shift();
        }
        this.numbers.push(num);
    }
    getAverage(){
        if(this.numbers.length == 0){
            return 0;
        }
        const sum = this.numbers.reduce((a, b)=>{
            a+b
        }, 0);

        return sum / this.numbers.length;
    }

    getWindowState() {
        return {
            windowPrevState: this.numbers.slice(0, -1),
            windowCurrState: this.numbers
        }
    }
}

module.exports = AverageCalculator;