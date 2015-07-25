/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var pos = 0;
    var m = nums1.length; var n = nums2.length;
    return ((m+n)&1)?findk(nums1, nums2, (m+n+1)>>1):
    findk(nums1, nums2, (m+n)>>1)/2 + findk(nums1, nums2, ((m+n)>>1)+1)/2;
    
};

function findk(m, n, k){

    var i=0; j=0;
    for(;i<m.length&&j<n.length;){
            console.log(i,j,k);

        --k;
        if(m[i]<n[j]){
            if(k==0){
                console.log(i, m[k])
                return m[i];
            }
            ++i;
        }else if(k==0){
                            console.log(j,n[j])

            return n[j];
        }else{
            ++j;
        }
    }
    var x =  i>=m.length?n[j + k - 1]:m[i+ k - 1];
    return x;

}

console.log(findMedianSortedArrays([1,2,2], [1,2,3]));