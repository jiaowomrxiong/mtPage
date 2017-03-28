var line;
var result=0;
var n;
n=read_line();
n=parseInt(n[0]);
if((n>=1)&&(n<=100)){
    for(var i=0;i<n;i++){
        line = read_line();
        line = line.split(' ');
        result=result+parseInt(line[0])*(parseInt(line[1])/100);
    }
    print(result.toFixed(3));
}