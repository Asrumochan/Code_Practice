const boomerang=function(arr,ar){
    for (let i = 0; i < arr.length-2; i++) {
        if(arr[i]==arr[i+2] && arr[i]!=arr[i+1]){
            ar.push([arr[i],arr[i+1],arr[i+2]])
        }
    }
    return  ar;
}
 var count=0;
 ar=[];
 arr=[3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2];
 console.log(boomerang(arr,ar));