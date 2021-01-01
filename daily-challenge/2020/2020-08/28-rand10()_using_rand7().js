/**
 * PROMPT:
 * Implement rand10() using rand7().
 */

/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function() {
  while (true) {
      const roll1 = rand7();
      const roll2 = rand7();
      
      const outcome = (roll1 - 1) * 7 + (roll2 - 1) + 1;
      
      if (outcome > 40) continue;
      
      return outcome % 10 + 1;
  }
};