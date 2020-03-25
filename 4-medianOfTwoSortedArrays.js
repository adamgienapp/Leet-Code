var findMedianSortedArrays = function(nums1, nums2) {
  const lazyArray = [...nums1, ...nums2].sort((a, b) => a - b);
  const midpt = Math.floor(lazyArray.length/2);
  return lazyArray.length % 2 === 0 ? (lazyArray[midpt] + lazyArray[midpt - 1])/2 : lazyArray[midpt];
};
