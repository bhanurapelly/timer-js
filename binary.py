def count_rotations_binary(nums):
    lo = 0
    hi = len(nums)-1
    
    while lo <= hi:
        mid = lo + hi //2
        mid_number = nums[mid]
        
        # Uncomment the next line for logging the values and fixing errors.
        print("lo:", lo, ", hi:", hi, ", mid:", mid, ", mid_number:", mid_number)
        
        if mid > 0 and mid_number < nums[mid-1]:
            # The middle position is the answer
            return mid
        
        elif mid_number < nums[hi]:
            # Answer lies in the left half
            hi = mid - 1  
        
        else:
            # Answer lies in the right half
            lo = mid + 1
    
    return -1



if __name__ == "__main__":
    nums = [19, 25, 29, 3, 5, 6, 7, 9, 11, 14]
    print(count_rotations_binary(nums))