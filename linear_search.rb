def linear_search(list, target)
    for i in 0..(list.length)
        if list[i] == target
            return i
        end
    end
    return nil;
end

def verify (index)
    if index != nil
        puts "Target found at index, #{index}"
    else
        puts "Target not in the list"
    end
end

numbers = [1,2,3,4,5,6,7,8,9,10]

result = linear_search(numbers, 10)
verify(result)