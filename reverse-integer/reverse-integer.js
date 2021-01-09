/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var rev = 0;
    let min = -214748365;
    let max = 214748365;
    if (x < 0)
        {
            rev = -rev;
        }
    while (x !== 0)
        {
            var rem = x % 10;
            x = parseInt(x / 10);
             if ((rev <= min) || (rev >= max))
                {
                    return 0;
                }
            rev = rev * 10 + rem;
        }
   
    return rev;
};
