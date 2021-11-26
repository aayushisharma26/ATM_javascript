const num = require("readline-sync")
console.log("🤩WELCOME🤩")

var card =num.question("PLEASE INSERT YOUR CARD💳   ")
if (card == "chipside"){
    console.log("TRANSACTION IS IN PROCESS🕐  ")}
else{
    console.log("PLEASE INSRE YOUR CARD AGAIN💳  ")       }                        
    var lang=num.question("SELECT THE LANGUAGE \n🔸1)ENGLISH\n🔸2)HINDI\n   ")
    if (lang=="1"){
        var pin=num.question("ENTER THE PIN👆🏻  ")
        var pin1=2724
        if (pin==pin1){
           console.log("INPROCESS🕐  ")}
        else{
            console.log("PLEASE ENTER THE CORRECT PIN  ") }   
            var acc=num.question("TYPE OF ACCOUNT \n🔸1)SAVING ACCOUNT\n🔸2)CURRENT ACCOUNT\n  ")
            if (acc=="1" || " 2"){
               console.log("INPROCESS🕐  ")}
            else{
                console.log("CORRECT THE ACCOUNT TYPE  ")   }   
                var amt=num.question("ENTER THE AMOUNT TO BE WIDRAWAL💸💸\nYOUR BALANCE IS 40000  ")
                if (amt %100==0){
                    if (10000>amt){
                        console.log("PLEASE COLLECT YOUR CASH  ")
                        console.log(40000-amt,"AMOUNT IS REMAINING💸💸💸💸  ")}
                    else {
                        console.log("CASH CANNOT BE WIDRAWAL MORE THAN 10000 AT ONE TIME  ") }   
                }
                else{
                    console.log("AMOUNT ENTERED IS NOT VALID")
                 
                        var rec=num.question("DO YOU WANT RECEPIT  ")
                        if (rec=="yes"){
                        console.log("TAKE THE RECIPIT  ")
                        console.log("THANK YOU FOR BANKING WITH US🤝🏻😍   ")}
                        else {
                        console.log("YOU ARE HELPING TO SAVE TREES🤝🏻😍  ") }
                        
            
        
        }}
else{
    var pin=num.question("पिन दर्ज करें👆🏻  ")
    var pin1=2724
    if (pin==pin1){
        console.log("इस प्रक्रिया में🕐  ")}
    else
        console.log("कृपया सही पिन दर्ज करें  ") }   
        var acc=num.question("खाते का प्रकार \n🔸1)बचत खाता\n🔸2)चालू खाता\n  ")
        if (acc=="1" || " 2"){
            console.log("इस प्रक्रिया में🕐  ")}
        else{
            console.log("खाता प्रकार सही करें  ")   }   
            var amt=num.question("निकासी की जाने वाली राशि दर्ज करें💸💸\nआपका बैलेंस 40000 है ")
            if (amt %100==0){
                if (10000>amt){
                    console.log("कृपया अपना कैश जमा करें  ")
                    console.log(40000-amt,"राशि शेष है💸💸💸💸  ")}
                else {
                    console.log("नकद एक बार में १०००० से अधिक नहीं निकाला जा सकता है ") }   
            }
            else{
                console.log("दर्ज की गई राशि मान्य नहीं है")
            }    
                    var rec=num.question("क्या आप रसीद चाहते हैं ")
                    if (rec=="yes"){
                    console.log("रसीद ले लो ")
                    console.log("हमारे साथ बैंकिंग के लिए धन्यवाद🤝🏻😍   ")}
                    else {
                    console.log("आप पेड़ बचाने में मदद कर रहे हैं🤝🏻😍  ") }
                    
        
