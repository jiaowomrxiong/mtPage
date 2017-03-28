/**
 * Created by hasee on 2017/3/25.
 */
var input =read_line();
var arr = input.split("");
var result = 0;
for(var i=1;i<arr.length;i++){
    for(var j=0;j<arr.length;){
        var temp = arr.splice(j, j+i);
        var num = temp[0]
        for(var k=0;k<temp.length;k++){
            num ^= temp[k];
        }
        if(num == ""){
            result +=1;
        }
    }
}
console.log(result)