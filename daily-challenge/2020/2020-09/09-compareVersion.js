/**
 * PROMPT:
 * Compare two version numbers version1 and version2.
 * If version1 > version2 return 1, if version1 < version2 return -1, otherwise return 0.
 */

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  const v1 = version1.split('.');
  const v2 = version2.split('.');
  let maxLen = Math.max(v1.length, v2.length);
  
  for (let i = 0; i < maxLen; i++) {
      let data1 = i < v1.length ? parseInt(v1[i], 10) : 0;
      let data2 = i < v2.length ? parseInt(v2[i], 10) : 0;
      
      if (data1 !== data2) {
          return data1 > data2 ? 1: -1;
      }
  }
  
  return 0;
};