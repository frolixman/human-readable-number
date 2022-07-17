module.exports = function toReadable (number) {
    let resultStr = '';

    const dictionary_1_to_19 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dictionary_20_to_90 = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const dictionary_100_to_900 = 'hundred';

    if (number < 20) {                              //numbers: 0...19
        resultStr = dictionary_1_to_19[number];
    } else if (number < 100) {                      //numbers: 20...99
        resultStr = (number % 10) === 0 ? dictionary_20_to_90[number / 10] : dictionary_20_to_90[Math.floor(number / 10)] + ' ' + dictionary_1_to_19[number % 10];
    } else {                                        //numbers: 100...999
        if (number % 100 === 0){
            resultStr = dictionary_1_to_19[number / 100] + ' ' + dictionary_100_to_900;
        } else if (number % 10 === 0) {
            resultStr = dictionary_1_to_19[Math.floor(number / 100)] + ' ' + dictionary_100_to_900 + ' ' + dictionary_20_to_90[(number % 100) / 10];
        } else {
            if (number % 100 < 20) {
                resultStr = dictionary_1_to_19[Math.floor(number / 100)] + ' ' + dictionary_100_to_900 + ' ' + dictionary_1_to_19[number % 100];
            } else {
                resultStr = dictionary_1_to_19[Math.floor(number / 100)] + ' ' + dictionary_100_to_900 + ' ' + dictionary_20_to_90[Math.floor((number % 100) / 10)] + ' ' + dictionary_1_to_19[(number % 100) % 10];

            }
        }

    }

    return resultStr;
  
}

