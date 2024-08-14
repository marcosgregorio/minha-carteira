#include <iostream>
#include <unordered_map>
#include <vector>
using namespace std;

int main() {
  vector<int> nums = {1, 2, 3, 4};
  unordered_map<int, int> hash;

  int target = 7;
  for (int i = 0; i < nums.size(); i++) {
    int value = nums[i];
    int diff = target - value;
    if (hash.count(diff) > 0) {
        cout << "indice i: " << i << "hash diff: " << hash[diff] << endl;
    }
    hash.emplace(value, i);
  }
}
