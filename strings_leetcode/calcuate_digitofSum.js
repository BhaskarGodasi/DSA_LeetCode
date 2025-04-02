var digitSum = function(s, k) {
    while (s.length > k) {
        let newStr = '';
        
        // Process the string in groups of size k
        for (let i = 0; i < s.length; i += k) {
            // Get the current group (could be smaller than k at the end)
            let group = s.slice(i, i + k);
            
            // Calculate sum of digits in the group
            let sum = 0;
            for (let j = 0; j < group.length; j++) {
                sum += parseInt(group[j]);
            }
            
            // Add the sum as a string to our new string
            newStr += sum.toString();
        }
        
        // Update s for the next round
        s = newStr;
    }
    
    return s;
    
};

digitSum("11111222223",3)